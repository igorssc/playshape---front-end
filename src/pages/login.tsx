import * as React from 'react'
import { NextPage } from 'next'
import Layout from '@components/layout/Layout'
import Image from '../../public/undraw_healthy_lifestyle_6tyl.svg'
import styles from '@styles/components/Login.module.css'

const SearchPage: NextPage = () => {
  return (
    <>
      <Layout>
        <div className={styles.loginContainer}>
          <h1>Cadastre-se ou acesse sua conta</h1>
          <div>
            <div>
              <Image />
              <h1>Novo por aqui? Crie sua conta</h1>
              <button className={`${styles.registerButton} dark:bg-gray-800`}>
                Criar conta
              </button>
            </div>
            <div className={styles.line}></div>
            <div>
              <h1>Já sou cliente</h1>
              <form action="">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className="dark:text-gray-900"
                    id="email"
                    name="email"
                    type="text"
                  />
                  <label htmlFor="password">Senha</label>
                  <input
                    className="dark:text-gray-900"
                    id="password"
                    name="password"
                    type="password"
                  />
                </div>
                <div>
                  <h3>Esqueci a senha</h3>
                  <button
                    className={`${styles.loginButtonGoogle} dark:bg-gray-900`}
                  >
                    <img src="1200px-Google__G__Logo.svg.png"></img>Login com
                    Google
                  </button>
                  <button className={`${styles.loginButton} dark:bg-gray-800`}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="dark:border-gray-800" />
      </Layout>
    </>
  )
}

export default SearchPage
