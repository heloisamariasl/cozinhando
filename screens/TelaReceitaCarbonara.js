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
      nome: 'Carbonara',
      imagem: require('../assets/batata.jpg'),
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/carbonara2.jpg')} style={styles.imagem} />

      <View style={styles.header}>
        <Text style={styles.titulo}>Carbonara</Text>
        <TouchableOpacity onPress={alternarFavorito}>
          <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#4D2C2D" />
        </TouchableOpacity>
      </View>

      <View style={styles.tempoContainer}>
        <AntDesign name="clockcircleo" size={18} color="#4D2C2D" />
        <Text style={styles.tempoTexto}>15min</Text>
      </View>

      <Text style={styles.sectionTitle}>Ingredientes</Text>
      <Text style={styles.text}>
        • Bacon picado a gosto{'\n'}
        • 3 ovos{'\n'}
        • Pimenta-do-reino a gosto{'\n'}
        • Creme de leite se quiser dar um toque diferente à receita{'\n'}
        • Queijo ralado a gosto{'\n'}
        • Sal a gosto{'\n'}
        • Macarrão de sua escolha (espaguete, fusili,etc.){'\n'}
    
      </Text>

      <Text style={styles.sectionTitle}>Modo de preparo</Text>
      <Text style={styles.text}>
        1. Frite bem o bacon, até ficar crocante (pode-se adicionar salame picado).{'\n\n'}
        2. Coloque o macarrão para cozinhar em água e sal.{'\n\n'}
        3. No refratário onde será servido o macarrão, bata bem os ovos com um garfo.{'\n\n'}
        4. Tempere com sal e pimenta a gosto, e junte o queijo ralado, também a gosto.{'\n\n'}
        5. Quando o macarrão estiver pronto, escorra e coloque (bem quente) sobre a mistura de ovos, misture bem.{'\n\n'}
        6. O calor da massa cozinha os ovos.{'\n\n'}
        7. Coloque o bacon, ainda quente, sobre o macarrão e sirva.{'\n\n'}
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
