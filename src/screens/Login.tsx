import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Input from "../Components/Input";
interface IProps{
  navigation:any
}
const Login:React.FC<IProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <LinearGradient
      colors={["#f5a8e0", "#cbb4f8", "#a0e4f5"]}
      style={styles.container}
    >
      <Text style={styles.text}>User Login</Text>

      <Input
        placeholder="Email ID"
        placeholderTextColor="#1f3756ff"
        value={email}
        onChangeText={(text)=>setEmail(text)}
      />
      <Input
       placeholderTextColor="#1f3756ff"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.remember}
          onPress={() => setRememberMe(!rememberMe)}
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
            {rememberMe && (
              <></>
            )}
          </View>
          <Text style={styles.rememberText}>Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Forgot Password pressed!")}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 30,
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignItems: "center",
    marginTop: 10,
  },
  remember: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#3d5a80",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    backgroundColor: "#3d5a80",
  },
  rememberText: {
    color: "#3d5a80",
    fontSize: 14,
  },
  forgotText: {
    color: "#3d5a80",
  
    fontSize: 14,
  },
  button: {
    backgroundColor: "#3d5a80",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 6,
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
