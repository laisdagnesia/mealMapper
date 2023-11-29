import React, { useState } from 'react';
import resetImagem from './../../../assets/images/resetImagem.jpg';
import { View, Text, ImageBackground, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import { getAuth, updateProfile, updateEmail, updatePassword } from 'firebase/auth';

export function MudarSenhaScreen(props: any) {
    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login' | 'cadastro'>;
  const auth = getAuth();
  const navigation = useNavigation();

  const alterarSenha = () => {
    updatePassword(auth.currentUser, password)   
     .then(() => {
    alert('Senha atualizada');
     }).catch(() => {
       alert('Não foi possível realizar a operação');
     })
 }
 

  return (
    <ImageBackground source={resetImagem} style={styles.background}>
      <View style={styles.container}>
      <TextInput
        placeholder="  Senha"
       onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        style={{
          width: 350,
          height:30,
          borderWidth: 1,
          borderRadius: 80,
          marginBottom:20,
          marginTop:150,
          fontSize:20,
         // padding:10,
          borderColor: isValidPassword ? 'black' : 'red',
        }}
      />
        {!isValidPassword && <Text style={{ color: 'red', marginTop:-15 }}>Senha Inválida
!</Text>}
        <Button
          title="Alterar senha"
          buttonStyle={styles.button}
          containerStyle={{ marginTop: 15, borderRadius: 80 }}
          onPress={alterarSenha}
          raised={true}
        ></Button>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={styles.botaoVoltar}
          containerStyle={{ borderRadius: 30, marginTop: 15 }}
          raised={true}
        ></Button>
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
  button: {
    backgroundColor: 'rgb(34, 139, 34)',
    borderRadius: 80,
    height: 40,
    width: 300,
  },
  botaoVoltar: {
    borderRadius: 80,
    height: 40,
    width: 300,
    backgroundColor: 'rgb(79, 121, 66)',
  },
});
