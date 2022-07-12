import React, { useState } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Switch, Button } from 'react-native-paper'

import styled from 'styled-components/native'
import BabyChecklist from './BabyChecklist'
import ToggleSwitch from './ToggleSwitch'
import { Linking } from 'react-native'

const AboutCard = (props) => {
  const [show, setShow] = useState(true)
  const onToggleSwitch = () => setShow(!show)

  const StyledScrollView = styled.View`
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

  console.log('Card Render')

  return (
    <StyledScrollView>
      <StyledView>
        <TouchableOpacity>
          <StyledBorder>
            <StyledCheckList>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#1a7067',
                  textAlign: 'justify',
                }}
              >
                About{' '}
              </Text>
              <Text>
                {'\n'}
                The paper red book, despite containing important content, often
                ended up at the bottom of a drawer – or worse, lost, once it was
                no longer in active use. {'\n'}
                {'\n'}
                Stories from GPs and Health Visitors showed that many parents
                lost their paper red books before their children went to school.
                Those who didn't had lost them by the time it came to fill out
                university application forms and they knocked on the door of
                their GP surgeries for new copies.
                {'\n'}
                {'\n'}
                That is why I decided to go on a mission to provide every parent
                in the UK with a more engaging, digital copy of their red book.
                Here you read important guidance from the NHS and other sources.
                In time, this app will become a virtual keepsake that contains
                not only health information (such as immunisations and screening
                results) but also photos, notes and other information about your
                child.{'\n'}
              </Text>
            </StyledCheckList>
          </StyledBorder>
        </TouchableOpacity>
      </StyledView>
      <StyledView>
        <TouchableOpacity>
          <StyledBorder>
            <StyledCheckList>
              <StyledCheckList>
                <Text style={{ fontWeight: 'bold', color: '#1a7067' }}>
                  Contact us{' '}
                </Text>
                <Text>80 Charlotte street </Text>
                <Text>London </Text>
                <Text>W1 2EW </Text>
              </StyledCheckList>
              <StyledCheckList>
                <Text style={{ fontWeight: 'bold', color: '#1a7067' }}>
                  Find Further Info here:{' '}
                </Text>

                <Text
                  style={styles.hyperlinkStyle}
                  onPress={() => {
                    Linking.openURL('https://www.nhs.uk/conditions/baby/')
                  }}
                >
                  NHS
                </Text>
              </StyledCheckList>
            </StyledCheckList>
          </StyledBorder>
        </TouchableOpacity>
      </StyledView>
    </StyledScrollView>
  )
}

export default AboutCard

const styles = StyleSheet.create({
  hyperlinkStyle: {
    color: 'blue',
  },
})
