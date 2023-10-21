import React, { useState } from 'react';
//import * as React from 'react';
import comida from './../../../assets/images/comida.jpeg';
import { View, Text, ImageBackground, StyleSheet, Alert } from 'react-native';
import { Input } from '@rneui/themed';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';


export function CadastroScreen(props: any){
 const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login', 'cadastro'>;
  const navigation = useNavigation<navProps>();


  const handleSignIn = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 6;

    setIsValidEmail(isValidEmail);
    setIsValidPassword(isValidPassword);

    if (!isValidEmail || !isValidPassword) {
      return;
    } if(isValidEmail && isValidPassword) {
      //Alert.alert(`Nome: ${nome}\nCPF: ${cpf}\nEmail: ${email}\n Cadastro Realizado!`);
      navigation.navigate('login');
      
    }
  
  };

  return (
    <ImageBackground source={comida} style={styles.background}>
    <View style={styles.container}>
      <Input
        placeholder="Nome Completo"
        onChangeText={setNome}
        value={nome}
        style={{ width: 200, borderWidth: 1, marginBottom: 10 }}
      />
      <Input
        placeholder="CPF"
        onChangeText={setCPF}
        value={cpf}
        style={{ width: 200, borderWidth: 1, marginBottom: 10 }}
      />
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
          marginBottom: 1,
          borderColor: isValidEmail ? 'black' : 'red',
        }}
      />
      {!isValidEmail && <Text style={{ color: 'red',marginTop:-15}}>Email Invalido</Text>}
      <Input
        placeholder="Senha"
       onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        style={{
          width: 200,
          borderWidth: 1,
          borderColor: isValidPassword ? 'black' : 'red',
        }}
      />
        {!isValidPassword && <Text style={{ color: 'red', marginTop:-15 }}>Senha Invalida!</Text>}
       <Button
          title=" Cadastrar"
          onPress= {handleSignIn} 
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)'}}
          icon={
            <Icon
              name="save"
              size={24}
              color="white" 
            />
          }
          raised={true}></Button>
          {/*<Button
          title="Login"
          onPress= {() => navigation.navigate('login')} 
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          containerStyle={{ borderRadius: 30, marginTop:15}} 
        raised={true}></Button>*/}
          <Button title="Voltar" onPress={() => navigation.goBack()}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
            containerStyle={{ marginTop:15}} 
              raised={true}></Button>
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
   padding: 5,
    alignItems: 'stretch',
    marginTop: 260,
  },
  inputContainer: {
    backgroundColor: 'white',
   // borderRadius: 30,
  },
});

