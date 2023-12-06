import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import meal from './../../../assets/images/meal.jpeg';
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
          style={styles.button}
          containerStyle={{ marginTop: 250, borderRadius: 80}} 
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)',borderRadius: 80}}
          onPress={() => navigation.navigate('loginNutri')}  
          raised={true}></Button>
        <Button 
          title="Sou Paciente"
          style={styles.button}
          containerStyle={{   marginTop:15,borderRadius: 80}} 
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' ,borderRadius: 80}}
          onPress= {() => navigation.navigate('login')} 
          raised={true}></Button>
          <Text style={{ marginTop: 10,fontSize:15 }}>Não possui cadastro?{' '}
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}
        onPress={() => navigation.navigate('cadastro')}>Clique aqui</Text>.</Text>
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
  },
  button: {
    borderRadius: 80,
    height: 40,
    width: 160,
  },
});
