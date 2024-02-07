import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import {Feather} from '@expo/vector-icons'
import { api } from "../../services/api";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

type RouteDetailParams = {
    FinishOrder:{
        table: number | string;
        order_id: string;
    }
}

type FinishOrderProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export default function FinishOrder(){
    
    const route = useRoute<FinishOrderProp>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    async function handleFinish(){
        try{
            await api.put('/order/send',{
                order_id: route.params?.order_id
            })


            navigation.popToTop();
        }catch(err){
            alert("Erro:" + err)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.alert}>Você deseja finalizar esse pedido?</Text>
            <Text style={styles.title}>Mesa {route.params?.table}</Text>

            <Pressable style={styles.button} onPress={handleFinish}>
                <Text style={styles.textButton}>Finalizar Pedido</Text>
                <Feather name="shopping-cart" size={23} color="#1b130d" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#1b130d',
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alert:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 12
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12
    },
    button:{
        backgroundColor: '#73f799',
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    textButton:{
        fontSize: 18,
        marginRight: 10,
        fontWeight: 'bold',
        color: '#1b130d'
    }
})