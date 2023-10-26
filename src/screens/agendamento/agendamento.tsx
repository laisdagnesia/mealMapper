import React, { useState } from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import bg from './../../../assets/images/bg.jpeg';

export function AgendarConsultaScreen() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState(new Date());
  const [horario, setHorario] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login' | 'loginNutri'>;
  const navigation = useNavigation<navProps>();

  const agendarConsulta = () => {
    if (!nome || !data || !horario) {
      alert('Preencha todos os campos.');
    } else {
      alert(`Consulta agendada para ${data.toLocaleDateString()} às ${horario.toLocaleTimeString()} para o paciente ${nome}.`);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  return (
    <ImageBackground source={bg} style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>
      <Text style={{fontSize:20, marginBottom:10, marginTop:10}}>Data da Consulta</Text>
      <Button
        title="Selecione a Data"
        onPress={showDatepicker}
        buttonStyle={styles.buttonHora}
        icon={<Icon name="event" size={24} color="white" />}
        raised
      />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={data}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (event.type === 'set') {
              setData(selectedDate || data);
            }
          }}
        />
      )}

      <Text style={{fontSize:20, marginBottom:10, marginTop:10}}>Horário da Consulta</Text>
      <Button
        title="Selecione o Horário"
        onPress={showTimepicker}
        buttonStyle={styles.buttonHora}
        icon={<Icon name="access-time" size={24} color="white" />}
        raised
      />
      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={horario}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (event.type === 'set') {
              setHorario(selectedTime || horario);
            }
          }}
        />
      )}
 <Input
        placeholder="Nome do paciente"
        value={nome}
        onChangeText={setNome}
        containerStyle={styles.inputContainer}
      />
      <Button
        title="Agendar"
        onPress={agendarConsulta}
        buttonStyle={styles.button}
        containerStyle={{marginTop:35}} 
        icon={<Icon name="event" size={24} color="white" />}
        raised
      />
      <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={{ backgroundColor: 'rgb(79, 121, 66)' }}
          containerStyle={{ borderRadius: 30, marginTop: 15 }}
          raised={true}
        />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom:10,
    color: 'rgb(79, 121, 66)' ,
    textAlign: 'center'
  },
  inputContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'rgb(34, 139, 34)'
  },
  buttonHora: {
    backgroundColor: 'rgb(11, 218, 81)'
  },
  background: {
    width: '100%',
    height: '100%',
  }
});
