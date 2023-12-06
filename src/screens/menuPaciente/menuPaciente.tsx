import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import bg from './../../../assets/images/bg.jpeg';
import {Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth } from '@firebase/auth';

export function MenuPaciente(props: any) {
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'listaPlanoAlimentar','agendamento'>;
  const navigation = useNavigation<navProps>();
  const logOut = () => {
    const auth = getAuth();
    auth.signOut();
    navigation.navigate('menu');
  };

  return (
    <ImageBackground source={bg} style={styles.background}>
        <Text style={styles.titulo}> MENU PACIENTE</Text> 
      <View style={styles.container}>
        <Button 
          title="Agendar Consulta"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)',borderRadius: 80}} 
          containerStyle={{ marginTop:-50,borderRadius: 80}}
          style={styles.button}
          onPress= {() => navigation.navigate('agendamento')}
          icon={
            <Icon
              name="calendar"
              size={24}
              color="white" 
              style={{ marginRight: 10 }}
            />
          } 
          raised={true}></Button>
          <Button 
          title="Meu Plano Alimentar Individual"
         buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)',borderRadius: 80}} 
         style={styles.button}
          containerStyle={{ marginTop:20,borderRadius: 80}}
          onPress= {() => navigation.navigate('listaPlanoAlimentar')} 
          raised={true}></Button>
          <Button 
          title="Comprar Produtos"
          style={styles.button}
          containerStyle={{ marginBottom:0,marginTop:15,borderRadius: 80}} 
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' ,borderRadius: 80}}
          onPress= {() => navigation.navigate('listaProdutos')} 
          raised={true}></Button>
          <Button title="Voltar" onPress={() => navigation.goBack()}
          style={styles.button}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)',borderRadius: 80}} 
          containerStyle={{ marginTop:40,borderRadius: 80}}/>

          <Text style={styles.texto}>Esqueceu a senha?{' '}
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}
        onPress={() => navigation.navigate('mudarSenha')}> Clique aqui</Text>.</Text>

         <Text style={{ color: 'blue', textDecorationLine: 'underline', marginTop:10, fontSize:15}}
        onPress={(logOut)}> Sign Out</Text>
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
    alignItems: 'center',
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop: 250,
    marginBottom:-200,
    color: 'rgb(79, 121, 66)' ,
  },
  texto: {
    fontSize:15,
    marginTop: 10 
  },
    button: {
    borderRadius: 80,
    height: 40,
    width: 400
    //width: 150
  },

});
