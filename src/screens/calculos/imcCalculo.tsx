import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation';

export function CalculoIMC(props: any) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState<number | null>(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('');
  const [alertTitle, setAlertTitle] = useState('');

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login' | 'cadastro'>;
  const navigation = useNavigation<navProps>();

  const calcularIMC = () => {
    if (peso === '' || altura === '') {
      mostrarAlerta('Campos vazios', 'Preencha todos os campos.', 'red');
      return;
    }

    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura) / 100; // Convertendo altura para metros

    if (isNaN(pesoFloat) || isNaN(alturaFloat) || alturaFloat <= 0 || pesoFloat <= 0) {
      mostrarAlerta('Valores inválidos', 'Peso e altura devem ser valores numéricos positivos.', 'red');
      return;
    }

    const imcCalculado = pesoFloat / (alturaFloat * alturaFloat);
    setIMC(imcCalculado);
    if (imcCalculado < 18.5) {
      mostrarAlerta('Baixo Peso', `Seu IMC é: ${imcCalculado.toFixed(1)}`, obterCorIMC(imcCalculado));
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      mostrarAlerta('Peso Normal', `Seu IMC é: ${imcCalculado.toFixed(1)}`, obterCorIMC(imcCalculado));
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      mostrarAlerta('Sobrepeso', `Seu IMC é: ${imcCalculado.toFixed(1)}`, obterCorIMC(imcCalculado));
    } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
      mostrarAlerta('Obesidade Grau I', `Seu IMC é: ${imcCalculado.toFixed(1)}`, obterCorIMC(imcCalculado));
    } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
      mostrarAlerta('Obesidade Grau II', `Seu IMC é: ${imcCalculado.toFixed(1)}`, obterCorIMC(imcCalculado));
    } else {
      mostrarAlerta('Obesidade Grau III', `Seu IMC é: ${imcCalculado.toFixed(1)}`, obterCorIMC(imcCalculado));
    }
  };

  const obterCorIMC = (imc: number) => {
    if (imc < 18.5) {
      return 'red'; // Abaixo do peso
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'green'; // Peso normal
    } else if (imc >= 25 && imc <= 29.9) {
      return 'orange'; // Sobrepeso
    } else if (imc >= 30 && imc <= 34.9) {
      return 'brown'; // Obesidade 1
    } else {
      return 'black';
    }
  };

  const mostrarAlerta = (titulo: string, mensagem: string, cor: string) => {
    setAlertTitle(titulo);
    setAlertMessage(mensagem);
    setAlertColor(cor);
    setAlertVisible(true);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Informe seu peso"
        onChangeText={setPeso}
        value={peso}
        keyboardType="numeric"
        style={{ width: 200, marginBottom: 10 }}
      />
      <Input
        placeholder="Informe sua altura (cm)"
        onChangeText={setAltura}
        value={altura}
        keyboardType="numeric"
        style={{ width: 200, marginBottom: 10 }}
      />
      <Button
        title="Calcular"
        onPress={calcularIMC}
        buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
        raised={true}
      />
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
        containerStyle={{ marginTop: 15 }}
        raised={true}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={alertVisible}
        onRequestClose={() => setAlertVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: alertColor }]}>
            <Text style={{ color: 'white', fontSize: 25 }}>{alertTitle}</Text>
            <Text style={{ color: 'white', fontSize: 18 }}>{alertMessage}</Text>
            <Button
              title="Fechar"
              onPress={() => setAlertVisible(false)}
              buttonStyle={{ backgroundColor: 'white', marginTop: 10 }}
              titleStyle={{ color: alertColor }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    alignItems: 'stretch',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
});
