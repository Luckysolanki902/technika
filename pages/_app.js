import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { useMediaQuery } from '@mui/material'
import { Cursor } from 'react-creative-cursor'
export default function App({ Component, pageProps }) {
  const isLargeScreen = useMediaQuery('(min-width: 1000px)');
  return <>
    {isLargeScreen && <Cursor isGelly={true}/>}
    <div style={{ position: 'absolute', top: '0', right: '0', zIndex: '9999999999' }}>
      <Sidebar />
    </div>
    <div>
      <Component {...pageProps} />
    </div>
  </>
}
