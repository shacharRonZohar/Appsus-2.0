import { SessionProvider } from 'next-auth/react'
import { trpc } from '../utils/trpc'
// import { type Session } from 'next-auth'
import '../styles/globals.css'

import Layout from '../cmps/layout'

import type { NextPage } from 'next'
import type { AppType, AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page)
  return getLayout(
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>,
  )
}

// TODO: Find out how to avoid this cast
export default trpc.withTRPC(MyApp as AppType)
