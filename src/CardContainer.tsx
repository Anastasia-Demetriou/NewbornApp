import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Switch, Button } from 'react-native-paper'

import styled from 'styled-components/native'
import BabyChecklist from './BabyChecklist'
import ToggleSwitch from './ToggleSwitch'

const CardContainer = () => {
  const StyledScrollView = styled.ScrollView`
    flex: 1;
    width: 100%;
  `

  const StyledView = styled.View`
    flex-direction: column;
    align-items: flex-start;
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  `
  const StyledBorder = styled.View`
    border: 1px;
    shadow-color: #000;
    shadow-offset: 1px 1px;
    shadow-opacity: 0.5;
    shadow-radius: 1px;
    border-color: #ffffff;
    border-style: solid;
    border-radius: 10px;
    width: 100%;
    background: #ffffff;
  `
  const TouchableOpacity = styled.TouchableOpacity`
    width: 100%;
  `

  const StyledCheckList = styled.View`
    padding: 5px;
  `

  //Not working
  const StyledSectionHeader = styled.View`
    font-size: 14px;
    font-weight: 600;
  `

  return (
    <View>
      {BabyChecklist.filter((item) => item.day < 365).map((filteredItem) => {
        return (
          <StyledScrollView>
            <StyledView>
              <TouchableOpacity>
                <StyledBorder>
                  <StyledCheckList>
                    <StyledSectionHeader>
                      <Text>{filteredItem.name}</Text>
                      <ToggleSwitch />
                    </StyledSectionHeader>
                  </StyledCheckList>
                  <StyledCheckList>
                    <Text>{filteredItem.range}</Text>
                  </StyledCheckList>
                  <StyledCheckList>
                    <Text>{filteredItem.description}</Text>
                  </StyledCheckList>
                </StyledBorder>
              </TouchableOpacity>
            </StyledView>
          </StyledScrollView>
        )
      })}
    </View>
  )
}

export default CardContainer
