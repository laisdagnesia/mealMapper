import React from 'react';
import bg from './../../../assets/images/bg.jpeg';
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
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Plano Alimentar Individual</Text>
        <FlatList
          data={dietaList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>
              Nome do Paciente: {item.nome}
              {"\n"}
              {"\n"}
              Tipo: {item.tipo}
              {"\n"}
              {"\n"}
              Alimento: {item.alimento}
              {"\n"}
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
    alignItems: 'center'
  },
  listItem: {
    fontSize: 20,
    marginBottom: 10,
    marginTop:30
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 240,
  },
  background: {
    width: '100%',
    height: '100%',
  }
});

export default ListaPlanoAlimentar;
