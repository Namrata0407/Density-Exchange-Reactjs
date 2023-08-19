import { Inter } from 'next/font/google'
import TextMessage from '@/Components/text'
import EQbeats from '@/Components/eqBeats'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <TextMessage/>
     <EQbeats/>
    </>
  )
}
