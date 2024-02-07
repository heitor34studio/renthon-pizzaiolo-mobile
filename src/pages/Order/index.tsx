import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Modal, FlatList } from "react-native";
import {Feather} from '@expo/vector-icons'
import { api } from "../../services/api";
import ModalPicker from "../../components/ModalPicker";
import { ListItem } from "../../components/ListItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

type RouteDeatilParams = {
    Order:{
        table: number | string;
        order_id: string;
    }
}

export type CategoryProps = {
    id: string;
    name: string;
}

export type ProductProps = {
    id: string;
    name: string;
}

type ItemProps = {
    id: string; 
    name: string;
    product_id: string;
    amount: number | string;
}

type OrderRouteProps = RouteProp<RouteDeatilParams, 'Order'>;

export default function Order(){

    const route = useRoute<OrderRouteProps>();

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    const [category, setCategory] = useState<CategoryProps[] | []>([])
    const [categorySelected, setcategorySelected] = useState<CategoryProps | undefined>()
    const [modalVisible, setModalVisible] = useState(false)

    const [products, setProducts] = useState<ProductProps[] | []>([]);
    const [productSelected, setProductSelected] = useState<ProductProps | undefined>()
    const [modalProductVisible, setModalProductVisible] = useState(false)

    const [amount, setAmount] = useState('1')
    const [items, setItems] = useState<ItemProps[]>([])
    

    useEffect(()=>{
        async function loadingInfo(){
            const response = await api.get('/category')
            setCategory(response.data)
            setcategorySelected(response.data[0])
        }
        loadingInfo();
    },[])

    useEffect(()=>{
        async function loadProducts(){
            const response = await api.get('/category/product',{
                params:{
                    category_id: categorySelected?.id
                }
            })

            setProducts(response.data);
            setProductSelected(response.data[0]);
        }
        loadProducts()
    }, [categorySelected])


    async function handleCloseOrder(){
        try{
            await api.delete('/order',{
                params:{
                    order_id: route.params?.order_id
                }
            })

            navigation.goBack();
        }catch(err){
            console.log(err)
        }
    }

    function handleChangeCategory(item:CategoryProps){
        setcategorySelected(item)
    }

    function handleChangeProduct(item:ProductProps){
        setProductSelected(item)
    }

    async function handleAdd(){
        try{
            const response = await api.post('/order/add',{
                order_id: route.params?.order_id,
                product_id: productSelected?.id,
                amout: Number(amount)
            })
            let data = {
                id: response.data.id,
                product_id: productSelected?.id as string,
                name: productSelected?.name as string,
                amount: amount
            }
            setItems(oldArray => [...oldArray,data])

        }catch(err){
            console.log(err)
        }
    }

    async function handleDeleteItem(item_id:string){
        await api.delete('/order/remove',{
            params:{
                item_id: item_id
            }
        })
        let removeItem = items.filter( item => {
            return (item.id !== item_id)
        })
        setItems(removeItem)
    }

    function handleFinishOrder(){
        navigation.navigate("FinishOrder",{table: route.params?.table, order_id: route.params.order_id})
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Mesa {route.params.table}
                </Text>
                { items.length === 0 &&(
                    <Pressable onPress={handleCloseOrder}>
                        <Feather name="trash-2" size={30} color="#ff3f4b"/>
                    </Pressable>
                )}
            </View>

            {category.length !== 0 &&(

                <Pressable style={styles.input} onPress={()=>setModalVisible(true)}>
                    <Text style={{color:'#fff'}} >
                        {categorySelected?.name}
                    </Text>
                </Pressable>

            )}


            {products.length !== 0 &&(
                <Pressable style={styles.input} onPress={()=>setModalProductVisible(true)}>
                    <Text style={{color:'#fff'}}>
                        {productSelected?.name}
                    </Text>
                </Pressable>
            )}

            <View style={styles.qntdContainer}>
                <Text style={styles.qntdText}>Quantidade</Text>
                <TextInput style={[styles.input, {width: '60%', textAlign: 'center'}]} placeholder="Ex: 2..." 
                placeholderTextColor="rgb(100,100,100,0.7)" keyboardType="numeric" value={amount} onChangeText={setAmount} />
            </View>

            <View style={styles.actions}>
                <Pressable style={styles.buttonAdd} onPress={handleAdd}>
                    <Text style={[styles.buttonText, {fontSize:22}]}>+</Text>
                </Pressable>

                <Pressable style={[styles.button, {opacity: items.length === 0 ? 0.3 : 1}]} disabled={items.length === 0}
                            onPress={handleFinishOrder}
                >
                    <Text style={styles.buttonText}>Avançar</Text>
                </Pressable>
            </View>

            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{flex: 1, marginTop: 26}}
                data={items}
                keyExtractor={(item)=>(item.id)}
                renderItem={( {item} )=> <ListItem data={item} deleteItem={handleDeleteItem} /> }
            
            />

            <Modal transparent={true} visible={modalVisible} animationType="fade" >
                <ModalPicker handleCloseModal={()=>setModalVisible(false)} options={category} selectedItem={handleChangeCategory} />
            </Modal>
            <Modal transparent={true} visible={modalProductVisible} animationType="fade" >
                <ModalPicker handleCloseModal={()=>setModalProductVisible(false)} options={products} selectedItem={handleChangeProduct} />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1b130d',
        paddingVertical: '5%',
        paddingEnd: '4%',
        paddingStart: '4%'
    },
    header:{
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        marginTop: 25
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 14
    },
    input:{
        backgroundColor: '#3b3b3b',
        borderRadius: 6,
        width: '100%',
        height: 40,
        marginBottom: 12,
        justifyContent: 'center',
        paddingHorizontal: 9,
        color: '#fff',
        fontSize: 20
    },
    qntdContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    qntdText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    actions:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    buttonAdd:{
        width: '20%',
        backgroundColor: '#3fd1ff',
        borderRadius: 6,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#3b3b3b',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: '#73f799',
        borderRadius: 6,
        height: 40,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})