import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaReceitaParmegiana() {
 const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
 const id = 'parmegiana';
 const favorito = estaFavorito(id);

 function alternarFavorito() {
  if (favorito) removerFavorito(id);
  else
   adicionarFavorito({
    id,
    nome: 'Parmegiana',
    imagem: require('../assets/parmegiana.jpg'),
   });
 }

 return (
  <ScrollView style={styles.container}>
   <Image source={require('../assets/parmegiana2.jpg')} style={styles.imagem} />

   <View style={styles.header}>
    <Text style={styles.titulo}>Parmegiana</Text>
    <TouchableOpacity onPress={alternarFavorito}>
     <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#C1622D" />
    </TouchableOpacity>
   </View>

   <View style={styles.tempoContainer}>
    <AntDesign name="clockcircleo" size={18} color="#4D7169" />
    <Text style={styles.tempoTexto}>45min</Text>
   </View>

   <Text style={styles.subtitulo}>Ingredientes</Text>
   <Text style={styles.texto}>
    - 1kg de filé de frango{'\n'}
    - 1/2 colher de sopa de sal{'\n'}
    - 1 pitada de pimenta-do-reino{'\n'}
    - 1 pitada de páprica picante{'\n'}
    - 1 pitada de açafrão{'\n'}
    - 1 limão espremido{'\n'}
    - 2 ovos batidos{'\n'}
    - Farinha de trigo para empanar{'\n'}
    - Farinha de rosca para empanar{'\n'}
    - 340g de molho de tomate{'\n'}
    - 900g de queijo mussarela ralado
   </Text>

   <Text style={styles.subtitulo}>Modo de preparo</Text>
   <Text style={styles.texto}>
    1. Tempere os filés com sal, pimenta-do-reino, páprica picante, açafrão e limão. Deixe marinar por 30 minutos ou até 12 horas na geladeira.{'\n\n'}
    2. Separe três recipientes: farinha de trigo, ovos batidos e farinha de rosca.{'\n\n'}
    3. Empane os filés: passe na farinha de trigo, ovo e farinha de rosca.{'\n\n'}
    4. Frite os filés em óleo quente até dourar.{'\n\n'}
    5. Monte no refratário: cubra os filés fritos com o molho de tomate e queijo ralado.{'\n\n'}
    6. Asse em forno pré-aquecido a 230°C por 20 minutos ou até gratinar. Sirva quente.
   </Text>
  </ScrollView>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#F5DDC7',
 },
 imagem: {
  width: '100%',
  height: 200,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
 },
 header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  marginTop: 10,
 },
 titulo: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#4D7169',
 },
 tempoContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
  marginLeft: 20,
 },
 tempoTexto: {
  marginLeft: 5,
  fontSize: 16,
  color: '#4D7169',
 },
 subtitulo: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 20,
  marginBottom: 10,
  color: '#C1622D',
  marginLeft: 20,
 },
 texto: {
  fontSize: 16,
  color: '#333',
  marginHorizontal: 20,
  lineHeight: 24,
  marginBottom: 20,
 },
});
