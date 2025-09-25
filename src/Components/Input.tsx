import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface IProps {
  placeholder: string;
  secureTextEntry?: boolean;
  placeholderTextColor: string;
  value: string;
  onChangeText: (text: string) => void;
  inputContainer?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
const Input: React.FC<IProps> = ({
  placeholder,
  secureTextEntry,
  placeholderTextColor,
  value,
  onChangeText,
  inputContainer,
  inputStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.inputContainer, inputContainer]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, inputStyle, textStyle]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    flex: 1,
    color: '#3d5a80',
    paddingVertical: 8,
    marginLeft: 10,
  },
});
