import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Login'
import AppNavigator from './src/Navigation/StackNavigation/AppNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const App = () => {
  return (
  
<GestureHandlerRootView style={{ flex: 1 }}>
  <AppNavigator />
  </GestureHandlerRootView>
    
    
  )
}

export default App

const styles = StyleSheet.create({})