import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaReceitaLasanha() {
  const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
  const id = 'lasanha';
  const favorito = estaFavorito(id);

  function alternarFavorito() {
    if (favorito) removerFavorito(id);
    else
      adicionarFavorito({
        id,
        nome: 'Lasanha',
        imagem: require('../assets/lasanha.jpg'),
      });
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/lasanha2.jpg')} style={styles.imagem} />

      <View style={styles.header}>
        <Text style={styles.titulo}>Lasanha</Text>
        <TouchableOpacity onPress={alternarFavorito}>
          <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#46210B" />
        </TouchableOpacity>
      </View>

      <View style={styles.tempoContainer}>
        <AntDesign name="clockcircleo" size={18} color="#46210B" />
        <Text style={styles.tempoTexto}>60min</Text>
      </View>

      <Text style={styles.subtitulo}>Ingredientes</Text>
      <Text style={styles.texto}>
        • 1 massa de lasanha pronta{'\n'}
        • 1 fio de azeite{'\n'}
        • 500 g de presunto{'\n'}
        • 500 g de queijo mussarela{'\n'}
        • 500 g de carne moída{'\n'}
        • 340 g de molho de tomate{'\n'}
        • Sal e pimenta-do-reino a gosto{'\n'}
        • Orégano a gosto
      </Text>

      <Text style={styles.subtitulo}>Modo de preparo</Text>
      <Text style={styles.texto}>
        1. Refogue a carne: em uma panela com azeite, refogue a carne por 10 minutos até dourar.{'\n\n'}
        2. Adicione o molho: acrescente molho de tomate, sal, orégano e pimenta a gosto.{'\n\n'}
        3. Cozinhe a massa: em outra panela, cozinhe a massa conforme as instruções.{'\n\n'}
        4. Monte a lasanha: em um refratário, coloque uma camada de molho, massa e presunto/mussarela.{'\n\n'}
        5. Repita camadas até terminar os ingredientes.{'\n\n'}
        6. Asse em forno preaquecido a 180 °C por 30 minutos ou até gratinar. Sirva quente.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DDC7',
    padding: 20,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#46210B',
  },
  tempoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  tempoTexto: {
    marginLeft: 5,
    fontSize: 16,
    color: '#46210B',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#46210B',
    marginTop: 15,
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    color: '#46210B',
    lineHeight: 24,
  },
});
