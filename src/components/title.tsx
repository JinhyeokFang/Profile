import { useRouter } from 'next/router'
import styles from '../styles/title.module.css'

export const Title = () => {
  const router = useRouter();

  const toMain = () => {
    router.push('/');
  }

    return (
        <>
            <header className={styles.wrapper}>
              <div onClick={toMain} className={styles.button}>
                <span className={styles.icon}>
                  {'◀'}
                </span>
                <span className={styles.text}>
                  &nbsp;&nbsp;
                  메인으로
                </span>
              </div>
            </header>
        </>
    )
}
