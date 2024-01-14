import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
export default function App({ Component, pageProps }) {
  return <>
    <div style={{ position: 'absolute', top: '0', right: '0', zIndex: '9999999999' }}>
      <Sidebar />
    </div>
    <div>
      <Component {...pageProps} />
    </div>
  </>
}
