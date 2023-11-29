import React , { useState } from 'react';
import meal from './../../../assets/images/meal.jpeg';
import { View, Text, ImageBackground, StyleSheet, Alert , TextInput} from 'react-native';
//import { Input } from '@rneui/themed';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export interface LoginscreenProps {}

export function LoginScreen(props: LoginscreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login','menuPaciente'>;
  const navigation = useNavigation<navProps>();
  const auth = getAuth()

  // const handleLogin = () => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isValidEmail = emailRegex.test(email);
  //   const isValidPassword = password.length >= 6;

  //   setIsValidEmail(isValidEmail);
  //   setIsValidPassword(isValidPassword);

  //       if (!isValidEmail || !isValidPassword) {
  //     return ;
  //   }  if (isValidEmail && isValidPassword){
  //     navigation.navigate('menuPaciente')}
  //    //Alert.alert(`Login Realizado!`);}
  // };

// const handleLogin = async({email,password}:any)=> {
//           await signInWithEmailAndPassword(auth, email,password)
//           .then(usuarios => navigation.navigate('menuPaciente'))
//           .catch(erro => Alert.alert('Erro', 'Login ou senha incorreta'));
// }

const handleLogin = async ({ email, password }: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigation.navigate('menuPaciente');
  } catch (error) {
    console.error('Error signing in:', error);
    Alert.alert('Erro', 'Login ou senha incorreta');
  }
};

  return (
    <ImageBackground source={meal} style={styles.background}>
      <View style={styles.container}>
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
         paddingHorizontal: 10,
          borderColor: isValidEmail ? 'black' : 'red',
        }}
      />
      {!isValidEmail && <Text style={{ color: 'red', marginTop:-15 }}>Email Inválido
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
         paddingHorizontal: 10,
         borderColor: isValidPassword ? 'black' : 'red',
        }}
      />
        {!isValidPassword && <Text style={{ color: 'red', marginTop:-15}}>Senha Inválida
</Text>}
        <Button
          title=" Login"
           onPress={handleLogin} 
           containerStyle={{borderRadius: 80}} 
           style={styles.button}
           buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' ,borderRadius: 80}}
          icon={
            <Icon
              name="restaurant"
              size={24}
              color="white" 
            />
          }
          raised={true}></Button>
          <Button title="Voltar" onPress={() => navigation.goBack()}
          style={styles.button}
           containerStyle={{   marginTop:15,borderRadius: 80}} 
           buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' ,borderRadius: 80}}
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
    alignItems: 'center',
    marginTop: 400,
  },
  button: {
    borderRadius: 80,
    height: 40,
    //width: 150
    width: 300
  },
});
