import React, { useState } from 'react'
import styled from 'styled-components/native'

const StyledButton = styled.View`
  background: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '#00AB63' : '#ffffff'};
  width: 32px;
  height: 32px;
  border-radius: 5px;
  margin: 20px;
  border: 2px solid #00ab63;
`

function Checkbox() {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <StyledButton
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    ></StyledButton>
  )
}

export default Checkbox
