// import { cookies } from 'next/headers'
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
}

export function DatePicker({ id }: DatePickerProps) {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  })

  async function getTime() {
    if (!date.justDate) return

    const { justDate } = date

    // const token = cookies().get('token')?.value

    // console.log(token)

    try {
      await api.put(
        `/memories/${id}`,
        {
          createdAt: justDate.toISOString(),
        },
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // },
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
