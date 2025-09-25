import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { ButtonPrimary, Input } from '../../../components';

interface IProps {
  navigation: any;
}
const SignupScreen: React.FC<IProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signin</Text>
      <Input
        placeholder="Email"
        placeholderTextColor="gray"
        onChangeText={setEmail}
        value={email}
      />
      <Input placeholder="Password" secureTextEntry={true} placeholderTextColor='gray' onChangeText={setPassword} value={password} />
      <ButtonPrimary title="Signin" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default SignupScreen;
