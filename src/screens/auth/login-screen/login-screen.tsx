import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native"
import ButtonPrimary from "../../../Components/button-primary";

interface IProps {
   
}

const LoginScreen: React.FC<IProps> = ({ }) => {
    const [email,setEmail] = useState<string>('')

    const user = [
        {id:1,name:"Mudassar"},
        {id:2,name:"Ali"},
    ]
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <ButtonPrimary title="Login" onPress={() => {
                Alert.alert('Login success!')
            }}
            style={{marginHorizontal:10,}}
            textStyle={{fontSize:40}} />
        </View>
    )
}


export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems:'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }

})

