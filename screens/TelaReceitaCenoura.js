import React from 'react'
import {
 View,
 Text,
 Image,
 ScrollView,
 StyleSheet,
 TouchableOpacity,
 Dimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function TelaReceitaCenoura() {
 const navigation = useNavigation()
 return (
  <ScrollView style={styles.container}>
   {/* Cabeçalho com voltar e favoritar */}
   <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
     <Ionicons name="arrow-back" size={24} color="#8B5E3C" />
    </TouchableOpacity>
    <Text style={styles.title}>Bolo de cenoura</Text>
    <TouchableOpacity>
     <Ionicons name="star-outline" size={24} color="#8B5E3C" />
    </TouchableOpacity>
   </View>

   {/* Imagem */}
   <Image
    source={require('../assets/cenoura.jpg')}
    style={styles.image}
    resizeMode="cover"
   />

   {/* Tempo de preparo */}
   <View style={styles.infoRow}>
    <Ionicons name="time-outline" size={18} color="#8B5E3C" />
    <Text style={styles.infoText}>40 min</Text>
   </View>

   {/* Ingredientes */}
   <Text style={styles.sectionTitle}>Ingredientes</Text>
   <Text style={styles.subTitle}>Massa</Text>
   <Text style={styles.paragraph}>• 1/2 xícara (chá) de óleo</Text>
   <Text style={styles.paragraph}>• 3 cenouras médias raladas</Text>
   <Text style={styles.paragraph}>• 4 ovos</Text>
   <Text style={styles.paragraph}>• 2 xícaras (chá) de açúcar</Text>
   <Text style={styles.paragraph}>• 2 e 1/2 xícaras (chá) de farinha de trigo</Text>
   <Text style={styles.paragraph}>• 1 colher (sopa) de fermento em pó</Text>

   <Text style={styles.subTitle}>Cobertura</Text>
   <Text style={styles.paragraph}>• 1 colher (sopa) de manteiga</Text>
   <Text style={styles.paragraph}>• 3 colheres (sopa) de chocolate em pó</Text>
   <Text style={styles.paragraph}>• 1 xícara (chá) de açúcar</Text>
   <Text style={styles.paragraph}>• 1 xícara (chá) de leite</Text>

   {/* Modo de preparo */}
   <Text style={styles.sectionTitle}>Modo de preparo</Text>
   <Text style={styles.paragraph}>1. Em um liquidificador, adicione a cenoura, os ovos e o óleo. Bata até misturar bem.</Text>
   <Text style={styles.paragraph}>2. Acrescente o açúcar e bata novamente por 5 minutos.</Text>
   <Text style={styles.paragraph}>3. Em uma tigela, peneire a farinha e o fermento. Misture delicadamente.</Text>
   <Text style={styles.paragraph}>4. Despeje a massa em uma forma untada e polvilhada.</Text>
   <Text style={styles.paragraph}>5. Leve ao forno preaquecido a 180°C por aproximadamente 40 minutos.</Text>
  </ScrollView>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#F5DDC7'
 },
 header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 15
 },
 title: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#8B5E3C'
 },
 image: {
  width: Dimensions.get('window').width,
  height: 200
 },
 infoRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 15,
  marginTop: 10
 },
 infoText: {
  marginLeft: 5,
  fontSize: 14,
  color: '#8B5E3C'
 },
 sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#8B5E3C',
  paddingHorizontal: 15,
  marginTop: 20,
  marginBottom: 5
 },
 subTitle: {
  fontSize: 16,
  fontWeight: '600',
  color: '#8B5E3C',
  paddingHorizontal: 15,
  marginTop: 10
 },
 paragraph: {
  fontSize: 14,
  color: '#4D7169',
  paddingHorizontal: 15,
  marginTop: 5,
  lineHeight: 20
 }
})
