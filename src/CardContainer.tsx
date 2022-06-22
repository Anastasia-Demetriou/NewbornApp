import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Switch, Button } from 'react-native-paper'

import styled from 'styled-components/native'
import BabyChecklist from './BabyChecklist'
import ToggleSwitch from './ToggleSwitch'
import Card from './Card'

const CardContainer = () => {
  return (
    <View>
      {BabyChecklist.filter((item) => item.day < 365).map((filteredItem) => {
        return (
          <Card
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
