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

  return (
    <div className="flex flex-col items-start">
      {date.justDate ? (
        <div className="flex gap-4"></div>
      ) : (
        <ReactCalendar
          className="REACT-CALENDAR p-2"
          view="month"
          onClickDay={(date) => console.log(date)}
        />
      )}
    </div>
  )
}
