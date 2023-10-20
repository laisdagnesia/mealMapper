import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import meal from './../../../assets/images/meal.jpeg';
import { Input } from '@rneui/themed';
import {Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';

export function MenuNutri(props: any) {
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login','calculosOpcoes'>;
  const navigation = useNavigation<navProps>();
  return (
    <ImageBackground source={meal} style={styles.background}>
      <View style={styles.container}>
        <Button 
          title="Avaliação Nutricional"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)'}} 
          containerStyle={{   marginTop:230}}
          onPress= {() => navigation.navigate('calculosOpcoes')}  
          icon={<FontAwesomeIcon icon={faWeightScale} size={24} color="white" />} 
          raised={true}></Button>
        <Button 
          title="Agendar Consulta"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)'}} 
          containerStyle={{ marginTop:10}}
          onPress= {() => navigation.navigate('agendamento')}
          icon={
            <Icon
              name="calendar"
              size={24}
              color="white" 
            />
          } 
          raised={true}></Button>
          <Button 
          title="MEUS PACIENTES"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)'}} 
          containerStyle={{ marginTop:10}}
          onPress= {() => navigation.navigate('login')} 
          raised={true}></Button>
          <Button 
          title="MEUS PACIENTES"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)'}} 
          containerStyle={{ marginTop:10}}
          onPress= {() => navigation.navigate('login')} 
          raised={true}></Button>
          <Button title="Voltar" onPress={() => navigation.goBack()}
           containerStyle={{  marginTop:15}} 
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
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
    alignItems: 'stretch',
  }
});
