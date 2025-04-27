import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default function TelaSalgados({ navigation }) {
  const salgados = [
    { nome: 'Parmegiana', imagem: require('../assets/parmegiana.jpg'), rota: 'ReceitaParmegiana' },
    { nome: 'Lasanha', imagem: require('../assets/lasanha.jpg'), rota: 'ReceitaLasanha' },
    { nome: 'Frango à delícia', imagem: require('../assets/frango.jpg'), rota: 'ReceitaFrango' },
    { nome: 'Estrogonofe', imagem: require('../assets/estrogonofe.jpg'), rota: 'ReceitaEstrogonofe' },
    { nome: 'Batata recheada', imagem: require('../assets/batata.jpg'), rota: 'ReceitaBatata' },
    { nome: 'Carbonara', imagem: require('../assets/carbonara.jpg'), rota: 'ReceitaCarbonara' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Salgados</Text>
      </View>

      <FlatList
        data={salgados}
        numColumns={2}
        contentContainerStyle={styles.lista}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.rota)}
            activeOpacity={0.7}
          >
            <Image source={item.imagem} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
          </TouchableOpacity>
        )}
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
    backgroundColor: '#C1622D',
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
    color: '#C1622D',
    textAlign: 'center',
    fontWeight: '600'
  }
});
