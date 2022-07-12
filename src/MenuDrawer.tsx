import React from 'react'
import { Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import AboutScreen from './Screens/AboutScreen'

const MenuDrawer = ({ navigation }) => {
  //const navigation = useNavigation()

  return (
    <View>
      <Button
        title='About Page'
        onPress={() => navigation.navigate('AboutScreen')}
      />
    </View>
  )
}

export default MenuDrawer
