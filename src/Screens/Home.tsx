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
  Button,
  Pressable,
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import DatePickerApp from '../DatePickerApp'
import { Provider as PaperProvider } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import BabyReminders from './BabyReminders'
import AboutScreen from './AboutScreen'

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

const Home = ({ navigation }) => {
  // const isDarkMode = useColorScheme() === 'dark'
  const [age, setAge] = useState(0)
  const [hide, setHide] = useState(false)

  console.log({ age })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
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

        <DatePickerApp
          mode='date'
          onAgeChange={setAge}
          setHide={setHide}
          hide={hide}
        />
      </ScrollView>
      {/* </LinearGradient> */}
      <View style={{ flex: 1 }}>
        {hide && (
          <Pressable
            style={styles.button}
            //title='Go to Baby Reminders'
            //onPress={() => navigation.navigate('BabyReminders')}
            onPress={() => {
              navigation.navigate('BabyReminders', {
                age: {
                  year: age.years,
                  months: age.months,
                  days: age.days,
                },
              })
            }}
          >
            <Text style={styles.text}>See your Baby Reminders</Text>
          </Pressable>
        )}

        {/* <Button
          title='About Page'
          onPress={() => navigation.navigate('AboutScreen')}
        /> */}
      </View>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3fe0d0',
    margin: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default Home
