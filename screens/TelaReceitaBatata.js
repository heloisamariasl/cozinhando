import React, { useContext } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaReceitaBatata() {
  const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
  const id = 'batata';
  const favorito = estaFavorito(id);

  function alternarFavorito() {
    if (favorito) removerFavorito(id);
    else adicionarFavorito({
      id,
      nome: 'Batata recheada',
      imagem: require('../assets/batata.jpg'),
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/batata2.jpg')} style={styles.imagem} />

      <View style={styles.header}>
        <Text style={styles.titulo}>Batata recheada</Text>
        <TouchableOpacity onPress={alternarFavorito}>
          <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#4D2C2D" />
        </TouchableOpacity>
      </View>

      <View style={styles.tempoContainer}>
        <AntDesign name="clockcircleo" size={18} color="#4D2C2D" />
        <Text style={styles.tempoTexto}>30min</Text>
      </View>

      <Text style={styles.sectionTitle}>Ingredientes</Text>
      <Text style={styles.text}>
        • 2 batatas médias cozidas{'\n'}
        • Sal a gosto{'\n'}
        • Pimenta-do-reino a gosto{'\n'}
        • 1 ovo{'\n'}
        • 180 g de queijo mussarela{'\n'}
        • Bacon frito a gosto{'\n'}
        • ½ lata de creme de leite{'\n'}
        • Cebolinha a gosto
      </Text>

      <Text style={styles.sectionTitle}>Modo de preparo</Text>
      <Text style={styles.text}>
        1. Retire a polpa das batatas cozidas, formando uma cavidade.{'\n\n'}
        2. Misture a polpa com ovo, queijo, bacon e creme de leite.{'\n\n'}
        3. Recheie as batatas e acomode-as em um tabuleiro.{'\n\n'}
        4. Finalize com cebolinha picada.{'\n\n'}
        5. Leve ao forno preaquecido a 230 °C por cerca de 20 minutos. Sirva quente.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DDC7'
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D2C2D'
  },
  tempoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 5
  },
  tempoTexto: {
    marginLeft: 5,
    fontSize: 16,
    color: '#4D2C2D'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D2C2D',
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 8
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    paddingHorizontal: 15,
    marginBottom: 20
  }
});
