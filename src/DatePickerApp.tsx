import React, { useState, useEffect } from 'react'
import { Button, Text, View } from 'react-native'

import DatePicker from 'react-native-date-picker'
import moment from 'moment'

import BabyChecklist from './BabyChecklist'

export default function DatePickerApp() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const onChange = (event, seletedDate) => {
    setDate(moment(selectedDate))
  }

  const calculateAge = (date) => {
    const currentDate = moment().diff(date, 'days')
    return currentDate
  }

  return (
    <>
      <Button title='Select Date' onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        value={date}
        mode='date'
        locale='en_GB'
        minimumDate={new Date(moment().subtract(2, 'years').format())}
        maximumDate={new Date()}
        onChange={onChange}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          calculateAge(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '3%',
        }}
      >
        <Text>Your Baby's date of birth is: {date.toDateString()}</Text>
        <Text> Your baby is {calculateAge(date)} days old </Text>
        <B1> TimeLline </B1>
        {BabyChecklist.filter((item) => item.day < 14).map((filteredItem) => {
          return <Text>{filteredItem.name}</Text>
        })}
      </View>
    </>
  )
}

//age = todays date subtracted by date of birth
