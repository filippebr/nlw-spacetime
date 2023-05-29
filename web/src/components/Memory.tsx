import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

dayjs.locale(ptBr)

interface MemoryProps {
  id: string
  coverUrl: string
  content: string
  createdAt: string
}

export default function Memory({
  id,
  coverUrl,
  content,
  createdAt,
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
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(createdAt).format('D[ de ]MMMM[, ]YYYY')}
        </time>

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
