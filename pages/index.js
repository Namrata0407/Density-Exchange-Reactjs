import { Inter } from 'next/font/google'
import TextMessage from '@/Components/text'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <TextMessage/>
    </>
  )
}
