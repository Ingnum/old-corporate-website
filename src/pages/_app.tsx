import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
