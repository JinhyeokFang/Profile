import styles from '../styles/skills.module.css'

export const Skills = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Skills</h1>
                <h2>Languages (+ runtimes)</h2>
                <ul className={styles.skillList}>
                  <img src="https://img.shields.io/badge/Typescript-3178C6.svg?&style=for-the-badge&logo=Typescript&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Node.js-339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Javascript-F7DF1E.svg?&style=for-the-badge&logo=Javascript&logoColor=white"/>
                </ul>
                <h2>Frameworks</h2>
                <ul className={styles.skillList}>
                  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                  <img src="https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/>
                  <img src="https://img.shields.io/badge/NextJS-000000.svg?&style=for-the-badge&logo=Next.JS&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Jest-C21325.svg?&style=for-the-badge&logo=Jest&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?&style=for-the-badge&logo=Vue.js&logoColor=white"/>
                </ul>
                <h2>Environments</h2>
                <ul className={styles.skillList}>
                  <img src="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/>
                  <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Nginx-009639.svg?&style=for-the-badge&logo=Nginx&logoColor=white"/>
                  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
                  <img src="https://img.shields.io/badge/Docker-2496ED.svg?&style=for-the-badge&logo=Docker&logoColor=white"/>
                </ul>
                <h2>Databases</h2>
                <ul className={styles.skillList}>
                  <img src="https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white"/>
                  <img src="https://img.shields.io/badge/MongoDB-47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                </ul>
            </div>
            <hr />
        </>
    )
}
