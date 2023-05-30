import { Dayjs } from 'dayjs'
import React from 'react'

import { changeDateMonth } from '@/utils/changeDateMonth'
import { ChevronDownIcon } from 'lucide-react'

export interface IDatePickerSelectorProps {
  shownDate: Dayjs
  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>
}

export function DatePickerSelector({
  shownDate,
  setShownDate,
}: IDatePickerSelectorProps): any {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth))
    }
  }

  return (
    <div className="mb-4 flex h-16 items-center justify-center border-b border-b-zinc-300">
      <div
        className="flex h-4 w-4 rotate-90 transform cursor-pointer items-center justify-center border-r-2 bg-gray-500 transition duration-200 ease-in-out hover:bg-indigo-950"
        onClick={handleIconClick(false)}
      >
        <ChevronDownIcon />
      </div>

      <div className="">{shownDate.format('MMMM YYYY')}</div>

      <div
        className="flex h-4 w-4 -rotate-90 transform cursor-pointer items-center justify-center border-r-2 bg-gray-500 transition duration-200 ease-in-out hover:bg-indigo-950"
        onClick={handleIconClick(true)}
      >
        <ChevronDownIcon />
      </div>
    </div>
  )
}
