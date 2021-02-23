import * as React from 'react'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    const preferDarkQuery = '(prefers-color-scheme: dark)'
    const mql = window.matchMedia(preferDarkQuery)
    const supportsColorSchemeQuery = mql.media === preferDarkQuery

    setIsDark(supportsColorSchemeQuery)
  })
  return (
    <>
      {isDark
        ? 'Seu sistema está em modo escuro'
        : 'Seu sistema não está em modo escuro'}
    </>
  )
}

export default IndexPage
