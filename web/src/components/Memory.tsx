'use client'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import DropdownMenu from './DropdownMenu'
// import { DatePicker } from './DatePicker/DatePicker'

dayjs.locale(ptBr)

interface MemoryProps {
  id: string
  coverUrl: string
  content: string
  createdAt: string
  token: string | undefined
}

export default function Memory({
  id,
  coverUrl,
  content,
  createdAt,
  token,
}: MemoryProps) {
  return (
    <div className="flex flex-col gap-10 p-8">
      <Link
        href={`/`}
        className="flex items-center gap-2  text-sm text-gray-200 hover:text-gray-100"
      >
        Voltar
        <ArrowLeft className="h-4 w-4" />
      </Link>
      <div key={id} className="space-y-4">
        <DropdownMenu
          id={id}
          coverUrl={coverUrl}
          content={content}
          createdAt={createdAt}
          token={token}
        />

        <Image
          src={coverUrl}
          width={592}
          height={280}
          alt=""
          className="w-auto rounded-lg object-cover"
        />

        <p className="text-lg leading-relaxed text-gray-100">{content}</p>
      </div>
    </div>
  )
}
