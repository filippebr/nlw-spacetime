import { Menu } from '@headlessui/react'
import dayjs from 'dayjs'
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
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'bg-blue-500'}`} href="">
              <DatePicker />
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
