import React, { useEffect, useState } from 'react';
import bg from './../../../assets/images/bg.jpeg';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import { getDocs, collection, getFirestore } from '@firebase/firestore';

const ListaDeProdutos = ({ route }) => {
  const { produtosList } = route.params || { produtosList: [] };
  type navProps = StackNavigationProp<
    NavegacaoPrincipalParams,
    'loginNutri',
    'menuNutri'
  >;
  const navigation = useNavigation<navProps>();
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  const handleCompra = (produto) => {
    Alert.alert(` ${produto.nomeProduto} adicionado ao carrinho!`);
    setCarrinho([...carrinho, produto]);
  };

  const handleVisualizarCarrinho = () => {
    navigation.navigate('carrinhoCompra', { carrinho });
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'produtos'));
      const produtosData = querySnapshot.docs.map((doc) => doc.data());
      setProdutos(produtosData);
    };

    fetchData();
  }, []);

  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Nossos Produtos</Text>
        <FlatList
          data={produtos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => handleCompra(item)}
            >
              <Text style={styles.boldText}>
                {item.nomeProduto} - R${item.valor}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Button
          title="Visualizar Carrinho"
          onPress={handleVisualizarCarrinho}
          buttonStyle={styles.button}
          containerStyle={{ borderRadius: 30}}
          raised={true}
        />
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          buttonStyle={styles.botaoVoltar}
          containerStyle={{ borderRadius: 30, marginTop: 15, marginBottom:15 }}
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
    marginTop: 10,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 220,
    color: 'rgb(79, 121, 66)',
    textAlign: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
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
  boldText: {
    fontWeight: 'bold',
  },
});

export default ListaDeProdutos;
