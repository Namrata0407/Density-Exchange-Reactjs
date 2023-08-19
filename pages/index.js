import { Inter } from 'next/font/google'
import TextMessage from '@/Components/text'
import EQbeats from '@/Components/eqBeats'
import Slider from '@/Components/slider'
import Silder2 from '@/Components/slider2'
import Text2Message from '@/Components/text2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <TextMessage/>
     <EQbeats/>
     
     <Slider/>
     <Silder2/>
     <Text2Message/>
    </>
  )
}
