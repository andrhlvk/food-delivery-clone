import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from './screens/Home'
import RestaurantDetails from './screens/RestaurantDetails'

export default function RootNavigation() {
  const Stack = createStackNavigator()

  const screenOptions = {
    headerShown: false
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
