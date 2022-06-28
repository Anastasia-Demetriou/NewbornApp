import React, { useState, useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'

import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import styled from 'styled-components/native'
import { intervalToDuration } from 'date-fns'

export default function DatePickerApp({ navigation, onAgeChange }) {
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

  const ageObject = calculateAge(date)

  const StyledBirthday = styled.View`
    align-items: flex-start;
    margin: 0px 0px 0px 20px;
    padding-top: 10px;
  `

  return (
    <>
      <TouchableOpacity>
        <Button title='Select Date' onPress={() => setOpen(true)} />
        {/* <Button title='Select Date' onPress={() => navigation.push("CardContainer") /> */}
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
          const age = calculateAge(date)
          onAgeChange(age)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

      <StyledBirthday>
        <Text>Your Baby's date of birth is:</Text>
        <Text>{date.toDateString()}</Text>
      </StyledBirthday>
      <StyledBirthday>
        <Text>Age: </Text>
        <Text>
          {ageObject.years} year {ageObject.months} months and {ageObject.days}{' '}
          days old.
        </Text>
      </StyledBirthday>
    </>
  )
}

//age = todays date subtracted by date of birth
