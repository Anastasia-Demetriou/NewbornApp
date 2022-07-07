import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Button, View, Text } from 'react-native'

import AboutCard from '../AboutCard'
import CardContainer from '../CardContainer'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AboutScreen = ({ navigation }) => {
  const StyledScrollView = styled.View`
    flex: 1;
    width: 100%;
  `

  return (
    <StyledScrollView>
      <Text> About Screen </Text>
      <AboutCard />

      <Button title='Go back' onPress={() => navigation.navigate('Home')} />
    </StyledScrollView>
  )
}

export default AboutScreen
