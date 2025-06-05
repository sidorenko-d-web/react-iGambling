import styles from './FormPage.module.scss'

import { useState } from 'react'
import clsx from 'clsx'

import EyeIcon from '../../assets/images/eye-icon.svg'
import PhoneInput from 'react-phone-number-input'

export const FormPage = () => {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true)
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const [codeValue, setCodeValue] = useState<any>()

  const handlePhoneLogin = (e: any) => {
    e.preventDefault()
    setIsPhoneLogin(true)
  }
  const handleEmailLogin = (e: any) => {
    e.preventDefault()
    setIsPhoneLogin(false)
  }
  const handleHidePassword = (e: any) => {
    e.preventDefault()
    setIsPasswordHidden((p) => !p)
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}>LOGO</h1>

      <form className={styles.form}>
        <div className={styles.buttonsWrapper}>
          <button
            className={clsx(isPhoneLogin && styles.active)}
            onClick={handlePhoneLogin}
          >
            Telefon
          </button>
          <button
            className={clsx(!isPhoneLogin && styles.active)}
            onClick={handleEmailLogin}
          >
            Elektron pochta
          </button>
        </div>
        {isPhoneLogin && (
          <>
            <label className={styles.inputLabel}>Telefon</label>
            <PhoneInput
              international
              className={styles.phoneInput}
              defaultCountry='RU'
              placeholder='Enter phone number'
              value={codeValue}
              onChange={setCodeValue}
            />
          </>
        )}
        {!isPhoneLogin && (
          <>
            <label
              className={styles.inputLabel}
              htmlFor='mail'
            >
              Pochta
            </label>
            <input
              id='mail'
              type='text'
              className={styles.input}
              placeholder='example@email.com'
            />
          </>
        )}
        <label
          className={styles.inputLabel}
          htmlFor='pass'
        >
          Parol
        </label>

        <div className={styles.inputWrapper}>
          <input
            id='pass'
            placeholder='type password here'
            type={isPasswordHidden ? 'password' : 'text'}
          />
          <button onClick={handleHidePassword}>
            <img
              src={EyeIcon}
              alt='eye'
            />
          </button>
        </div>
        <label
          htmlFor='code'
          className={styles.inputLabel}
        >
          Promo Code
        </label>
        <input
          id='code'
          name='code'
          placeholder='_ _ _ _ _ _'
          type='text'
          className={styles.input}
        />

        <button className={styles.submitButton}>Login</button>
      </form>
    </div>
  )
}
