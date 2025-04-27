import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function TelaDoces({ navigation }) {
 return (
  <ScrollView style={styles.container}>
   <Text style={styles.titulo}>Doces</Text>

   <View style={styles.lista}>

    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ReceitaCenoura')}>
     <Image source={require('../assets/cenoura.jpg')} style={styles.imagem} />
     <Text style={styles.nome}>Bolo de cenoura</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ReceitaChocolate')}>
     <Image source={require('../assets/chocolate.jpg')} style={styles.imagem} />
     <Text style={styles.nome}>Bolo de chocolate</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
     <Image source={require('../assets/trigo.jpg')} style={styles.imagem} />
     <Text style={styles.nome}>Bolo de trigo</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
     <Image source={require('../assets/palha.jpg')} style={styles.imagem} />
     <Text style={styles.nome}>Palha italiana</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
     <Image source={require('../assets/alema.jpg')} style={styles.imagem} />
     <Text style={styles.nome}>Torta Alemã</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
     <Image source={require('../assets/cheesecake.jpg')} style={styles.imagem} />
     <Text style={styles.nome}>Cheesecake</Text>
    </TouchableOpacity>

   </View>
  </ScrollView>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#F5DDC7',
  padding: 20,
 },
 titulo: {
  fontSize: 26,
  fontWeight: 'bold',
  color: '#4D7169',
  textAlign: 'center',
  backgroundColor: '#A7C4A0',
  padding: 10,
  marginBottom: 20,
  borderRadius: 8,
 },
 lista: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
 },
 item: {
  alignItems: 'center',
  marginBottom: 20,
  width: '40%',
 },
 imagem: {
  width: 140,
  height: 140,
  borderRadius: 10,
 },
 nome: {
  marginTop: 8,
  fontSize: 16,
  color: '#4D7169',
  fontWeight: '600',
  textAlign: 'center',
 },
});
