import React, { useEffect, useState } from 'react';
import bg from './../../../assets/images/bg.jpeg';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoPrincipalParams } from '../../navigation/configuracoes';
import { ScrollView } from 'react-native';

const handleComprar = () => {
    Alert.alert('Compra realizada com sucesso!')
}

const CarrinhoDeCompras = ({ route }) => {
    type navProps = StackNavigationProp<
    NavegacaoPrincipalParams,
    'loginNutri',
    'menuNutri'
  >;
  const navigation = useNavigation<navProps>();
    const { carrinho } = route.params || { carrinho: [] };
  
    return (
        <ImageBackground source={bg} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Carrinho de Compra</Text>
        <FlatList
          data={carrinho}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>
              {item.nomeProduto} - R${item.valor}
            </Text>
          )}
        />
        <Button
            title="Comprar"
            onPress={handleComprar}
            buttonStyle={styles.button}
            containerStyle={{ borderRadius: 30, marginTop: 15 }}
            raised={true}

        />
        <Button
          title="Voltar para Lista de Produtos"
          onPress={() => navigation.navigate('listaProdutos')}
          buttonStyle={styles.botaoVoltar}
          containerStyle={{ borderRadius: 30, marginTop: 15 }}
          raised={true}
        />
      </View>
      </ScrollView>
    </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding:10
    },
    listItem: {
      fontSize: 20,
      marginBottom: 10,
      marginTop: 10,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 220,
      color: 'rgb(79, 121, 66)',
      textAlign: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 5,
        marginBottom: 55,
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
  
  
  export default CarrinhoDeCompras;
  