import React, { useState } from 'react';
//import * as React from 'react';
import comida from './../../../assets/images/comida.jpeg';
import { View, Text, ImageBackground, StyleSheet, Alert,TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { getFirestore, setDoc, doc } from '@firebase/firestore';
import { ScrollView } from 'react-native';


export function CadastroScreen(props: any){
 const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [sexo, setSexo] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login', 'cadastro'>;
  const auth = getAuth();
  const db = getFirestore();
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      const { user } = userCredential;
  
      await setDoc(doc(db, 'usuarios', user.uid), {
        email,
        nome,
        cpf
      });
      navigation.navigate('login');
    } catch (error) {
      console.error('Error creating user:', error);
      Alert.alert('Error', 'Não foi possível criar o usuário, tente novamente.');
    }
  };

  return (
    <ImageBackground source={comida} style={styles.background}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <TextInput
        placeholder="Nome Completo"
        onChangeText={setNome}
        value={nome}
        style={{ width: 350,
          height:30,
          borderWidth: 1,
          borderRadius: 80,
          marginBottom:20,
          fontSize:20,
          paddingHorizontal: 10, }}
      />
      <TextInput
        placeholder="CPF"
        onChangeText={setCPF}
        value={cpf}
        style={{ width: 350,
          height:30,
          borderWidth: 1,
          borderRadius: 80,
          marginBottom:20,
          fontSize:20,
          paddingHorizontal: 10, }}
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
          width: 350,
          height:30,
          borderWidth: 1,
          borderRadius: 80,
          marginBottom:20,
          fontSize:20,
          paddingHorizontal: 10,
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
          width: 350,
          height:30,
          borderWidth: 1,
          borderRadius: 80,
          marginBottom:20,
          fontSize:20,
         // padding:10,
          borderColor: isValidPassword ? 'black' : 'red',
        }}
      />
        {!isValidPassword && <Text style={{ color: 'red', marginTop:-15 }}>Senha Inválida
!</Text>}
       <Button
          title=" Cadastrar"
          buttonStyle={styles.button}
          containerStyle={{marginTop:15,borderRadius: 80}} 
          onPress= {handleSignIn}
          // icon={
          //   <Icon
          //     name="save"
          //     size={24}
          //     color="white" 
          //   />
          // }
          raised={true}></Button>
          <Button title="Voltar" onPress={() => navigation.goBack()}
           buttonStyle={styles.botaoVoltar}
           containerStyle={{ borderRadius: 30, marginTop: 15 }}
              raised={true}></Button>
              
    </View>
    </ScrollView>
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
  button: {
    backgroundColor: 'rgb(34, 139, 34)',
    borderRadius: 80,
    height: 40,
    width: 300
  },
  botaoVoltar:{
    borderRadius: 80,
    height: 40,
    width: 300,
    backgroundColor: 'rgb(79, 121, 66)' 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 5,
    marginBottom: 55,
  },

});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    //paddingVertical: 1,
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
    width: 350,
    marginLeft:40,
    height: 30, 
  },
});
