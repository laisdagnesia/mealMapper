import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import bg from './../../../assets/images/bg.jpeg';
import {Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import Icon from 'react-native-vector-icons/FontAwesome';

export function MenuPaciente(props: any) {
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'listaPlanoAlimentar','agendamento'>;
  const navigation = useNavigation<navProps>();
  return (
    <ImageBackground source={bg} style={styles.background}>
        <Text style={styles.text}> MENU PACIENTE</Text> 
      <View style={styles.container}>
        <Button 
          title="Agendar Consulta"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)',borderRadius: 80}} 
          containerStyle={{ marginTop:-100,borderRadius: 80}}
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

          <Button title="Voltar" onPress={() => navigation.goBack()}
          style={styles.button}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)',borderRadius: 80}} 
          containerStyle={{ marginTop:20,borderRadius: 80}}
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
    alignItems: 'center',
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop: 250,
    marginBottom:-200,
    color: 'rgb(79, 121, 66)' ,
  },
    button: {
    borderRadius: 80,
    height: 40,
    width: 400
    //width: 150
  },

});
