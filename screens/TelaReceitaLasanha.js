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

export default function TelaReceitaLasanhaFrango() {
  const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
  const id = 'lasanhaFrango';
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
        <Text style={styles.tempoTexto}>70min</Text>
      </View>

      <Text style={styles.subtitulo}>Ingredientes</Text>
      <Text style={styles.texto}>
        • 1 pacote de massa de lasanha{'\n'}
        • 500 g de peito de frango cozido e desfiado{'\n'}
        • 2 colheres (sopa) de azeite{'\n'}
        • 1 cebola picada{'\n'}
        • 2 dentes de alho picados{'\n'}
        • 340 g de molho de tomate{'\n'}
        • 500 g de queijo mussarela{'\n'}
        • 1 caixa de creme de leite{'\n'}
        • Sal, pimenta-do-reino e orégano a gosto
      </Text>

      <Text style={styles.subtitulo}>Modo de preparo</Text>
      <Text style={styles.texto}>
        1. Refogue o frango: em uma panela com azeite, refogue cebola e alho até dourarem. Adicione o frango desfiado, sal, pimenta e orégano.{'\n\n'}
        2. Acrescente o molho de tomate e cozinhe por mais 5 minutos.{'\n\n'}
        3. Cozinhe a massa conforme as instruções da embalagem.{'\n\n'}
        4. Monte a lasanha: em um refratário, alterne camadas de molho, massa, frango e queijo.{'\n\n'}
        5. Finalize com o creme de leite por cima e mais queijo para gratinar.{'\n\n'}
        6. Leve ao forno preaquecido a 180 °C por 30 minutos ou até dourar.
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
