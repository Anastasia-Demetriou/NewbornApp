/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import DatePickerApp from './src/DatePickerApp'
import { Provider as PaperProvider } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'

import Config from 'react-native-config'
import { blue100 } from 'react-native-paper/lib/typescript/styles/colors'
import ToggleSwitch from './src/ToggleSwitch'
import Switch from './src/Switch'
import Card from './src/Card'
import CardContainer from './src/CardContainer'

import Home from './src/Screens/Home'
import BabyReminders from './src/Screens/BabyReminders'
import AboutScreen from './src/Screens/AboutScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

console.log(Config)

const Section: React.FC<{
  title: string
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      {
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}
        >
          {children}
        </Text>
      }
    </View>
  )
}

const Stack = createNativeStackNavigator()

const AboutStack = () => {
  // const isDarkMode = useColorScheme() === 'dark'
  const [age, setAge] = useState(0)

  console.log({ age })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='BabyReminders'
          component={BabyReminders}
          initialParams={{ age }}
        />
        <Stack.Screen name='AboutScreen' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: 'green',
  },
  sectionDescription: {
    borderBottomColor: 'red',
    marginTop: 8,
    fontSize: 28,
    fontWeight: '400',
    color: 'pink',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default AboutStack
