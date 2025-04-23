import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritosProvider } from './FavoritosContext';

import TelaInicial from './screens/TelaInicial';
import TelaMenu from './screens/TelaMenu';
import TelaDoces from './screens/TelaDoces';
import TelaSalgados from './screens/TelaSalgados';
import TelaReceitaCenoura from './screens/TelaReceitaCenoura';
import TelaFavoritos from './screens/TelaFavoritos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritosProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicial" component={TelaInicial} />
          <Stack.Screen name="Menu" component={TelaMenu} />
          <Stack.Screen name="Doces" component={TelaDoces} />
          <Stack.Screen name="Salgados" component={TelaSalgados} />
          <Stack.Screen name="ReceitaCenoura" component={TelaReceitaCenoura} />
          <Stack.Screen name="Favoritos" component={TelaFavoritos} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritosProvider>
  );
}
