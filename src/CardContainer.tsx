import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Switch, Button } from 'react-native-paper'

import styled from 'styled-components/native'
import BabyChecklist from './BabyChecklist'
import ToggleSwitch from './ToggleSwitch'
import Card from './Card'

const CardContainer = ({ age, onPress }) => {
  return (
    <View>
      {BabyChecklist.filter(
        (item) =>
          item.year < age.years ||
          item.month < age.months ||
          item.day <= age.days
      ).map((filteredItem) => {
        return (
          <Card
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
