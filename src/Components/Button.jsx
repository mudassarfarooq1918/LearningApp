import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7}  style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 20,
        width: '80%',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})