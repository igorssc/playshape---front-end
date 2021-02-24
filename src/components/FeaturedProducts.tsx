import * as React from 'react'
import styles from '@styles/components/FeaturedProducts.module.css'

export interface Props {
  title?: string
}

export const Product: React.FC = () => {
  return (
    <div>
      <img
        src="m_top-whey-protein-concentrado-1kg-growth-supplements.jpg"
        alt=""
      />
      <h1>(TOP) WHEY PROTEIN CONCENTRADO (1KG) - GROWTH SUPPLEMENTS</h1>
      <h2>
        Vendido por <strong>ShapeBH</strong>
      </h2>
      <h4>R$ 75,00</h4>
      <h3>R$ 55,00</h3>
      <p>
        In hac habitasse platea dictumst. Morbi euismod ultricies nisi, eu
        egestas massa tristique vel
      </p>
      <a type="button">Detalhes</a>
    </div>
  )
}

const FeaturedProducts: React.FC<Props> = ({ title }) => {
  const array = [null, null, null, null]
  return (
    <div className={styles.FeaturedProductsContent}>
      <h1>{title}</h1>
      <div className={styles.products}>
        {array.map((index, key) => {
          return <Product key={key} />
        })}
      </div>
    </div>
  )
}

export default FeaturedProducts
