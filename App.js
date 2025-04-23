import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './screens/TelaInicial';
import TelaMenu from './screens/TelaMenu';
import TelaDoces from './screens/TelaDoces';
import TelaSalgados from './screens/TelaSalgados';
import TelaReceitaCenoura from './screens/TelaReceitaCenoura'; // ← Verifique este caminho

const Stack = createNativeStackNavigator();

export default function App() {
 return (
  <NavigationContainer>
   <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Inicial" component={TelaInicial} />
    <Stack.Screen name="Menu" component={TelaMenu} />
    <Stack.Screen name="Doces" component={TelaDoces} />
    <Stack.Screen name="Salgados" component={TelaSalgados} />
    <Stack.Screen name="ReceitaCenoura" component={TelaReceitaCenoura} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}
