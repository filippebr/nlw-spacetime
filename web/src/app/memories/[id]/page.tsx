import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
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

export default async function PageMemory({ params }: MemoryProps) {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }
  const token = cookies().get('token')?.value

  const memory = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const { id, coverUrl, content, createdAt } = memory?.data

  return (
    <div className="flex flex-col gap-10 p-8">
      <div key={id} className="space-y-4">
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

        <p className="text-lg leading-relaxed text-gray-100">{content}</p>
      </div>
    </div>
  )
}
