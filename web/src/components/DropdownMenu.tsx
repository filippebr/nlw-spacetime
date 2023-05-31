import { Menu, Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import { Fragment } from 'react'
import { DatePicker } from './DatePicker/DatePicker'

interface DropdownMenuProps {
  createdAt: string
}

export default function DropdownMenu({ createdAt }: DropdownMenuProps) {
  return (
    <Menu>
      <Menu.Button>
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(createdAt).format('D[ de ]MMMM[, ]YYYY')}
        </time>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-150 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items>
          <DatePicker />
        </Menu.Items>
      </Transition>
    </Menu>
  )
}