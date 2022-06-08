import React, { useState, useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'

import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import styled from 'styled-components/native'
import { intervalToDuration } from 'date-fns'

import BabyChecklist from './BabyChecklist'
import ToggleSwitch from './ToggleSwitch'

export default function DatePickerApp() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const calculateAge = (date) => {
    //const currentDate = moment().diff(date, 'days')

    const currentDate = intervalToDuration({
      start: new Date(date),
      end: new Date(),
    })
    return currentDate
  }

  const StyledScrollView = styled.ScrollView`
    flex: 1;
    width: 100%;
  `

  const StyledView = styled.View`
    flex-direction: column;
    align-items: flex-start;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
  `
  const StyledBorder = styled.View`
    border: 2px;
    border-color: #dedede;
    border-style: solid;
    border-radius: 5px;
    width: 100%;
    background: #f5fcff;
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

  const ageObject = calculateAge(date)

  return (
    <>
      <TouchableOpacity>
        <Button title='Select Date' onPress={() => setOpen(true)} />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        value={date}
        mode='date'
        locale='en_GB'
        minimumDate={new Date(moment().subtract(2, 'years').format())}
        maximumDate={new Date()}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          calculateAge(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

      <Text>Your Baby's date of birth is: {date.toDateString()}</Text>
      <Text>
        Your baby is {ageObject.years} year {ageObject.months} months and{' '}
        {ageObject.days} days old.
      </Text>

      {/* <B1> TimeLline </B1> */}
      {BabyChecklist.filter((item) => item.day < 14).map((filteredItem) => {
        return (
          <StyledScrollView>
            <StyledView>
              <TouchableOpacity>
                <StyledBorder>
                  <StyledCheckList>
                    <StyledSectionHeader>
                      <Text>{filteredItem.name}</Text>
                      <ToggleSwitch></ToggleSwitch>
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
    </>
  )
}

//age = todays date subtracted by date of birth
