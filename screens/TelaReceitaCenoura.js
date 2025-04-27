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

export default function TelaReceitaCenoura() {
  const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
  const id = 'cenoura';
  const favorito = estaFavorito(id);

  function alternarFavorito() {
    if (favorito) removerFavorito(id);
    else
      adicionarFavorito({
        id,
        nome: 'Bolo de cenoura',
        imagem: require('../assets/cenoura.jpg'),
      });
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/cenoura2.jpg')} style={styles.imagem} />
      <View style={styles.header}>
        <Text style={styles.titulo}>Bolo de cenoura</Text>
        <TouchableOpacity onPress={alternarFavorito}>
          <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#C1622D" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitulo}>Ingredientes</Text>
      <Text style={styles.texto}>
        - 3 cenouras médias{'\n'}
        - 4 ovos{'\n'}
        - 1 xícara de óleo{'\n'}
        - 2 xícaras de açúcar{'\n'}
        - 2 e 1/2 xícaras de farinha de trigo{'\n'}
        - 1 colher de sopa de fermento em pó
      </Text>

      <Text style={styles.subtitulo}>Modo de preparo</Text>
      <Text style={styles.texto}>
        1. Bata no liquidificador a cenoura, os ovos e o óleo.{'\n\n'}
        2. Adicione o açúcar e bata novamente.{'\n\n'}
        3. Misture a farinha e o fermento em uma tigela, adicione o conteúdo do liquidificador e misture.{'\n\n'}
        4. Coloque em forma untada e leve ao forno pré-aquecido a 180°C por cerca de 40 minutos.
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
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D7169',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    color: '#C1622D',
  },
  texto: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});
