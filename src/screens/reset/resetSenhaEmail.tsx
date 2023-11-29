import React, { useState } from 'react';
import resetImagem from './../../../assets/images/resetImagem.jpg';
import { View, Text, ImageBackground, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export function ResetScreen(props: any) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login' | 'cadastro'>;
  const auth = getAuth();
  const navigation = useNavigation();

  const enviarEmailReset = () => {
    if (!email) {
      setIsValidEmail(false);
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Email de redefinição de senha enviado');
      })
      .catch((error) => {
        console.error(error);
        alert('Não foi possível enviar o email de redefinição de senha');
      });
  };

  return (
    <ImageBackground source={resetImagem} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
            setIsValidEmail(true);
          }}
          value={email}
          style={{
            width: 350,
            height: 30,
            borderWidth: 1,
            borderRadius: 80,
            marginTop: 190,
            marginBottom: 20,
            fontSize: 20,
            paddingHorizontal: 10,
            borderColor: isValidEmail ? 'black' : 'red',
          }}
        />
        {!isValidEmail && <Text style={{ color: 'red', marginTop: -15 }}>Email Inválido</Text>}
        <Button
          title="Enviar Email de Redefinição"
          buttonStyle={styles.button}
          containerStyle={{ marginTop: 15, borderRadius: 80 }}
          onPress={enviarEmailReset}
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
