import { EmptyMemories } from '@/components/EmptyMemories'
import Memory from '@/components/Memory'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'

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

  const { id, coverUrl, content, isPublic, createdAt } = memory?.data

  return (
    <Memory
      token={token}
      id={id}
      coverUrl={coverUrl}
      content={content}
      isPublic={isPublic}
      createdAt={createdAt}
    />
  )
}
