import React from 'react';
import bg from './../../../assets/images/bg.jpeg';
import { View, Text, ImageBackground,StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';

const ListaDePacientes = ({ route }) => {
  const { nomesList } = route.params || { nomesList: [] };
    type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'loginNutri', 'menuNutri'>;
  const navigation = useNavigation<navProps>();


  return (
    <ImageBackground source={bg} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pacientes:</Text>
      <FlatList
        data={nomesList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item}</Text>
        )}
      />
   <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
         buttonStyle={styles.botaoVoltar}
          containerStyle={{ borderRadius: 30, marginTop: 15 }}
          raised={true}
        />
    </View>
    </ImageBackground>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItem: {
    fontSize: 20, 
    marginBottom:10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 220,
    color:'rgb(79, 121, 66)',
    textAlign: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
  },
  botaoVoltar:{
    borderRadius: 80,
    height: 40,
    width: 300,
    backgroundColor: 'rgb(79, 121, 66)' 
  }
});

export default ListaDePacientes;
