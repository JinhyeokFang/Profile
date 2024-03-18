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
            <h1 className={styles.title}>포트폴리오</h1>
            <a href="https://jinhyeokfang.notion.site/348f4cef42ef4e9e8c2b04c4c7f19469">포트폴리오(노션) 바로가기</a>
          </div>
        </>
    )
}
