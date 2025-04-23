import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const salgados = [
 { nome: 'Parmegiana', imagem: require('../assets/parmegiana.jpg') },
 { nome: 'Lasanha', imagem: require('../assets/lasanha.jpg') },
 { nome: 'Frango à delícia', imagem: require('../assets/frango.jpg') },
 { nome: 'Estrogonofe', imagem: require('../assets/estrogonofe.jpg') },
 { nome: 'Batata recheada', imagem: require('../assets/batata.jpg') },
 { nome: 'Carbonara', imagem: require('../assets/carbonara.jpg') }
];

export default function TelaSalgados() {
 return (
  <View style={styles.container}>
   <View style={styles.header}>
    <Text style={styles.headerText}>Salgados</Text>
   </View>

   <FlatList
    data={salgados}
    numColumns={2}
    contentContainerStyle={styles.lista}
    keyExtractor={(item) => item.nome}
    renderItem={({ item }) => (
     <View style={styles.item}>
      <Image source={item.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
     </View>
    )}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#F5DDC7'
 },
 header: {
  backgroundColor: '#C1622D',
  padding: 20,
  alignItems: 'center'
 },
 headerText: {
  fontSize: 20,
  color: '#FFF',
  fontWeight: 'bold'
 },
 lista: {
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center'
 },
 item: {
  margin: 10,
  alignItems: 'center',
  width: Dimensions.get('window').width / 2.5
 },
 imagem: {
  width: 100,
  height: 100,
  borderRadius: 10
 },
 nome: {
  marginTop: 8,
  fontSize: 14,
  color: '#C1622D',
  textAlign: 'center',
  fontWeight: '600'
 }
});
