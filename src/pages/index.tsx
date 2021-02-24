import * as React from 'react'
import { NextPage } from 'next'
import Layout from '@components/layout/Layout'
import InitialMessage from '@components/InitialMessage'
import CarrouselIndex from '@components/CarrouselIndex'
import FeaturedProducts from '@components/FeaturedProducts'
import Newsletter from '@components/Newsletter'

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
      <Layout title="Home">
        <InitialMessage />
        {/* <CarrouselIndex />
        <FeaturedProducts title="Mais vendidos na semana" />
        <FeaturedProducts title="Vendidos por lojas mais bem avaliadas" />
        <Newsletter /> */}
      </Layout>
    </>
  )
}

export default IndexPage
