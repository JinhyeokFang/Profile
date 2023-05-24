import { useRouter } from 'next/router';
import styles from '../styles/side-projects.module.css'

export const SideProjects = () => {
  const router = useRouter();

  const moveTo = (location: string) => () => {
    router.push(location);
  }

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Side Projects</h1>
                <ul>
                    <li className={styles.project} onClick={moveTo('/projects/URL-Shortener')}>
                        <h2 className={styles.name}>Jinhy.uk</h2>
                        <div className={styles.content}>
                            <p>프로필 + URL 단축 서비스</p>
                            <p>
                              <span className={styles.tag}>NextJS</span>
                              <span className={styles.tag}>AWS DynamoDB</span>
                            </p>
                        </div>
                    </li>
                    <li className={styles.project} onClick={moveTo('/projects/army-meal')}>
                        <h2 className={styles.name}>army-meal</h2>
                        <div className={styles.content}>
                            <p>국방부 군대 급식 API 모듈</p>
                        </div>
                    </li>
                    <li className={styles.project} onClick={moveTo('/projects/Pedometer')}>
                        <h2 className={styles.name}>Pedometer</h2>
                        <div className={styles.content}>
                            <p>사이트 방문 횟수, 시간 통계 웹 서비스</p>
                            <p>
                              <span className={styles.tag}>NestJS</span>
                              <span className={styles.tag}>Serverless</span>
                              <span className={styles.tag}>MongoDB</span>
                              <span className={styles.tag}>Vue</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
        </>
    )
}
