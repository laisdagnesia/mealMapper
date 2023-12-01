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
import { doc, setDoc, getFirestore } from '@firebase/firestore';
import { ScrollView } from 'react-native';


export function CadastroPaciente() {
  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [nomesList, setNomesList] = useState([]);
  const [cpf, setCPF] = useState('');
  const [sexo, setSexo] = useState('');
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login', 'cadastro'>;
  const navigation = useNavigation<navProps>();

  let db = getFirestore();
  
  const handleCadastroPaciente = async () => {
    await setDoc(doc(db, 'pacientes', nome),{
      nome,
      //cpf,
      dataNasc,
      peso,
      altura,
      sexo
    })
    navigation.navigate('listaPacientes', { nomesList: [...nomesList, nome] });
  }

  const [image, setImage] = useState(ImageNative.resolveAssetSource(avatar).uri);
  const openLibrary = async () => {
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

    const [ status, requestPermission ] = ImagePicker.useCameraPermissions();
    const tirarFoto = async () => {
      if (!status?.granted) {   
        const resposta = await requestPermission(); 
        if (!resposta.granted) 
          return
      }
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    
    };
      

  return (
    <ImageBackground source={bg} style={styles.background}>
       <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}> Cadastro Paciente</Text>
                <TouchableOpacity onPress={openLibrary}>
                    <Image source={{uri : image}}style={styles.image}></Image>
                </TouchableOpacity>
          <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize:20, marginTop:10 }}
        onPress={tirarFoto} >Tirar Foto</Text>
        <Input
          placeholder="Nome Completo"
          onChangeText={setNome}
          value={nome}
          style={{ width: 200, marginBottom: 5 }}
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
          buttonStyle={styles.button}
          containerStyle={{marginTop:15,borderRadius: 80}} 
          raised={true}
          onPress={handleCadastroPaciente}
        ></Button>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={styles.botaoVoltar}
          containerStyle={{ borderRadius: 30, marginTop: 15 }}
          raised={true}
        ></Button>
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
    marginBottom: 5, 
    marginTop:5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
   //marginBottom: 55,
   alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 190,
    marginBottom:10,
    textAlign:'center',
    color: 'rgb(79, 121, 66)' 
  },
  image : {
    width: 100,
    height: 100,
    borderRadius: 150,
  },
  button: {
    backgroundColor: 'rgb(34, 139, 34)',
    borderRadius: 80,
    height: 40,
    width: 300
  },
  botaoVoltar:{
    borderRadius: 80,
    height: 40,
    width: 300,
    backgroundColor: 'rgb(79, 121, 66)' 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 5,
    marginBottom: 55,
  }
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
    backgroundColor: 'transparent',

  },  
});
