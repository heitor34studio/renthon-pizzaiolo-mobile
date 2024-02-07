import React, { useContext, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, Button, TextInput, Pressable } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { api } from "../../services/api";
import { Entypo } from '@expo/vector-icons';

export default function Dashboard(){
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    const [table, setTable] = useState('');
    const  {signOut} = useContext(AuthContext)
    async function openOrder(){
        if(table === ''){
            return;
        }

        const response = await api.post('/order',{
            table: Number(table)
        })




        navigation.navigate('Order', {table: table, order_id: response.data.id})

        setTable('');
        
    }
    return(
        <SafeAreaView style={styles.container} >
            <View style={styles.leaving}>
                <Pressable  onPress={signOut}>
                    <Entypo name="log-out" size={24} color="white" /> 
                </Pressable>
            </View>
            <View style={styles.order}>
                <Text style={styles.title}>Novo Pedido:</Text>
                <TextInput style={styles.input} placeholder="Número da Mesa:" placeholderTextColor="rgb(100,100,100,0.7)" keyboardType="numeric"
                value={table} onChangeText={setTable}
                />
                <Pressable style={styles.button} onPress={openOrder}>
                    <Text style={styles.buttonText}>Abrir Mesa</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    leaving:{
        alignItems: 'flex-end',
        paddingVertical: 15,
        paddingRight: 30,
        backgroundColor: '#1b130d'
    },
    order:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#1b130d'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24
    },
    input:{
        width: '90%',
        height: 60,
        backgroundColor: '#3b3b3b',
        borderRadius: 6,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 22,
        color: '#fff'
    },
    button:{
        width: '90%',
        height: 40,
        backgroundColor: '#73f799',
        borderRadius: 6,
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#3b3b3b',
        fontWeight: 'bold'
    }
})