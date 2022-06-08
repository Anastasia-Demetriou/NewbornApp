/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
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

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e7e9eb' }}>
      {/* <LinearGradient
        colors={['#077845', '#077845']}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      > */}
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View>
          <Section title='Newborn Planner'>
            hello, enter your baby's dob:
            {'\n'}
          </Section>
        </View>

        <DatePickerApp mode='date' />
      </ScrollView>
      {/* </LinearGradient> */}
    </SafeAreaView>
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

export default App
