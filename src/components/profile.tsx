import Image from 'next/image'
import profileImage from '../../public/profile.jpg'
import styles from '../styles/profile.module.css'

export const Profile = () => {
    return (
        <>
          <div className={styles.wrapper}>
              <section className={styles.imageSection}>
                  <Image className={styles.image} src={profileImage} alt="" width="260" height="260" />
              </section>
              <section className={styles.infoSection}>
                  <div>
                      <h1 className={styles.name}><span>개발자 방진혁 I </span><span className={styles.catchword}>성장하는 코드를 지향합니다 :)</span></h1>
                      <p className={styles.description}>
                          미래를 예측하기보단 <b>현재에</b> 집중하고자 노력합니다. <br/>
                          <b>확장성</b>을 고려한 코드를 지향합니다.
                      </p>
                  </div>
                  <div>
                      <p className={styles.link}><b>Github</b>: <a href='https://github.com/JinhyeokFang'>https://github.com/JinhyeokFang</a></p>
                      <p className={styles.link}><b>Mail</b>: hyeki0206@naver.com, jinhyeokfang@gmail.com</p>
                  </div>
                  <div>
                      <p className={styles.school}><b>경기대학교 AI컴퓨터공학부 컴퓨터공학전공</b> 재학 <span className={styles.studyPeriod}>(21.03 ~ )</span></p>
                      <p className={styles.school}><b>선린인터넷고등학교 소프트웨어과</b> 졸업 <span className={styles.studyPeriod}>(18.03 ~ 21.02)</span></p>
                  </div>
              </section>
          </div>
          <br />
        </>
    )
}
