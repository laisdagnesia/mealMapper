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

export function CadastroPaciente() {
  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [nomesList, setNomesList] = useState([]);
  const [sexo, setSexo] = useState('');
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login', 'cadastro'>;
  const navigation = useNavigation<navProps>();

  const handleCadastroPaciente = () => {
    if (!nome) {
      Alert.alert('Preencha todos os campos.');
    } else {
      // Add the entered name to the list
      setNomesList([...nomesList, nome]);

      // Clear input fields
      setNome('');
      setPeso('');
      setDataNasc('');
      setAltura('');

      // Navigate to the "listaPacientes" screen, passing the updated nomesList
      navigation.navigate('listaPacientes', { nomesList: [...nomesList, nome] });
    }
  };

  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}> Cadastro Paciente</Text>
        <Input
          placeholder="Nome Completo"
          onChangeText={setNome}
          value={nome}
          style={styles.input}
        />
        <Input
          placeholder="Data Nascimento"
          onChangeText={setDataNasc}
          value={dataNasc}
          style={{ width: 200, marginBottom: 5 }}
        />
        <Input
          placeholder="Peso"
          onChangeText={setPeso}
          value={peso}
          style={{ width: 200, marginBottom: 5 }}
        />
        <Input
          placeholder="Altura"
          onChangeText={setAltura}
          value={altura}
          style={{ width: 200, marginBottom: 5 }}
        />
        <RNPickerSelect
          placeholder={{ label: 'Selecione o sexo', value: null }}
          onValueChange={(value) => setSexo(value)}
          items={[
            { label: 'Feminino', value: 'feminino' },
            { label: 'Masculino', value: 'masculino' },
          ]}
          value={sexo}
          style={pickerSelectStyles}
        />
        <Button
          title=" Cadastrar"
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          raised={true}
          onPress={handleCadastroPaciente}
        ></Button>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          containerStyle={{ marginTop: 15 }}
          raised={true}
        ></Button>
        {/* <FlatList
          data={nomesList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text>{item}</Text>
          )}
        /> */}
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
    marginTop:20
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
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 90,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom:20,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
  },
});