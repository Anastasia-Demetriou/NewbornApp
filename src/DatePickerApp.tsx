import React, { useState, useEffect } from 'react'
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native'

import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import styled from 'styled-components/native'
import { intervalToDuration } from 'date-fns'

export default function DatePickerApp({
  navigation,
  onAgeChange,
  setHide,
  hide,
}) {
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
      {!hide && (
        <>
          <View>
            <TouchableOpacity>
              <Pressable style={styles.button} onPress={() => setOpen(true)}>
                <Text style={styles.text}>Birth Date</Text>
              </Pressable>
            </TouchableOpacity>
          </View>

          {/* <StyledButton>
              <Button title='Select date' onPress={() => setOpen(true)} />
            </StyledButton> */}
          {/* <Button title='Select Date' onPress={() => navigation.push("CardContainer") /> */}

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
              setHide(true)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
        </>
      )}

      {/* <Text style={{ fontWeight: 'bold', color: '#1a7067', fontSize: 25 }}>
          {date.toDateString()}
        </Text> */}

      {hide && (
        <StyledBirthday>
          <Text style={{ fontWeight: 'bold', color: '#1a7067', fontSize: 25 }}>
            {ageObject.years} year {ageObject.months} months and{' '}
            {ageObject.days} days old
          </Text>
        </StyledBirthday>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3fe0d0',
    margin: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

//age = todays date subtracted by date of birth
