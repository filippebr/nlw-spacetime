import { EmptyMemories } from '@/components/EmptyMemories'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowRight } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

dayjs.locale(ptBr)

interface MemoryProps {
  params: {
    id: string
  }
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
  isAuthenticated: boolean
}

export default function Memory({
  params,
  id,
  coverUrl,
  excerpt,
  createdAt,
  isAuthenticated = false,
}: MemoryProps) {
  // const imageUrl =
  //   'http://res.cloudinary.com/dcq0bdo1i/image/upload/v1685153853/nlw-spacetime/muem4pv6esydngora0ad.png'

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  console.log(token)

  return (
    <div key={params.id} className="space-y-4">
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {dayjs(createdAt).format('D[ de ]MMMM[, ]YYYY')}
      </time>

      <Image
        src={coverUrl}
        width={592}
        height={280}
        alt=""
        className="w-64 rounded-lg object-cover"
      />

      <p className="text-lg leading-relaxed text-gray-100">{excerpt}</p>

      <Link
        href={`/memories/${id}`}
        className="flex items-center gap-2  text-sm text-gray-200 hover:text-gray-100"
      >
        Ler mais
        <ArrowRight className="h-4 w-4 " />
      </Link>
    </div>
  )
}
