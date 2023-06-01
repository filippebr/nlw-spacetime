import { FC, useState } from 'react'
import ReactCalendar from 'react-calendar'

import './datePicker.css'

interface dateProps {}

interface DateType {
  justDate: Date | null
  dateTime: Date | null
}

export const DatePicker: FC<dateProps> = ({}) => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  })

  function getTime() {
    if (!date.justDate) return

    const { justDate } = date

    return justDate
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
