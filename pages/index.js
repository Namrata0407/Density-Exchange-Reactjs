import { Inter } from 'next/font/google'
import TextMessage from '@/Components/text'
import EQbeats from '@/Components/eqBeats'
import Slider from '@/Components/slider'
import Silder2 from '@/Components/slider2'
import Text2Message from '@/Components/text2'
import OpenVacanciesSection from '@/Components/vacancies'
import Slider3 from '@/Components/slider3'
import Footer from '@/Components/footer'
import AnimationOne from '@/Components/animationOne'
import RecordedVideo from '@/Components/video'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
         <RecordedVideo/>

     <TextMessage/>
     <AnimationOne/>
     <EQbeats/>
     
     <Slider/>
     <Silder2/>
     <Text2Message/>
     
     <Slider3/>
     <OpenVacanciesSection/>
     <Footer/>
    </>
  )
}
