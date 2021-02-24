import * as React from 'react'
import styles from '@styles/components/Header.module.css'
import Menu from '@components/Menu'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <Link href="/">
          <img src="PlayShape_v1.png" alt="Logo" />
        </Link>
        <h1>Suplementação a um clique de distância</h1>
        <h2>Descubra lojas de suprimentos perto de você</h2>
        <form method="GET" action="/search">
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 flex items-center ml-6">
              <BsSearch />
            </span>
            <input
              type="search"
              name="q"
              className="py-2 text-sm bg-white rounded focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Buscar produtos"
              autoComplete="off"
            />
            <button type="submit" className="rounded">
              Buscar
            </button>
          </div>
        </form>
        <Menu className="hidden"></Menu>
      </header>
    </>
  )
}

export default Header
