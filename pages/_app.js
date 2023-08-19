import Navbar from '@/Components/navbar';
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
<ChakraProvider>
  <Navbar/>
<Component {...pageProps} />
</ChakraProvider>
 
  )
}
