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

export default function TelaReceitaFrango() {
  const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
  const id = 'frango';
  const favorito = estaFavorito(id);

  function alternarFavorito() {
    if (favorito) removerFavorito(id);
    else
      adicionarFavorito({
        id,
        nome: 'Frango à delícia',
        imagem: require('../assets/frango.jpg'),
      });
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/frango2.jpg')} style={styles.imagem} />

      <View style={styles.header}>
        <Text style={styles.titulo}>Frango à delícia</Text>
        <TouchableOpacity onPress={alternarFavorito}>
          <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#4D2C2D" />
        </TouchableOpacity>
      </View>

      <View style={styles.tempoContainer}>
        <AntDesign name="clockcircleo" size={18} color="#4D2C2D" />
        <Text style={styles.tempoTexto}>45min</Text>
      </View>

      <Text style={styles.subtitulo}>Ingredientes</Text>
      <Text style={styles.texto}>
        - 1kg de peito de frango{"\n"}
        - 1kg de batatas{"\n"}
        - 4 dentes de alho{"\n"}
        - 2 cebolas grandes{"\n"}
        - 200ml de óleo{"\n"}
        - 1 maço de cheiro-verde{"\n"}
        - 1 lata de creme de leite{"\n"}
        - 2 colheres (sopa) de manteiga{"\n"}
        - 2 colheres (sopa) de farinha de trigo{"\n"}
        - Sal, noz-moscada e pimenta-do-reino a gosto{"\n"}
        - 200g de queijo mussarela fatiado
      </Text>

      <Text style={styles.subtitulo}>Modo de preparo</Text>
      <Text style={styles.texto}>
        1. Em uma panela, aqueça 100ml de óleo, esprema o alho e adicione a cebola picada. Refogue até dourar e adicione o frango, dourando bem.{"\n\n"}
        2. Em outra panela, derreta a manteiga e junte a farinha de trigo, mexendo até formar um roux.{"\n\n"}
        3. Acrescente o creme de leite e misture até encorpar levemente.{"\n\n"}
        4. Coloque o frango refogado em um refratário, cubra com o molho branco e as fatias de mussarela.{"\n\n"}
        5. Leve ao forno preaquecido a 180°C por 30 minutos ou até dourar levemente.{"\n\n"}
        6. Sirva quente, acompanhando batatas palha.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5DDC7' },
  imagem: { width: '100%', height: 200, borderRadius: 10 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#4D2C2D' },
  tempoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 5,
  },
  tempoTexto: { marginLeft: 5, fontSize: 16, color: '#4D2C2D' },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D2C2D',
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
});
