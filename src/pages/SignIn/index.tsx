import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, ActivityIndicator } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";

export default function SignIn(){
    const {signIn, loadingAuth} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(){
        if(email ==='' || password ===''){
            return;
        }
        await signIn({email, password})
    }
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo-png.png')} />
            <View style={styles.inputContainer}>
                <TextInput placeholder="Digite seu Email..." style={styles.input} placeholderTextColor="#f0f0f0" value={email} onChangeText={setEmail}/>

                <TextInput placeholder="Digite sua Senha..." style={styles.input} placeholderTextColor="#f0f0f0" value={password} onChangeText={setPassword} secureTextEntry={true}/>

                <Pressable style={styles.button} onPress={handleLogin}>
                    { loadingAuth ? (
                        <ActivityIndicator size={25} color="#fff"/>
                    ):(
                        <Text style={styles.buttonText}>Acessar</Text>
                    )}
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1b130d'
    },
    logo:{
        width: 185,
        height: 95,
        marginBottom: 18
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        paddingVertical: 34
    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor: '#3b3b3b',
        marginBottom: 12,
        borderRadius: 6,
        paddingHorizontal: 8,
        color: '#fff'
    },
    button: {
        width: '95%',
        height: 40,
        backgroundColor: '#73f799',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3b3b3b'
    }
})