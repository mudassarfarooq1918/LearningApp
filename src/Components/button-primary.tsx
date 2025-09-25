import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native"

interface IProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    style?:StyleProp<ViewStyle>;
    textStyle?:StyleProp<TextStyle>
}


const ButtonPrimary:React.FC<IProps> = ({title,onPress,disabled,style,textStyle}) => {
    return (
        <TouchableOpacity style={[styles.container,style]} onPress={onPress} disabled={disabled}>
            <Text style={[styles.title,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}


export default ButtonPrimary

const styles = StyleSheet.create({
    container: {
        height:45,
        backgroundColor:'darkblue',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
    },
    title: {

        color:'white',
        fontWeight:'bold',
        fontSize:16
    }
})