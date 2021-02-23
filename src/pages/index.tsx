import * as React from 'react'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    const colorSchemeQuery =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    setIsDark(colorSchemeQuery)
  }, [])
  return (
    <>
      {isDark
        ? 'Seu sistema está em modo escuro'
        : 'Seu sistema não está em modo escuro'}
    </>
  )
}

export default IndexPage
