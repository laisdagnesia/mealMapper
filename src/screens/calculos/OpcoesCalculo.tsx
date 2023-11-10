import React, { useState } from 'react';
import balanca from './../../../assets/images/balanca.jpeg';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import { CalculoTMB } from './calculoTaxaBasal';
import { CalculoIMC } from './imcCalculo';
import { Button } from 'react-native-elements';

export function OpcoesCalculo(props: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = ['Calcular TMB', 'Calcular IMC'];

  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login' | 'loginNutri'>;
  const navigation = useNavigation<navProps>();

  const renderOption = () => {
    if (selectedIndex === 0) {
      return <CalculoTMB />;
    } else if (selectedIndex === 1) {
      return <CalculoIMC />;
    }
  };

  return (
    <ImageBackground source={balanca} style={styles.background}>
      <View style={styles.container}>
        <ButtonGroup
          onPress={(index) => setSelectedIndex(index)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={styles.buttonGroup}
          textStyle={styles.buttonText}
          selectedButtonStyle={styles.selectedButton}
          selectedTextStyle={styles.selectedButtonText}
        />

        {renderOption()}
        {/*<Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          containerStyle={{ borderRadius: 30, marginTop: 15 }}
          raised={true}
        />*/}
      </View>
    </ImageBackground>
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
    marginTop:50
  },
  buttonGroup: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    marginTop: 150,
  },
  buttonText: {
    color: 'white',
  },
  selectedButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  selectedButtonText: {
    color: 'black',
  },
});
