import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaReceitaEstrogonofe() {
  const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
  const id = 'estrogonofe';
  const favorito = estaFavorito(id);

  function alternarFavorito() {
    if (favorito) removerFavorito(id);
    else adicionarFavorito({
      id,
      nome: 'Estrogonofe',
      imagem: require('../assets/estrogonofe.jpg'),
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/estrogonofe2.jpg')} style={styles.imagem} />

      <View style={styles.header}>
        <Text style={styles.titulo}>Estrogonofe</Text>
        <TouchableOpacity onPress={alternarFavorito}>
          <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#4D2C2D" />
        </TouchableOpacity>
      </View>

      <View style={styles.tempoContainer}>
        <AntDesign name="clockcircleo" size={18} color="#4D2C2D" />
        <Text style={styles.tempoTexto}>35min</Text>
      </View>

      <Text style={styles.subtitulo}>Ingredientes</Text>
      <Text style={styles.texto}>
        • 3 peitos de frango cortados em cubos{'\n'}
        • 1 dente de alho picado{'\n'}
        • Sal e pimenta-do-reino a gosto{'\n'}
        • 2 colheres (sopa) de maionese (ou creme de leite){'\n'}
        • 1 colher (sopa) de manteiga{'\n'}
        • 1/2 copo de ketchup{'\n'}
        • 1/3 copo de mostarda{'\n'}
        • 1 copo de cogumelos fatiados{'\n'}
        • 1 copo de creme de leite{'\n'}
        • Batata palha a gosto (para servir)
      </Text>

      <Text style={styles.subtitulo}>Modo de preparo</Text>
      <Text style={styles.texto}>
        1. Misture o frango, o alho, a maionese, o sal e a pimenta em uma panela.{'\n\n'}
        2. Derreta a manteiga em outra panela, adicione o ketchup e a mostarda, mexendo bem.{'\n\n'}
        3. Incorpore o creme de leite e deixe ferver levemente.{'\n\n'}
        4. Adicione os cubos de frango e os cogumelos; cozinhe por 5 minutos.{'\n\n'}
        5. Sirva quente com batata palha por cima.
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
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D2C2D',
    marginTop: 20,
    marginBottom: 8,
    paddingHorizontal: 15
  },
  texto: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    paddingHorizontal: 15,
    marginBottom: 20
  }
});
