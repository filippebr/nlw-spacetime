import { EmptyMemories } from '@/components/EmptyMemories'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'

dayjs.locale(ptBr)

interface MemoryProps {
  params: {
    id: string
  }
}

export default async function Memory({ params }: MemoryProps) {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  console.log(token)

  return (
    <div className="flex flex-col gap-10 p-8">
      <h1>Memory: ${params.id}</h1>
    </div>
  )
}
