import React, { useState } from 'react';
//import * as React from 'react';
import comida from './../../../assets/images/comida.jpeg';
import { View, Text, ImageBackground, StyleSheet, Alert,TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';


export function CadastroScreen(props: any){
 const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [sexo, setSexo] = useState('');
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
      <TextInput
        placeholder="Nome Completo"
        onChangeText={setNome}
        value={nome}
        style={{ width: 300,
          height:30,
          borderWidth: 1,
          borderRadius: 80,
          marginBottom:20,
          fontSize:20,
          padding:2, }}
      />
      <TextInput
        placeholder="CPF"
        onChangeText={setCPF}
        value={cpf}
        style={{ width: 300,
          height:30,
          borderWidth: 1,
          borderRadius: 80,
          marginBottom:20,
          fontSize:20,
          padding:2, }}
      />
       <RNPickerSelect
          placeholder={{ label: 'Selecione o sexo', value: null }}
          onValueChange={(value) => setSexo(value)}
          items={[
            { label: 'Feminino', value: 'feminino' },
            { label: 'Masculino', value: 'masculino' },
          ]}
          value={sexo}
          style={pickerSelectStyles}
        />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
          setIsValidEmail(true);
        }}
        value={email}
        style={{
          width: 300,
          height:30,
          borderWidth: 1,
          borderRadius: 80,
          marginBottom:20,
          fontSize:20,
          padding:2,
          borderColor: isValidEmail ? 'black' : 'red',
        }}
      />
      {!isValidEmail && <Text style={{ color: 'red',marginTop:-15}}>Email Inválido
</Text>}
      <TextInput
        placeholder="Senha"
       onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        style={{
          width: 300,
          height:30,
          borderWidth: 1,
          borderRadius: 80,
          marginBottom:20,
          fontSize:20,
          padding:2,
          borderColor: isValidPassword ? 'black' : 'red',
        }}
      />
        {!isValidPassword && <Text style={{ color: 'red', marginTop:-15 }}>Senha Inválida
!</Text>}
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
    alignItems: 'center',
    marginTop: 200,
  },
  inputContainer: {
    backgroundColor: 'white',
  },

});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom:20,
    borderRadius: 80,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: 300, 
    marginLeft:60,
    height: 30, 
  },
  button: {
    borderRadius: 80,
    height: 40,
    width: 150
  },
});
