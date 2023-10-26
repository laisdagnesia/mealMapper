import React, { useState } from 'react';
import bg from './../../../assets/images/bg.jpeg';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
  Image as ImageNative
} from 'react-native';
import { Input } from '@rneui/themed';
import { Button, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'expo-image-picker';
import avatar from '../../../assets/images/avatar.jpeg';

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
      setNomesList([...nomesList, nome]);

      setNome('');
      setPeso('');
      setDataNasc('');
      setAltura('');

      navigation.navigate('listaPacientes', { nomesList: [...nomesList, nome] });
    }
  };
  const [image, setImage] = useState(ImageNative.resolveAssetSource(avatar).uri);
  const openCamera = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}> Cadastro Paciente</Text>
                <TouchableOpacity onPress={openCamera}>
                    <Image source={{uri : image}}style={styles.image}></Image>
                </TouchableOpacity>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom:20,
    textAlign:'center',
    color: 'rgb(79, 121, 66)' 
  },
  image : {
    width: 100,
    height: 100,
    borderRadius: 150,
    marginLeft:150,
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
