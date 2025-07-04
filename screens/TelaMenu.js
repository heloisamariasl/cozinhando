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

   <TouchableOpacity style={[styles.botao, { backgroundColor: '#C1622D' }]} onPress={() => navigation.navigate('Salgados')}>
    <Text style={styles.botaoTexto}>Salgados</Text>
   </TouchableOpacity>

   <TouchableOpacity style={[styles.botao, { backgroundColor: '#D6A528' }]} onPress={() => navigation.navigate('Favoritos')}>
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
 buttonsContainer: {
    flex: 1,                 
    justifyContent: 'center',
    alignItems: 'center'     
  },
 botao: {
  width: 200,
  padding: 18,
  borderRadius: 20,
  marginVertical: 20,
  alignItems: 'center'
 },
 botaoTexto: {
  color: '#FFF',
  fontWeight: 'bold',
  fontSize: 16
 }
});
