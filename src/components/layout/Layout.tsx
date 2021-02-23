import * as React from 'react'
import Head from 'next/head'

export interface Props {
  title?: string
  className?: string | Record<string, unknown>
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}

export default Layout
