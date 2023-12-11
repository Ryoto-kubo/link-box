import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

import type { AppProps } from 'next/app'

import '@src/styles/reset.css'
import '@src/styles/global.css'
import '@src/styles/theme.css'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
