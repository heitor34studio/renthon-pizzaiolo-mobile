import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {Feather} from '@expo/vector-icons'

interface ItemProps {
    data:{
        id: string; 
        name: string;
        product_id: string;
        amount: number | string;
    };
    deleteItem: (item_id:string) => void;
}


export function ListItem({data, deleteItem}:ItemProps){
    function handleDeleteItem(){
        deleteItem(data.id)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.item}>{data.amount} - {data.name}</Text>
            <Pressable onPress={handleDeleteItem}>
                <Feather name="trash-2" color="#ff3f4b" size={26} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3b3b3b',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,
        padding: 12,
        borderRadius: 6,
        borderWidth: 0.3,
        borderColor: '#8a8a8a'
    },
    item: {
        color: '#fff'
    }
})