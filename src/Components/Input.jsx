import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ( {placeholder}) => {
  return (
    <View>
          <TextInput placeholder={placeholder} style={styles.input} />
        
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
     input: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        margin: 20,
        borderRadius: 10,
        width: '80%',
        backgroundColor: '#f0f0f0',
    },
})