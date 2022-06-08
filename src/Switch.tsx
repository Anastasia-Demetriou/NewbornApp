import React, { useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const StyledButton = styled.View`
  background: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '#00AB63' : '#D2D5DB'};
  color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '#ffffff' : '#000000'};
  width: 117px;
  height: 48px;
  border-radius: 50px;
  border-style: none;
  position: relative;
  display: block;
`

const StyledToggleSwitch = styled.View`
  border-radius: 50%;
  background-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '#ffffff' : '#434A57'};
  height: 32px;
  width: 32px;
  position: absolute;
  top: 8px;
  left: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? 'auto' : '8px'};
  right: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '8px' : 'auto'};
`

const StyledSpan = styled.View`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1em;
  margin-right: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '50px' : '0px'};
  margin-left: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '0px' : '50px'};
`

function Switch() {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <StyledButton
      isSelected={isSelected}
      onPress={() => setIsSelected(!isSelected)}
    >
      <StyledSpan isSelected={isSelected}></StyledSpan>
      <Text> {isSelected ? 'ON' : 'OFF'} </Text>

      <StyledToggleSwitch isSelected={isSelected} />
    </StyledButton>
  )
}

export default Switch
