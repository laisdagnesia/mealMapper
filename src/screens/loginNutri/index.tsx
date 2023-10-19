//import * as React from 'react';
import React , { useState } from 'react';
import meal from './../../../assets/images/meal.jpeg';
import { View, Text, ImageBackground, StyleSheet, Alert } from 'react-native';
import { Input } from '@rneui/themed';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation';

export function LoginScreenNutri(props: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'loginNutri', 'menuNutri'>;
  const navigation = useNavigation<navProps>();

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 6;

    setIsValidEmail(isValidEmail);
    setIsValidPassword(isValidPassword);

        if (!isValidEmail || !isValidPassword) {
      return ;
    }  if (isValidEmail && isValidPassword){
      navigation.navigate('menuNutri')}
      //Alert.alert(`Login Realizado!`);}
  };

  return (
    <ImageBackground source={meal} style={styles.background}>
      <View style={styles.container}>
      <Input
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
          setIsValidEmail(true);
        }}
        value={email}
        style={{
          width: 200,
          borderWidth: 1,
          marginBottom: 10,
          borderColor: isValidEmail ? 'black' : 'red',
        }}
      />
      {!isValidEmail && <Text style={{ color: 'red', marginTop:-15 }}>Email Invalido</Text>}
      <Input
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        style={{
          width: 200,
          borderWidth: 1,
          marginBottom: 10,
         borderColor: isValidPassword ? 'black' : 'red',
        }}
      />
        {!isValidPassword && <Text style={{ color: 'red', marginTop:-15}}>Senha Invalida</Text>}
        <Button
          title=" Login"
           onPress={handleLogin} 
          containerStyle={{ borderRadius: 30}} 
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          icon={
            <Icon
              name="restaurant"
              size={24}
              color="white" 
            />
          }
          raised={true}></Button>
          <Button title="Voltar" onPress={() => navigation.goBack()}
           containerStyle={{  marginTop:15}} 
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
           />

      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'stretch',
    marginTop: 400,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 5
  },
});
