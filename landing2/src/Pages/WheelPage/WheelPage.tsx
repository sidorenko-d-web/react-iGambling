import styles from './WheelPage.module.scss'

import Wheel from '../../assets/images/wheel.svg'
import SpinButton from '../../assets/images/button.svg'
import WheelPoint from '../../assets/images/wheel-point.svg'

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
      <span className={styles.spinWheelText}>
        BARABANNI 
        AYLANTIRING VA 
        BONUSLARNI OLING!
      </span>
      <span className={styles.spinsLeft}>
        UINISHLAR QOLDI:
        <span className={styles.number}> {isSpin ? 1 : 2}</span>
      </span>

      <div className={styles.wheelsWrapper}>
        <img
          src={WheelPoint}
          className={styles.wheelPoint}
          alt='point'
        />
        <img
          className={clsx(styles.wheel, isSpin && styles.spinAnim)}
          src={Wheel}
          alt='wheel'
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
