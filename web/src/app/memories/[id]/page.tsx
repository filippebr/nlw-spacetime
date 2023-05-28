import { EmptyMemories } from '@/components/EmptyMemories'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'
import Image from 'next/image'

dayjs.locale(ptBr)

interface MemoryProps {
  params: {
    id: string
  }
}

export default async function Memory({ params }: MemoryProps) {
  const isAuthenticated = cookies().has('token')

  const imageUrl =
    'http://res.cloudinary.com/dcq0bdo1i/image/upload/v1685153853/nlw-spacetime/muem4pv6esydngora0ad.png'

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  console.log(token)

  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="space-y-4">
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(Date.now()).format('D[ de ]MMMM[, ]YYYY')}
        </time>

        <Image
          src={imageUrl}
          width={592}
          height={280}
          alt=""
          className="w-64 rounded-lg object-cover"
        />

        <p className="text-lg leading-relaxed text-gray-100">{params.id}</p>
      </div>
    </div>
  )
}
