'use client'
import { useState } from 'react'
import ReactCalendar from 'react-calendar'

import { api } from '@/lib/api'

import './datePicker.css'

interface DateType {
  justDate: Date | null
  dateTime: Date | null
}

type DatePickerProps = {
  id: string
  token: string | undefined
}

export function DatePicker({ id, token }: DatePickerProps) {
  const [date, setDate] = useState<DateType>({
    justDate: new Date(),
    dateTime: null,
  })

  async function getTime() {
    console.log('Just date:', date.justDate)
    if (!date.justDate) return

    const { justDate } = date

    // const token = cookies().get('token')?.value

    console.log('Token DatePicker: ', token)

    try {
      await api.put(
        `/memories/${id}`,
        {
          content: 'abc',
          coverUrl:
            'http://res.cloudinary.com/dcq0bdo1i/image/upload/v1685384931/nlw-spacetime/bgw09wrxbqstyeypkcjd.png',
          id: '204bc21f-9b5a-4093-bc31-6d1e391cad17',
          isPublic: false,
          createdAt: justDate.toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      return justDate
    } catch (error) {
      console.error(error)
    }
  }

  console.log(getTime())

  return (
    <div className="flex flex-col items-start">
      <ReactCalendar
        locale="pt-BR"
        className="REACT-CALENDAR p-2"
        view="month"
        onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
      />
    </div>
  )
}
