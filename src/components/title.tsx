import { useRouter } from 'next/router'
import styles from '../styles/title.module.css'

export const Title = () => {
  const router = useRouter();

  const toMain = () => {
    router.push('/');
  }

    return (
        <>
            <header className={styles.wrapper} onClick={toMain}>
                <h1 className={styles.title}>개발자 방진혁</h1>
                <hr className={styles.bottomLine}/>
            </header>
        </>
    )
}
