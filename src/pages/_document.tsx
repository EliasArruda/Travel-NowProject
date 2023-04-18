import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <title>Travel-Now</title>
      <link 
      rel="shortcut icon" 
      href="favicon.png" 
      type="image/x-icon" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="https://unpkg.com/scrollreveal"></script>
    </Html>
  )
}
