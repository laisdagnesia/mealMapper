import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import bg from './../../../assets/images/bg.jpeg';
import {Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { getAuth } from '@firebase/auth';
import { ScrollView } from 'react-native';

export function MenuNutri(props: any) {
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login','calculosOpcoes'>;
  const navigation = useNavigation<navProps>();

  const logOut = () => {
    const auth = getAuth();
    auth.signOut();
    navigation.navigate('menu');
  };
  return (
    <ImageBackground source={bg} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}> MENU NUTRICIONISTA</Text> 
      <View style={styles.container}>

        <Button 
          title="Avaliação Nutricional"
          buttonStyle={{  backgroundColor: 'rgb(34, 139, 34)',borderRadius: 80}} 
          style={styles.button}
           containerStyle={{ marginTop:20,borderRadius: 80}}
          onPress= {() => navigation.navigate('calculosOpcoes')}  
          icon={<FontAwesomeIcon icon={faWeightScale} size={24} color="white" style={{ marginRight: 10 }} />} 
          raised={true}></Button>
        <Button 
          title="Agendar Consulta"
          buttonStyle={{  backgroundColor: 'rgb(34, 139, 34)',borderRadius: 80}} 
          style={styles.button}
          containerStyle={{ marginTop:20,borderRadius: 80}}
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
          title="Minhas Consultas"
          buttonStyle={{  backgroundColor: 'rgb(34, 139, 34)',borderRadius: 80}} 
          style={styles.button}
          containerStyle={{ marginTop:20,borderRadius: 80}}
          onPress= {() => navigation.navigate('meusAgendamentos')}
          raised={true}></Button>
          <Button 
          title="Cadastrar Paciente"
          buttonStyle={{  backgroundColor: 'rgb(34, 139, 34)',borderRadius: 80}} 
          style={styles.button}
          containerStyle={{ marginTop:20,borderRadius: 80}}
          onPress= {() => navigation.navigate('cadastroPaciente')} 
          raised={true}></Button>
          <Button 
          title="Meus Pacientes"
          buttonStyle={{  backgroundColor: 'rgb(34, 139, 34)',borderRadius: 80}} 
          style={styles.button}
          containerStyle={{ marginTop:20,borderRadius: 80}}
          onPress= {() => navigation.navigate('listaPacientes')} 
          raised={true}></Button>
          <Button 
          title="Planejamento Alimentar Individual"
          buttonStyle={{  backgroundColor: 'rgb(34, 139, 34)',borderRadius: 80}} 
          style={styles.button}
          containerStyle={{ marginTop:20,borderRadius: 80}}
          onPress= {() => navigation.navigate('planoAlimentar')} 
          raised={true}></Button>
          <Button title="Voltar" onPress={() => navigation.goBack()}
           buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)',borderRadius: 80}} 
           style={styles.botaoVoltar}
           containerStyle={{ marginTop:20,borderRadius: 80}}
           />
            <Text style={{ marginTop: 10 }}>Esqueceu a senha?{' '}
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}
        onPress={() => navigation.navigate('mudarSenha')}> Clique aqui</Text>.</Text>
         <Text style={{ color: 'blue', textDecorationLine: 'underline', marginTop:10 }}
        onPress={(logOut)}> Sign Out</Text>
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
      padding: 10,
      alignItems: 'center',
    },
  button: {
    borderRadius: 80,
    height: 40,
    width: 400,
    backgroundColor: 'rgb(34, 139, 34)'
  },
  botaoVoltar:{
    borderRadius: 80,
    height: 40,
    width: 300,
    backgroundColor: 'rgb(79, 121, 66)' 
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop: 230,
   color: 'rgb(79, 121, 66)' ,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 5,
    marginBottom: 55,
  },

});
