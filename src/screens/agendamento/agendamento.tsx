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
        buttonStyle={styles.button}
        style={styles.button}
        containerStyle={{ borderRadius: 80}}
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
        containerStyle={{borderRadius: 80,marginBottom:15}} 
        style={styles.button}
        buttonStyle={styles.button}
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
        containerStyle={{marginTop:15,borderRadius: 80}} 
        icon={<Icon name="event" size={24} color="white" />}
        raised
      />
      <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={styles.botaoVoltar}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:10,
    marginTop:-30,
    color: 'rgb(79, 121, 66)' ,
    textAlign: 'center'
  },
  inputContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'rgb(34, 139, 34)',
    borderRadius: 80,
    height: 40,
    width: 300
  },

  buttonHora: {
    backgroundColor: 'rgb(34, 139, 34)'
  },
  background: {
    width: '100%',
    height: '100%',
  },
  botaoVoltar:{
    borderRadius: 80,
    height: 40,
    width: 300,
    backgroundColor: 'rgb(79, 121, 66)' 
  }

});
