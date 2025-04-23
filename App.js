import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CozinhandoComChico() {
 return (
  <View style={styles.container}>
   <Image
    source={require('./assets/chico.png')} // coloque sua imagem aqui
    style={styles.image}
    resizeMode="contain"
   />
   <Text style={styles.text}>Cozinhando com o Chico</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5DDC7' // cor bege do fundo
 },
 image: {
  width: 200,
  height: 200,
  marginBottom: 20
 },
 text: {
  fontSize: 20,
  color: '#7CA8A1',
  fontWeight: 'bold'
 }
});

