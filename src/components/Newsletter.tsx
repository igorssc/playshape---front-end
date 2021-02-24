import * as React from 'react'
import styles from '@styles/components/Newsletter.module.css'

const Newsletter: React.FC = () => {
  return (
    <div className={`${styles.newsletterContainer} dark:bg-gray-900`}>
      <div>
        <h1>Receba ofertas e descontos exclusivos</h1>
        <form action="/">
          <div>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
          </div>
          <button type="submit">Desejo receber notícias e ofertas</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
