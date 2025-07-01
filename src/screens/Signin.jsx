import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
const Signin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signin</Text>
    <Input placeholder='Email' />
    <Input placeholder='Password' secureTextEntry />
      <Button title='Signin' onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    
        // backgroundColor: '#f0f0f0',
    },
    text:{
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'black',  
        textAlign: 'center',
        // marginVertical: 50,
    },
})