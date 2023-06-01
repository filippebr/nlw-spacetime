import { useState } from 'react'
import ReactCalendar from 'react-calendar'

import './datePicker.css'

interface DateType {
  justDate: Date | null
  dateTime: Date | null
}

type DatePickerProps = {
  params: {
    id: string
  }
}

export function DatePicker({ params }: DatePickerProps) {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  })

  async function getTime() {
    if (!date.justDate) return

    const { justDate } = date

    // await api.put(`/memories/${params.id}`, {
    //   createdAt: justDate,
    // })

    const convertedDate = justDate.toISOString()

    return convertedDate
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
