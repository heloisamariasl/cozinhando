import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaMenu() {
 const navigation = useNavigation();

 return (
  <View style={styles.container}>
   <View style={styles.header}>
    <Text style={styles.headerText}>Cozinhando com o Chico</Text>
   </View>

   <TouchableOpacity style={[styles.botao, { backgroundColor: '#71968F' }]} onPress={() => navigation.navigate('Doces')}>
    <Text style={styles.botaoTexto}>Doces</Text>
   </TouchableOpacity>

   <TouchableOpacity style={[styles.botao, { backgroundColor: '#C1622D' }]}>
    <Text style={styles.botaoTexto}>Salgados</Text>
   </TouchableOpacity>

   <TouchableOpacity style={[styles.botao, { backgroundColor: '#D6A528' }]}>
    <Text style={styles.botaoTexto}>Favoritos</Text>
   </TouchableOpacity>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#F5DDC7',
  alignItems: 'center'
 },
 header: {
  width: '100%',
  backgroundColor: '#71968F',
  padding: 20,
  alignItems: 'center'
 },
 headerText: {
  fontSize: 20,
  color: '#FFF',
  fontWeight: 'bold'
 },
 botao: {
  width: 200,
  padding: 15,
  borderRadius: 10,
  marginVertical: 10,
  alignItems: 'center'
 },
 botaoTexto: {
  color: '#FFF',
  fontWeight: 'bold',
  fontSize: 16
 }
});

