import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import meal from './../../../assets/images/meal.jpeg';
import { Input } from '@rneui/themed';
import {Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';

export function MenuScreen(props: any) {
  type navProps = StackNavigationProp<NavegacaoPrincipalParams,  'login' ,'cadastro'>;
  const navigation = useNavigation<navProps>();
  return (
    <ImageBackground source={meal} style={styles.background}>
      <View style={styles.container}>
        <Button 
          title="Sou Nutricionista"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)'}} 
          containerStyle={{   marginTop:230}}
          onPress= {() => navigation.navigate('loginNutri')}  
          raised={true}></Button>
        <Button 
          title="Sou Paciente"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)'}} 
          containerStyle={{ marginTop:15}}
          onPress= {() => navigation.navigate('login')} 
          raised={true}></Button>
          <Text style={{marginTop:10}}onPress= {() => navigation.navigate('cadastro')} >Nao possui cadastro? Clique aqui. </Text>
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
  }
});
