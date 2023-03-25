import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html
      className='h-full antialiased dark js-focus-visible'
      lang="en"
      data-js-focus-visible
    >
      <Head>
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: process.env.rawJsFromFile ? process.env.rawJsFromFile : ''
        }}></script>

      </Head>
      <body className='flex h-full flex-col bg-zinc-50 dark:bg-moon'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}







