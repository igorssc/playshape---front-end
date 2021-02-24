import * as React from 'react'
import { NextPage } from 'next'
import Layout from '@components/layout/Layout'
import FeaturedProducts from '@components/FeaturedProducts'
import styles from '@styles/components/Search.module.css'
import clsx from 'clsx'

const SearchPage: NextPage = () => {
  const node = React.useRef<HTMLDivElement>()
  const [showDropdown, setShowDropdown] = React.useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (node?.current?.contains(e.target as Node)) {
      return
    }
    setShowDropdown(false)
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <Layout title="Busca">
        <header className={styles.searchContainer}>
          <h1>Resultados da pesquisa sobre ""</h1>

          <div className="relative inline-block text-left">
            <div ref={node}>
              <button
                type="button"
                className={clsx(
                  'inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
                )}
                onClick={toggleDropdown}
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Ordenar por
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {showDropdown && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Preço
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>
        <FeaturedProducts title="" />
      </Layout>
    </>
  )
}

export default SearchPage
