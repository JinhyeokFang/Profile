import styles from '../styles/profile.module.css'
import { ProfileCard } from './profile/profile-card'

export const Profile = () => {
    return (
        <>
          <div className={styles.wrapper}>
            <ProfileCard />
            <h1 className={styles.title}>포트폴리오 (Notion)</h1>
            <a href="https://jinhy.uk/portfolio">https://jinhy.uk/portfolio</a>
            <h1 className={styles.title}>깃허브</h1>
            <a href="https://github.com/JinhyeokFang">https://github.com/JinhyeokFang</a>
          </div>
        </>
    )
}
