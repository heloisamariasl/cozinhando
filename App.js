import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritosProvider } from './FavoritosContext';

import TelaInicial from './screens/TelaInicial';
import TelaMenu from './screens/TelaMenu';
import TelaDoces from './screens/TelaDoces';
import TelaSalgados from './screens/TelaSalgados';
import TelaFavoritos from './screens/TelaFavoritos';
import TelaReceitaCenoura from './screens/TelaReceitaCenoura';
import TelaReceitaChocolate from './screens/TelaReceitaChocolate';
import TelaReceitaParmegiana from './screens/TelaReceitaParmegiana';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritosProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicial"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Inicial" component={TelaInicial} />
          <Stack.Screen name="Menu" component={TelaMenu} />
          <Stack.Screen name="Doces" component={TelaDoces} />
          <Stack.Screen name="Salgados" component={TelaSalgados} />
          <Stack.Screen name="Favoritos" component={TelaFavoritos} />
          <Stack.Screen name="ReceitaCenoura" component={TelaReceitaCenoura} />
          <Stack.Screen
            name="ReceitaChocolate"
            component={TelaReceitaChocolate}
          />
          <Stack.Screen
            name="ReceitaParmegiana"
            component={TelaReceitaParmegiana}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritosProvider>
  );
}
