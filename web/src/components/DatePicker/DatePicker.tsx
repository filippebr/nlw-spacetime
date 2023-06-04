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
  coverUrl: string
  content: string
  createdAt: string
  token: string | undefined
}

export function DatePicker({
  id,
  coverUrl,
  content,
  createdAt,
  token,
}: DatePickerProps) {
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
          id,
          content,
          coverUrl,
          createdAt: justDate.toISOString(),
          // createdAt: justDate.toISOString(),
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
