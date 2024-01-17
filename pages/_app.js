import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { useMediaQuery } from '@mui/material'
import { Cursor } from 'react-creative-cursor'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TypeAdminPassword from '@/components/TypeAdminPassword';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function App({ Component, pageProps }) {
  const isLargeScreen = useMediaQuery('(min-width: 1000px)');

  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const isAdminPage = router.pathname.startsWith('/admin') && router.pathname !== '/admin/dashboard';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    router.events.on('routeChangeStart', () => {
    });

    router.events.on('routeChangeComplete', () => {
    });


    return () => {

    };
  }, []);


  useEffect(() => {
    if (isAdminPage) {
      const checkLoggedInStatus = () => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedIn === 'true');
        setLoading(false);
      };

      checkLoggedInStatus();
    }
  }, [isAdminPage]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Head>
        <title>{`Technika HBTU `}</title>
        <meta name="description" content={`Technika HBTU - The official technical fest of HBTU`} />
      </Head>
      {isAdminPage ? (
        <ThemeProvider theme={darkTheme}>
          {loading ? (
            <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
              <p style={{ color: 'white' }}>Loading...</p>
            </div>
          ) : (
            isLoggedIn ? (
              <Component {...pageProps} />
            ) : (
              <TypeAdminPassword onLogin={handleLogin} />
            )
          )}
          <style>
            {`
              html, body {
                background-color: #1a1a1a;
                color: #f0f0f0;
                font-family: Jost, sans-serif;
                margin: 0;
                height: 100%;
              }
            `}
          </style>
        </ThemeProvider>
      ) : (
        <>
          {!isAdminPage && <>
            {isLargeScreen &&<div style={{height:'0'}}><Cursor isGelly={true} /></div> }
            <div style={{ position: 'absolute', top: '0', right: '0', zIndex: '9999999999' }}>
              <Sidebar />
            </div>
          </>}
          <div>
            <Component {...pageProps} />
          </div>
        </>
      )}
    </>
  );
}