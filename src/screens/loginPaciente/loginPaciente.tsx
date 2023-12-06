import React , { useState } from 'react';
import meal from './../../../assets/images/meal.jpeg';
import { View, Text, ImageBackground, StyleSheet, Alert , TextInput} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ScrollView } from 'react-native';


export interface LoginscreenProps {}

export function LoginScreen(props: LoginscreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login','menuPaciente'>;
  const navigation = useNavigation<navProps>();
  const auth = getAuth()

const handleLogin = async() => {
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <Text style={styles.title}>Login Paciente</Text>
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
          // icon={
          //   <Icon
          //     name="restaurant"
          //     size={24}
          //     color="white" 
          //   />
          // }
          raised={true}></Button>
          <Button title="Voltar" onPress={() => navigation.goBack()}
          style={styles.button}
           containerStyle={{   marginTop:15,borderRadius: 80}} 
           buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' ,borderRadius: 80}}
           />
          <Text style={{ marginTop: 10,fontSize:15}}>Esqueceu a senha?{' '}
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}
        onPress={() => navigation.navigate('resetSenhaEmail')}> Clique aqui</Text>.</Text>

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
    marginTop: 400,
  },
  button: {
    borderRadius: 80,
    height: 40,
    width: 300
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(79, 121, 66)',
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 5,
    marginBottom: 55,
  },
});
