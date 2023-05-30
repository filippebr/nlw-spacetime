import { Dayjs } from 'dayjs'
import React, { useMemo } from 'react'

import { getCalendarRows } from '../../utils/datePickerutils'

export interface IDatePickerCalendarProps {
  shownDate: Dayjs
  selectedDate: Dayjs

  onChange: (newDate: Dayjs) => void
}

export const DatePickerCalendar: React.FC<IDatePickerCalendarProps> = ({
  shownDate,
  selectedDate,
  onChange,
}) => {
  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value)
  }

  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate])

  return (
    <>
      <div className="mb-2 flex">
        {rows[0].map(({ value }, i) => (
          <div
            key={i}
            className="m-0 mx-1 flex h-8 w-7 items-center justify-center rounded-full p-2"
          >
            {value.format('dd')}
          </div>
        ))}
      </div>

      {rows.map((cells, rowIndex) => (
        <div key={rowIndex} className="flex">
          {cells.map(({ text, value }, i) => (
            <div
              key={`${text} - ${i}`}
              className="m-0 mx-1 flex h-8 w-7 cursor-pointer items-center justify-center rounded-full p-1 transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:bg-red-200 active:bg-gray-500"
              onClick={handleSelectDate(value)}
            >
              {text}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
