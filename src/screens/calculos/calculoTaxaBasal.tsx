import React, { useState } from 'react';
import comida from './../../../assets/images/comida.jpeg';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation';
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
    // Constantes usadas na fórmula de Harris-Benedict
    const constanteMasculina = 88.362;
    const constanteFeminina = 447.593;
    
    if (sexo === 'masculino') {
      // Fórmula de Harris-Benedict para homens
      return Math.round(constanteMasculina + (13.397 * peso) + (4.799 * altura) - (5.677 * idade));
    } else if (sexo === 'feminino') {
      // Fórmula de Harris-Benedict para mulheres
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

    // Converte os valores de entrada para números
    const idadeNumber = parseFloat(idade);
    const pesoNumber = parseFloat(peso);
    const alturaNumber = parseFloat(altura);

    // Validação adicional dos valores de entrada
    if (isNaN(idadeNumber) || isNaN(pesoNumber) || isNaN(alturaNumber)) {
      mostrarAlerta('Valores inválidos', 'Idade, peso e altura devem ser números válidos.', 'red');
      return;
    }

    // Cálculo da TMB
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

        <Button
          title="Calcular TMB"
          onPress={calcularTMBEExibirAlerta}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          containerStyle={{ marginTop: 15 }}
          raised={true}
        />

        {tmb !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Sua TMB é de {tmb.toFixed(2)} calorias por dia.</Text>
          </View>
        )}
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          containerStyle={{ marginTop: 15 }}
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
  },
});
