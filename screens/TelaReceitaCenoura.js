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

export default function TelaReceitaCenoura() {
  const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
  const id = 'cenoura';
  const favorito = estaFavorito(id);

  function alternarFavorito() {
    if (favorito) removerFavorito(id);
    else adicionarFavorito({
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
          <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#46210B" />
        </TouchableOpacity>
      </View>

      <View style={styles.tempoContainer}>
        <AntDesign name="clockcircleo" size={18} color="#46210B" />
        <Text style={styles.tempoTexto}>40min</Text>
      </View>

      <Text style={styles.sectionTitle}>Ingredientes</Text>
      <Text style={styles.text}>
        • 3 cenouras médias{'\n'}
        • 4 ovos{'\n'}
        • 1 xícara de óleo{'\n'}
        • 2 xícaras de açúcar{'\n'}
        • 2 e 1/2 xícaras de farinha de trigo{'\n'}
        • 1 colher de sopa de fermento em pó
      </Text>

      <Text style={styles.sectionTitle}>Modo de preparo</Text>
      <Text style={styles.text}>
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
    color: '#46210B'
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
    color: '#46210B'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#46210B',
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 8
  },
  text: {
    fontSize: 16,
    color: '#46210B',
    lineHeight: 24,
    paddingHorizontal: 15,
    marginBottom: 20
  }
});
