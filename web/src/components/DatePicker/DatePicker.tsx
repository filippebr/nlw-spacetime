import type { Dayjs } from 'dayjs'
import { useState } from 'react'
import { DatePickerCalendar } from './DatePickerCalendar'
import { DatePickerSelector } from './DatePickerSelector'

export interface IDatePickerProps {
  selectedDate: Dayjs
  onChange: (newDate: Dayjs) => void
}

export function DatePicker({ selectedDate, onChange }: IDatePickerProps) {
  const [shownDate, setShownDate] = useState(selectedDate)

  return (
    <div className="offset-x-0 offset-y-3 blur-8 w-44 border-r-0 p-1 text-white opacity-60 shadow">
      <DatePickerSelector shownDate={shownDate} setShownDate={setShownDate} />

      <DatePickerCalendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
      />
    </div>
  )
}
