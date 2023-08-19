import { Inter } from 'next/font/google'
import TextMessage from '@/Components/text'
import EQbeats from '@/Components/eqBeats'
import Slider from '@/Components/slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <TextMessage/>
     <EQbeats/>
     
     <Slider/>
    </>
  )
}
