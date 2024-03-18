import styles from '../../styles/profile.module.css'

export const ProfileInformation = () => {
    return (
        <>
          <section>
              <p className={styles.link}><a href='https://github.com/JinhyeokFang'>github.com/JinhyeokFang</a></p>
              <p className={styles.link}>hyeki0206@naver.com</p>
          </section>
          <section>
              <p className={styles.school}><b>경기대</b> 컴퓨터공학전공 재학</p>
              <p className={styles.school}><b>선린인터넷고</b> 소프트웨어과 졸업</p>
          </section>
          <section>
              <p className={styles.school}>SQL 개발자 | 정보처리기능사</p>
              <p className={styles.school}>5th UMC | 20th IWOP</p>
          </section>
        </>
    )
}
