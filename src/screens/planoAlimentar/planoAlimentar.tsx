import React, { useState } from 'react';
import bg from './../../../assets/images/bg.jpeg';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import { Input } from '@rneui/themed';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import RNPickerSelect from 'react-native-picker-select';

export function PlanoAlimentarIndividual() {
  const [tipo, setTipo] = useState(''); // Initialize tipo with an empty string
  const [nome, setNome] = useState('');
  const [alimento, setAlimento] = useState('');
  const [dietaList, setDietaList] = useState([]);
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login', 'cadastro'>;
  const navigation = useNavigation<navProps>();

  const handleDieta = () => {
    if (!nome || !tipo || !alimento) {
      Alert.alert('Campos incompletos', 'Preencha todos os campos.', 'red');
    } else {
      const dietEntry = {
        nome: nome,
        tipo: tipo,
        alimento: alimento,
      };

      setDietaList([...dietaList, dietEntry]);

      setNome('');
      setTipo(''); // Reset tipo to an empty string
      setAlimento('');

      navigation.navigate('listaPlanoAlimentar', { dietaList: [...dietaList, dietEntry] });
    }
  };

  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}> Plano Alimentar Individual</Text>
        <Input
          placeholder="Nome Paciente"
          onChangeText={setNome}
          value={nome}
          style={styles.input}
        />
        <RNPickerSelect
          placeholder={{ label: 'Selecione a refeição', value: null }}
          onValueChange={(value) => setTipo(value)}
          items={[
            { label: 'Café da Manhã', value: 'Café Da Manhã' },
            { label: 'Lanche da Manhã', value: 'Lanche Café Da Manhã' },
            { label: 'Almoço', value: 'almoco' },
            { label: 'Lanche Da Tarde', value: 'Lanche Da Tarde' },
            { label: 'Jantar', value: 'Jantar' },
            { label: 'Ceia', value: 'Ceia' },
          ]}
          value={tipo}
          style={pickerSelectStyles}
        />
        <Input
          placeholder="Alimento"
          onChangeText={setAlimento}
          value={alimento}
          style={styles.input}
        />
        <Button
          title="Salvar"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          raised={true}
          onPress={handleDieta}
        ></Button>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          containerStyle={{ marginTop: 15 }}
          raised={true}
        ></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  input: {
    width: 200,
    marginBottom: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    marginBottom: 55,
  },
  inputContainer: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    //marginBottom:20,
    marginTop: 20,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
  },
});
