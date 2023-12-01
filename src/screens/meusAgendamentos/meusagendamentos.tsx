import React, { useEffect, useState } from 'react';
import bg from './../../../assets/images/bg.jpeg';
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import { getDocs, collection, getFirestore } from '@firebase/firestore';

const MeusAgendamentos = ({ route }) => {
  const { agendamentoList } = route.params || { agendamentoList: [] };
  type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'loginNutri', 'menuNutri'>;
  const navigation = useNavigation<navProps>();
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'agendamento'));
      const agendamentosData = querySnapshot.docs.map((doc) => doc.data());
      setAgendamentos(agendamentosData);
    };

    fetchData();
  }, []);

  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}> Pacientes Agendados:</Text>
        <FlatList
  data={agendamentos}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.text}>
      <Text style={styles.boldText}>Nome do Paciente: </Text>{item.nome}
      {"\n"}
      <Text style={styles.boldText}>Data: </Text> {item.data && item.data.toDate().toLocaleDateString()}
      {"\n"}
      <Text style={styles.boldText}>Horário: </Text> {item.horario && item.horario.toDate().toLocaleTimeString()}
      {"\n"}
      </Text>
    </View>
  )}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    fontSize: 20,
    marginBottom: 10,
  },
  text:{
    fontSize:20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 220,
    marginBottom:20,
    color: 'rgb(79, 121, 66)',
    textAlign: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  botaoVoltar: {
    borderRadius: 80,
    height: 40,
    width: 300,
    backgroundColor: 'rgb(79, 121, 66)',
  },
  boldText: {
    fontWeight: 'bold'
  },
});

export default MeusAgendamentos;
