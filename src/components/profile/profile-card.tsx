import Image from 'next/image'
import profileImage from '../../../public/profile.png'
import styles from '../../styles/profile.module.css'

export const ProfileCard = () => {
    return (
      <article className={styles.topArticle}>
        <section className={styles.imageSection}>
            <Image className={styles.image} src={profileImage} alt="" width="260" height="260" />
        </section>
        <section className={styles.infoSection}>
            <div>
                <h1 className={styles.name}><span>방진혁</span></h1>
                <p className={styles.description}>
                    사용자를 위한 서비스에 <b>몰입</b>하는 엔지니어 :&#41;<br/>
                </p>
            </div>
        </section>
      </article>
    )
}
