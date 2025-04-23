import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const doces = [
  { nome: 'Bolo de cenoura', imagem: require('../assets/cenoura.jpg') },
  { nome: 'Bolo de chocolate', imagem: require('../assets/chocolate.jpg') },
  { nome: 'Bolo de trigo', imagem: require('../assets/trigo.jpg') },
  { nome: 'Palha italiana', imagem: require('../assets/palha.jpg') },
  { nome: 'Torta Alemã', imagem: require('../assets/alema.jpg') },
  { nome: 'Cheesecake', imagem: require('../assets/cheesecake.jpg') }
];

export default function TelaDoces() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Doces</Text>
      </View>

      <FlatList
        data={doces}
        keyExtractor={(item) => item.nome}
        numColumns={2}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => {
          const handlePress = () => {
            if (item.nome === 'Bolo de cenoura') {
              navigation.navigate('ReceitaCenoura');
            }
          };
          return (
            <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
              <View style={styles.item}>
                <Image source={item.imagem} style={styles.imagem} />
                <Text style={styles.nome}>{item.nome}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DDC7'
  },
  header: {
    backgroundColor: '#71968F',
    padding: 20,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  lista: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    margin: 10,
    alignItems: 'center',
    width: Dimensions.get('window').width / 2.5
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  nome: {
    marginTop: 8,
    fontSize: 14,
    color: '#4D7169',
    textAlign: 'center',
    fontWeight: '600'
  }
});
