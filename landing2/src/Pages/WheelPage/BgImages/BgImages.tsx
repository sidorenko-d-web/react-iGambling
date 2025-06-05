import styles from './BgImages.module.scss'

import sport from '../../../assets/images/sport.avif'
import gifts from '../../../assets/images/gifts.avif'
import dollars from '../../../assets/images/dollars.avif'
import chips from '../../../assets/images/chips.avif'

export const BgImages = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.sport}
        src={sport}
        alt='sport'
      />
      <img
        className={styles.gifts}
        src={gifts}
        alt='gifts'
      />
      <img
        className={styles.dollars}
        src={dollars}
        alt='dollars'
      />
      <img
        className={styles.chips}
        src={chips}
        alt='chips'
      />
    </div>
  )
}
