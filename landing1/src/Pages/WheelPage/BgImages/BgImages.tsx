import styles from './BgImages.module.scss'

import Chip1 from '../../../assets/images/chip.avif'
import Chip2 from '../../../assets/images/chip 2.avif'
import Chip3 from '../../../assets/images/chip 3.avif'
import Woman from '../../../assets/images/woman.avif'
import SpinLight from '../../../assets/images/Spin.avif'

export const BgImages = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.woman}
        src={Woman}
        alt='woman'
      />
      <img
        className={styles.spinLight}
        src={SpinLight}
        alt='spin-light'
      />
      {/* <img
        className={styles.spinLightMobile}
        src={SpinLightMobile}
        alt='spin-light'
      /> */}
      <img
        className={styles.chip2}
        src={Chip2}
        alt='chip'
      />
      <img
        className={styles.chip1}
        src={Chip1}
        alt='chip'
      />
      <img
        className={styles.chip3}
        src={Chip3}
        alt='chip'
      />
    </div>
  )
}
