import React, { useState } from 'react';
import comida from './../../../assets/images/comida.jpeg';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import RNPickerSelect from 'react-native-picker-select';

export function CalculoTMB(props: any) {
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [tmb, setTMB] = useState<number | null>(null);

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login' | 'cadastro'>;
  const navigation = useNavigation<navProps>();

  function calcularTMB(idade: number, peso: number, altura: number, sexo: 'masculino' | 'feminino'): number {
    const constanteMasculina = 88.362;
    const constanteFeminina = 447.593;
    
    if (sexo === 'masculino') {
      // Fórmula de Harris-Benedict
      return Math.round(constanteMasculina + (13.397 * peso) + (4.799 * altura) - (5.677 * idade));
    } else if (sexo === 'feminino') {
      return Math.round(constanteFeminina + (9.247 * peso) + (3.098 * altura) - (4.330 * idade));
    } else {
      throw new Error('Sexo deve ser "masculino" ou "feminino".');
    }
  }

  const mostrarAlerta = (titulo: string, mensagem: string, cor: string) => {
  };

  const calcularTMBEExibirAlerta = () => {
    if (!idade || !peso || !altura || !sexo) {
      mostrarAlerta('Campos incompletos', 'Preencha todos os campos.', 'red');
      return;
    }

    const idadeNumber = parseFloat(idade);
    const pesoNumber = parseFloat(peso);
    const alturaNumber = parseFloat(altura);

    if (isNaN(idadeNumber) || isNaN(pesoNumber) || isNaN(alturaNumber)) {
      mostrarAlerta('Valores inválidos', 'Idade, peso e altura devem ser números válidos.', 'red');
      return;
    }

    const tmbCalculada = calcularTMB(idadeNumber, pesoNumber, alturaNumber, sexo);
    setTMB(tmbCalculada);
    mostrarAlerta('TMB Calculada', `Sua TMB é de ${tmbCalculada.toFixed(2)} calorias por dia.`, 'green');
  };

  return (
      <View style={styles.container}>
        <Input
          placeholder="Idade"
          onChangeText={setIdade}
          value={idade}
          keyboardType="numeric"
          style={styles.input}
        />
        <Input
          placeholder="Peso (kg)"
          onChangeText={setPeso}
          value={peso}
          keyboardType="numeric"
          style={styles.input}
        />
        <Input
          placeholder="Altura (cm)"
          onChangeText={setAltura}
          value={altura}
          keyboardType="numeric"
          style={styles.input}
        />
        <RNPickerSelect
          placeholder={{ label: 'Selecione o sexo', value: null }}
          onValueChange={(value) => setSexo(value)}
          items={[
            { label: 'Masculino', value: 'masculino' },
            { label: 'Feminino', value: 'feminino' },
          ]}
          value={sexo}
          style={pickerSelectStyles}
        />
     {tmb !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Sua TMB é de {tmb.toFixed(2)} calorias por dia.</Text>
          </View>
        )}
        <Button
          title="Calcular TMB"
          onPress={calcularTMBEExibirAlerta}
          buttonStyle={styles.button}
          containerStyle={{marginTop:10,borderRadius: 80}} 
          raised={true}
        />

   
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={styles.botaoVoltar}
          containerStyle={{marginTop:15,borderRadius: 80}} 
          raised={true}
        />
      </View>
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
    padding: 20,
    marginBottom:200,
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
  },
  resultContainer: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  resultText: {
    color: 'white',
  },
  button:{
    backgroundColor: 'rgb(34, 139, 34)',
    borderRadius: 90,
    height: 40,
    width: 300
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
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'transparent',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'transparent',
  },
});
