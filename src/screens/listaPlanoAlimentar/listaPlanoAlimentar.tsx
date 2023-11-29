import React from 'react';
import agenda from './../../../assets/images/agenda.jpg';
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';

const ListaPlanoAlimentar = ({ route }) => {
  const { dietaList } = route.params || { dietaList: [] };
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'loginNutri', 'menuNutri'>;
  const navigation = useNavigation<navProps>();

  return (
    <ImageBackground source={agenda} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Plano Alimentar Individual</Text>
        <FlatList
          data={dietaList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
    <Text style={styles.listItem}>
     <Text style={styles.boldText}> Nome do Paciente: {item.nome}</Text>
      {"\n"}
      {"\n"}
      <Text style={styles.boldText}>Café: </Text> {item.cafe}
      {"\n"}{"\n"} {"\n"}
      <Text style={styles.boldText}>Lanche da Manhã: </Text>{item.lancheManha}
      {"\n"}{"\n"} {"\n"}
      <Text style={styles.boldText}>Almoço: </Text>{item.almoco}
      {"\n"}{"\n"}{"\n"}
      <Text style={styles.boldText}>Lanche Da Tarde:</Text>{item.lancheTarde}
      {"\n"}{"\n"}{"\n"}
      <Text style={styles.boldText}>Jantar: </Text>{item.jantar}
      {"\n"}{"\n"}{"\n"}
      <Text style={styles.boldText}>Ceia: </Text>{item.ceia}
      {"\n"}{"\n"}
    </Text>
          )}
        />
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          containerStyle={{ marginTop: 15 }}
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
    alignItems: 'center',
    padding:20
  },
  listItem: {
    fontSize: 20,
    marginBottom: 10,
    marginTop:30,
    textAlign: 'justify',
    padding:5,
    paddingVertical: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 220,
    color: 'rgb(79, 121, 66)' 
  },
  boldText: {
    fontWeight: 'bold',
  },
  background: {
    width: '100%',
    height: '100%',
  }
});

export default ListaPlanoAlimentar;
