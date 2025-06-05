import { useNavigate } from 'react-router-dom'

import styles from './PrizePopup.module.scss'

export const PrizePopup = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/form')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h2 className={styles.headline}>SIZ YUTDINGIZ</h2>
        <p className={styles.text}>9 000 000 UZS + 80 FS</p>
      </div>
      <button
        onClick={handleNavigate}
        className={styles.button}
      >
        BONUSNI OLISH
      </button>
    </div>
  )
}
