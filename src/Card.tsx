import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Switch, Button } from 'react-native-paper'

import styled from 'styled-components/native'
import BabyChecklist from './BabyChecklist'
import ToggleSwitch from './ToggleSwitch'

const Card = (props) => {
  const [show, setShow] = useState(true)
  const onToggleSwitch = () => setShow(!show)

  const StyledScrollView = styled.View`
    margin-top: 10px;
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
    padding: 7px;
    margin-left: 10px;
  `
  const StyledCard = styled.View`
    padding: 5px;
    margin-left: 12px;
  `

  const StyledToggle = styled.View`
    padding-bottom: 10px;
    padding-right: 10px;
  `

  const StyledDescription = styled.View`
    padding: 20px;
    padding-bottom: 15px;
  `

  console.log('Card Render')

  return (
    <StyledScrollView>
      <StyledView>
        <TouchableOpacity>
          <StyledBorder>
            <StyledCheckList>
              <Text style={{ fontWeight: 'bold', color: '#1a7067' }}>
                {props.name}
              </Text>
            </StyledCheckList>
            <StyledCard>
              <Text>{props.range}</Text>
            </StyledCard>
            <StyledToggle>
              <ToggleSwitch value={!show} onToggle={onToggleSwitch} />
            </StyledToggle>

            {!show && (
              <>
                <StyledDescription>
                  <Text style={{ textAlign: 'justify' }}>
                    {props.description}
                  </Text>
                </StyledDescription>
              </>
            )}
          </StyledBorder>
        </TouchableOpacity>
      </StyledView>
    </StyledScrollView>
  )
}

export default Card
