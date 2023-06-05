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
  isPublic: boolean
  token: string | undefined
}

export function DatePicker({
  id,
  coverUrl,
  content,
  isPublic,
  token,
}: DatePickerProps) {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  })

  async function getTime() {
    if (!date.justDate) return

    const { justDate } = date

    console.log('justDate: ', justDate.toISOString())

    // const token = cookies().get('token')?.value

    const updatedMemoryData = {
      coverUrl,
      content,
      isPublic,
      createdAt: '2023-06-05T10:00:00Z', // Specify the new value for createdAt
    }

    try {
      const response = await api.put(`/memories/${id}`, updatedMemoryData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log('data', response.data)
      console.log('createdAt: ', response.data.createdAt)

      return justDate
    } catch (error) {
      console.error(error)
    }
  }

  console.log('getTime: ', getTime())

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
