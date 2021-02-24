import * as React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from '@components/Footer'

export interface Props {
  title?: string
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {/* {children} */}
      {/* <Footer /> */}
    </>
  )
}

export default Layout
