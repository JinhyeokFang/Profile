import Image from 'next/image'
import profileImage from '../../public/profile.jpg'
import styles from '../styles/profile.module.css'

export const Profile = () => {
    return (
        <>
          <div className={styles.wrapper}>
            <article className={styles.topArticle}>
              <section className={styles.imageSection}>
                  <Image className={styles.image} src={profileImage} alt="" width="260" height="260" />
              </section>
              <section className={styles.infoSection}>
                  <div>
                      <h1 className={styles.name}><span>개발자 방진혁 I </span><span className={styles.catchword}>성장하는 코드를 지향합니다 :)</span></h1>
                      <p className={styles.description}>
                          미래를 예측하기보단 <b>현재에</b> 집중하고자 노력합니다. <br/>
                          <b>확장성</b>을 고려한 코드를 선호합니다.
                      </p>
                  </div>
              </section>
            </article>
            <article className={styles.bottomArticle}>
              <h1 className={styles.title}>프로필</h1>
              <section>
                  <p className={styles.link}><b>Github</b>: <a href='https://github.com/JinhyeokFang'>https://github.com/JinhyeokFang</a></p>
                  <p className={styles.link}><b>Mail</b>: hyeki0206@naver.com, jinhyeokfang@gmail.com</p>
              </section>
              <section>
                  <p className={styles.school}><b>경기대학교 AI컴퓨터공학부 컴퓨터공학전공</b> 재학 <span className={styles.studyPeriod}>(21.03 ~ )</span></p>
                  <p className={styles.school}><b>선린인터넷고등학교 소프트웨어과</b> 졸업 <span className={styles.studyPeriod}>(18.03 ~ 21.02)</span></p>
              </section>
              <section>
                <ul className={styles.skillList}>
                  <img src="https://img.shields.io/badge/Typescript-3178C6.svg?&style=for-the-badge&logo=Typescript&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Node.js-339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Javascript-F7DF1E.svg?&style=for-the-badge&logo=Javascript&logoColor=white"/>
                </ul>
                <ul className={styles.skillList}>
                  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                  <img src="https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/>
                  <img src="https://img.shields.io/badge/NextJS-000000.svg?&style=for-the-badge&logo=Next.JS&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Jest-C21325.svg?&style=for-the-badge&logo=Jest&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?&style=for-the-badge&logo=Vue.js&logoColor=white"/>
                </ul>
                <ul className={styles.skillList}>
                  <img src="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/>
                  <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Nginx-009639.svg?&style=for-the-badge&logo=Nginx&logoColor=white"/>
                  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Docker-2496ED.svg?&style=for-the-badge&logo=Docker&logoColor=white"/>
                </ul>
                <ul className={styles.skillList}>
                  <img src="https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white"/>
                  <img src="https://img.shields.io/badge/MongoDB-47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                </ul>
              </section>
            </article>
          </div>
        </>
    )
}
