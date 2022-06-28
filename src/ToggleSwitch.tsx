import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Switch, Button } from 'react-native-paper'

import styled from 'styled-components/native'
import BabyChecklist from './BabyChecklist'

const ToggleSwitch = ({ value, onToggle }) => {
  return (
    <View style={styles.container}>
      <Switch
        value={value}
        onValueChange={() => {
          onToggle()
        }}
      />
    </View>
  )
}

export default ToggleSwitch

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
})
