import React, { useContext } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { FavoritosContext } from '../FavoritosContext'

export default function TelaReceitaChocolate() {
 const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext)
 const id = 'chocolate'
 const favorito = estaFavorito(id)

 function alternarFavorito() {
  if (favorito) removerFavorito(id)
  else adicionarFavorito({
    id,
    nome: 'Bolo de chocolate',
    imagem: require('../assets/chocolate.jpg')
  })
 }

 return (
  <ScrollView style={styles.container}>
   <Image source={require('../assets/chocolate2.jpg')} style={styles.imagem} />
   <View style={styles.header}>
    <Text style={styles.titulo}>Bolo de chocolate</Text>
    <TouchableOpacity onPress={alternarFavorito}>
     <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#C1622D" />
    </TouchableOpacity>
   </View>

   <Text style={styles.tempo}>⏱️ 50min</Text>

   <Text style={styles.subtitulo}>Ingredientes</Text>

   <Text style={styles.subtituloMenor}>Massa</Text>
   <Text style={styles.texto}>
    • 3 ovos{'\n'}
    • 2 xícaras (chá) de farinha de trigo{'\n'}
    • 1 1/2 xícara (chá) de açúcar{'\n'}
    • 1 xícara (chá) de chocolate em pó ou achocolatado{'\n'}
    • 1/2 xícara (chá) de óleo{'\n'}
    • 1 colher (sopa) de fermento em pó{'\n'}
    • 1 pitada de sal{'\n'}
    • 1 xícara (chá) de água quente
   </Text>

   <Text style={styles.subtituloMenor}>Cobertura</Text>
   <Text style={styles.texto}>
    • 4 colheres (sopa) de leite{'\n'}
    • 1/2 xícara (chá) de chocolate em pó{'\n'}
    • 1 colher (sopa) de manteiga{'\n'}
    • 1 xícara (chá) de açúcar
   </Text>

   <Text style={styles.subtitulo}>Modo de preparo</Text>
   
   <Text style={styles.subtituloMenor}>Massa</Text>
   <Text style={styles.texto}>
    1. Em um liquidificador, bata os ovos, o açúcar, o óleo, o chocolate e a farinha de trigo.{'\n\n'}
    2. Despeje a massa em uma tigela e adicione a água quente e o fermento, misturando bem.{'\n\n'}
    3. Despeje a massa em uma forma untada e asse em forno médio-alto (200°C) pré-aquecido, por 40 minutos.{'\n\n'}
    4. Desenforme ainda quente.
   </Text>

   <Text style={styles.subtituloMenor}>Cobertura</Text>
   <Text style={styles.texto}>
    5. Em uma panela, leve todos os ingredientes da cobertura ao fogo até levantar fervura.{'\n\n'}
    6. Despeje ainda quente em cima do bolo.
   </Text>
  </ScrollView>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#F5DDC7',
  padding: 20
 },
 imagem: {
  width: '100%',
  height: 200,
  borderRadius: 10,
  marginBottom: 20
 },
 header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10
 },
 titulo: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#4D7169'
 },
 tempo: {
  fontSize: 16,
  color: '#C1622D',
  marginBottom: 20
 },
 subtitulo: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 20,
  marginBottom: 8,
  color: '#C1622D'
 },
 subtituloMenor: {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 4,
  color: '#4D7169'
 },
 texto: {
  fontSize: 16,
  color: '#333',
  lineHeight: 24
 }
})
