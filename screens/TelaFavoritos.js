import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaFavoritos() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favoritos</Text>
      </View>

      {favoritos.length === 0 ? (
        <Text style={styles.mensagem}>Nenhuma receita adicionada aos favoritos.</Text>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.imagem} style={styles.imagem} />
              <Text style={styles.nome}>{item.nome}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DDC7',
  },
  header: {
    backgroundColor: '#C1622D',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  lista: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 10,
    alignItems: 'center',
    width: 140,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  nome: {
    marginTop: 8,
    fontSize: 14,
    color: '#4D7169',
    textAlign: 'center',
    fontWeight: '600',
  },
  mensagem: {
    marginTop: 50,
    textAlign: 'center',
    color: '#4D7169',
    fontSize: 16,
  },
});
