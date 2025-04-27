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
import TelaReceitaLasanha from './screens/TelaReceitaLasanha';
import TelaReceitaFrango from './screens/TelaReceitaFrango';
import TelaReceitaEstrogonofe from './screens/TelaReceitaEstrogonofe';
import TelaReceitaBatata from './screens/TelaReceitaBatata';
import TelaReceitaCarbonara from './screens/TelaReceitaCarbonara';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritosProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicial"
          screenOptions={{
            headerShown: true, 
            headerStyle: {
              backgroundColor: '#46210B', 
            },
            headerTintColor: '#FFF', 
            headerBackTitle: null, 
            headerBackImageTintColor: '#FFF', 
          }}
        >
          <Stack.Screen name="Inicial" component={TelaInicial} />
          <Stack.Screen name="Menu" component={TelaMenu} />
          <Stack.Screen name="Doces" component={TelaDoces} />
          <Stack.Screen name="Salgados" component={TelaSalgados} />
          <Stack.Screen name="Favoritos" component={TelaFavoritos} />
          <Stack.Screen name="ReceitaCenoura" component={TelaReceitaCenoura} />
          <Stack.Screen name="ReceitaChocolate" component={TelaReceitaChocolate} />
          <Stack.Screen name="ReceitaParmegiana" component={TelaReceitaParmegiana} />
          <Stack.Screen name="ReceitaLasanha" component={TelaReceitaLasanha} />
          <Stack.Screen name="ReceitaFrango" component={TelaReceitaFrango} />
          <Stack.Screen name="ReceitaEstrogonofe" component={TelaReceitaEstrogonofe} />
          <Stack.Screen name="ReceitaBatata" component={TelaReceitaBatata} />
          <Stack.Screen name="ReceitaCarbonara" component={TelaReceitaCarbonara} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritosProvider>
  );
}
