import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import Layout from '@/components/Layout'

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>

      <Layout>
        < Component {...pageProps} />
      </Layout>
    </>
  )
}
