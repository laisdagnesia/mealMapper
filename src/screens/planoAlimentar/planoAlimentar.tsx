import React, { useState } from 'react';
import agenda from './../../../assets/images/agenda.jpg';
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
import { ScrollView } from 'react-native';

export function PlanoAlimentarIndividual() {
  const [tipo, setTipo] = useState(''); //Inicia tipo como uma string vazia
  const [nome, setNome] = useState('');
 // const [alimento, setAlimento] = useState('');
  const [cafe, setCafe] = useState('');
  const [lancheManha, setLancheManha] = useState('');
  const [almoco, setAlmoco] = useState('');
  const [lancheTarde, setLancheTarde] = useState('');
  const [jantar, setJantar] = useState('');
  const [ceia, setCeia] = useState('');
  const [dietaList, setDietaList] = useState([]);
  
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login', 'cadastro'>;
  const navigation = useNavigation<navProps>();

  // const handleDieta = () => {
  //   if (!nome || !tipo || !alimento) {
  //     Alert.alert('Campos incompletos', 'Preencha todos os campos.', 'red');
  //   } else {
  //     const dietEntry = {
  //       nome: nome,
  //       tipo: tipo,
  //       alimento: alimento,
  //     };

  //     setDietaList([...dietaList, dietEntry]);

  //     setNome('');
  //     setTipo(''); // Torna o tipo uma string vazia
  //     setAlimento('');

  //     navigation.navigate('listaPlanoAlimentar', { dietaList: [...dietaList, dietEntry] });
  //   }
  // };
  const handleDieta = () => {
 
      const dietEntry = {
        nome: nome,
        tipo: tipo,
        cafe: cafe,
        lancheManha:lancheManha,
        almoco:almoco,
        lancheTarde:lancheTarde,
        jantar:jantar,
        ceia:ceia
      };

      setDietaList([...dietaList, dietEntry]);

      setNome('');
      setTipo(''); 
      setCafe('');
      setLancheManha('');
      setAlmoco('');
      setLancheTarde('');
      setJantar('');
      setCeia('');

      navigation.navigate('listaPlanoAlimentar', { dietaList: [...dietaList, dietEntry] });
    
  };

  return (
    <ImageBackground source={agenda} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}> Plano Alimentar Individual</Text>
          <Input
            placeholder="Nome Paciente"
            onChangeText={setNome}
            value={nome}
            style={styles.input}
          />
           <Text style={styles.text}>Café da Manhã </Text>
        <Input
          placeholder="Refeição"
          onChangeText={setCafe}
          value={cafe}
          style={styles.input}
        />
        <Text style={styles.text}>Lanche da Manhã </Text>
        <Input
          placeholder="Refeição"
          onChangeText={setLancheManha}
          value={lancheManha}
          style={styles.input}
        />
      <Text style={styles.text}>Almoço</Text>
        <Input
          placeholder="Refeição"
          onChangeText={setAlmoco}
          value={almoco}
          style={styles.input}
        />
        <Text style={styles.text}>Lanche Da Tarde</Text>
        <Input
          placeholder="Refeição"
          onChangeText={setLancheTarde}
          value={lancheTarde}
          style={styles.input}
        />
         <Text style={styles.text}>Jantar</Text>

        <Input
          placeholder="Refeição"
          onChangeText={setJantar}
          value={jantar}
          style={styles.input}
        />
         <Text style={styles.text}>Ceia</Text>
        <Input
          placeholder="Refeição"
          onChangeText={setCeia}
          value={ceia}
          style={styles.input}
        />
          <Button
            title="Salvar"
            buttonStyle={styles.button}
            containerStyle={{marginTop:15,borderRadius: 80}} 
            raised={true}
            onPress={handleDieta}
          />
          <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={styles.botaoVoltar}
          containerStyle={{ borderRadius: 30, marginTop: 15 }}
          raised={true}
          />
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
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:10,
    color: 'rgb(79, 121, 66)' ,
    marginTop:210
  },
  text:{
  //marginRight:210,
  fontSize:15,
  fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 5,
    marginBottom: 55,
  },
  button: {
    backgroundColor: 'rgb(34, 139, 34)',
    borderRadius: 80,
    height: 40,
    width: 300,
  },
  botaoVoltar:{
    borderRadius: 80,
    height: 40,
    width: 300,
    backgroundColor: 'rgb(79, 121, 66)' 
  }

});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
  },
});
