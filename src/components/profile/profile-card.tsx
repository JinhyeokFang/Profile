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
                    사용자를 위한 서비스에 <b>몰입</b>하는 개발자<br/>
                    <b>열정</b>가득한 도전하는 백엔드<br/>
                </p>
            </div>
        </section>
      </article>
    )
}
