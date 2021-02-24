import * as React from 'react'
import Image from '../../public/undraw_fitness_tracker_3033.svg'
import styles from '@styles/components/InitialMessage.module.css'

const InitialMessage: React.FC = () => {
  return (
    <div className={styles.initialMessageContainer}>
      <div>
        <Image />
      </div>
      <div className={styles.description}>
        <h1>Tudo a um clique de distância</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
          amet libero ante. In rutrum leo eget ex iaculis iaculis. Sed non
          feugiat metus. Aliquam id nisl ut purus pharetra tincidunt. Donec non
          ante ac nisi volutpat vehicula.
        </p>
      </div>
    </div>
  )
}

export default InitialMessage
