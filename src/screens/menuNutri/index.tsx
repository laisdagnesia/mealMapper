import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import meal from './../../../assets/images/meal.jpeg';
import { Input } from '@rneui/themed';
import {Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation';

export function MenuNutri(props: any) {
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login', 'calculosOpcoes'>;
  const navigation = useNavigation<navProps>();
  return (
    <ImageBackground source={meal} style={styles.background}>
        <Text>MENU NUTRI</Text>
      <View style={styles.container}>
        <Button 
          title="Avaliação Nutricional"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)'}} 
          containerStyle={{   marginTop:230}}
          onPress= {() => navigation.navigate('calculosOpcoes')}  
          raised={true}></Button>
        <Button 
          title="AGENDAMENTO"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)'}} 
          containerStyle={{ marginTop:10}}
          onPress= {() => navigation.navigate('login')} 
          raised={true}></Button>
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
