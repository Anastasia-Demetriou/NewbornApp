import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Switch, Button } from 'react-native-paper'

import styled from 'styled-components/native'
import BabyChecklist from './BabyChecklist'
import ToggleSwitch from './ToggleSwitch'
import Card from './Card'

const CardContainer = ({ age, onPress }) => {
  console.log(age)
  return (
    <View style={{ flex: 1 }}>
      {BabyChecklist.filter(
        (item) =>
          item.year < age.years ||
          item.month < age.months ||
          item.day <= age.days
      ).map((filteredItem) => {
        console.log(filteredItem)
        return (
          <Card
            key={filteredItem.name}
            onPress={onPress}
            name={filteredItem.name}
            range={filteredItem.range}
            description={filteredItem.description}
          />
        )
      })}
    </View>
  )
}

export default CardContainer
