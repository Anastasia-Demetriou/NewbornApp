import React from 'react'
import COLORS from './constants/COLORS'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function Background() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[COLORS.SECONDARY, COLORS.PRIMARY, COLORS.TERTIARY]}
        style={styles.background}
      />
    </View>
  )
}

export default Background
