import styles from './WheelPage.module.scss'

import UpperWheel from '../../assets/images/upper-wheel.svg'
import InnerWheel from '../../assets/images/inner-wheel.svg'
import SpinButton from '../../assets/images/button.svg'
import SpinLightMobile from '../../assets/images/spin-mobile.avif'

import { useState } from 'react'
import clsx from 'clsx'
import { BgImages } from './BgImages/BgImages'
import { PrizePopup } from './PrizePopup/PrizePopup'

export const WheelPage = () => {
  const [isSpin, setIsSpin] = useState(false)
  const [isShowPopup, setIsShowPopup] = useState(false)

  const handleSpin = () => {
    setIsSpin(true)
    setTimeout(() => {
      setIsShowPopup(true)
    }, 1000 * 10.5)
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}>LOGO</h1>
      <span className={styles.spinWheelText}>BARABANNI AYLANTIRING</span>
      <span className={styles.bonusesText}>VA BONUSLARNI OLING!</span>

      <img
        className={styles.spinLightMobile}
        src={SpinLightMobile}
        alt='spin-light'
      />
      <div className={styles.wheelsWrapper}>
        <img
          className={clsx(styles.upperWheel, isSpin && styles.spinAnim)}
          src={UpperWheel}
          alt='upper-wheel'
        />
        <img
          className={clsx(styles.innerWheel, isSpin && styles.spinAnim)}
          src={InnerWheel}
          alt='inner-wheel'
        />
        <button
          onClick={handleSpin}
          className={clsx(styles.spinButton, !isSpin && styles.pulseAnim)}
        >
          <img
            src={SpinButton}
            alt='spin'
          />
        </button>
      </div>

      <BgImages />

      {isShowPopup && <div className={styles.vignnete} />}

      {isShowPopup && <PrizePopup />}
    </div>
  )
}
