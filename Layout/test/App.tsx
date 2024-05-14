import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Navigation';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();



const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
    })}>
    <Tab.Screen name="home" component={Home} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
