import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Switch, Button } from 'react-native-paper'

import styled from 'styled-components/native'

const ToggleSwitch = () => {
  const [switchOn, setSwitchOn] = useState(false)

  const onToggleSwitch = () => setSwitchOn(!switchOn)

  //   return (
  // <View style={styles.container}>
  //   <Switch value={switchOn} onValueChange={onToggleSwitch}
  //    />
  // </View>

  return (
    <View style={styles.container}>
      <Switch
        value={switchOn}
        onValueChange={() => {
          setSwitchOn(!switchOn)
          //Alert.alert('Switch on : ' + !switchOn)

          {
            switchOn ? <Text>switchOn</Text> : <Text>hide</Text>
          }
        }}
      />
    </View>
    //   )
  )
}

export default ToggleSwitch

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
})
