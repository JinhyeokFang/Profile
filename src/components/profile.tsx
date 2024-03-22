import styles from '../styles/profile.module.css'
import { ProfileCard } from './profile/profile-card'
import { ProfileInformation } from './profile/profile-information'
import { TechStack } from './profile/tech-stack'

export const Profile = () => {
    return (
        <>
          <div className={styles.wrapper}>
            <ProfileCard />
            <h1 className={styles.title}>프로필</h1>
            <ProfileInformation />
            <h1 className={styles.title}>기술 스택</h1>
            <TechStack />
            <h1 className={styles.title}>포트폴리오 (Notion)</h1>
            <a href="https://jinhy.uk/portfolio">https://jinhy.uk/portfolio</a>
          </div>
        </>
    )
}
