import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface IProps {
  placeholder: string;
  secureTextEntry?: boolean;
  placeholderTextColor: string;
  value: string;
  onChangeText:(text:string)=>void


}
const Input: React.FC<IProps> = ({ placeholder, secureTextEntry, placeholderTextColor,value, onChangeText }) => {

  return (
    <View style={styles.inputContainer}>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />


    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#3d5a80",
    marginVertical: 15,
    paddingHorizontal: 8,
    width: "90%",
    alignSelf: "center",
  },
  input: {
    flex: 1,
    color: "#3d5a80",
    paddingVertical: 8,
    marginLeft: 10,
  },
});
