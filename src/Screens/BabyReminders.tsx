import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert, Button } from 'react-native'
import CardContainer from '../CardContainer'
import Home from './Home'

const BabyReminders = ({ navigation, route }) => {
  const { age } = route.params

  return (
    <View style={{ flex: 1 }}>
      <CardContainer age={age} onPress={() => {}} />
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default BabyReminders
