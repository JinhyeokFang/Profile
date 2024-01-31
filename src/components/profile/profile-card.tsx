import Image from 'next/image'
import profileImage from '../../../public/profile.jpg'
import styles from '../../styles/profile.module.css'

export const ProfileCard = () => {
    return (
      <article className={styles.topArticle}>
        <section className={styles.imageSection}>
            <Image className={styles.image} src={profileImage} alt="" width="260" height="260" />
        </section>
        <section className={styles.infoSection}>
            <div>
                <h1 className={styles.name}><span>도전하는 백엔드 방진혁</span></h1>
                <p className={styles.description}>
                    같은 기능을 만들 때도 다른 방법, 기술을 <b>도전</b>합니다.<br/>
                </p>
            </div>
        </section>
      </article>
    )
}
