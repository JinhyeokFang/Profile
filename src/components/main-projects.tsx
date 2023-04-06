import { useRouter } from 'next/router';
import styles from '../styles/main-projects.module.css'

export const MainProjects = () => {
  const router = useRouter();

  const moveTo = (location: string) => () => {
    router.push(location);
  }

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Main Projects</h1>
                <ul>
                    <li className={styles.project} onClick={moveTo('/projects/Newsfeed')}>
                        <h2 className={styles.name}>Newsfeed</h2>
                        <div className={styles.content}>
                            <p>Express & Inversify 기반 자체 프레임워크로 웹 서버 구현</p>
                            <a href="https://github.com/JinhyeokFang/newsfeed">https://github.com/JinhyeokFang/newsfeed</a>
                            <p>
                              <span className={styles.tag}>Express</span>
                              <span className={styles.tag}>Inversify</span>
                              <span className={styles.tag}>Jest</span>
                              <span className={styles.tag}>MySQL</span>
                            </p>
                        </div>
                    </li>
                    <li className={styles.project} onClick={moveTo('/projects/take-me-home')}>
                        <h2 className={styles.name}>Take-Me-Home</h2>
                        <div className={styles.content}>
                            <p>TDD로 DDD를 점진적으로 적용한 Nest.js API 서버</p>
                            <a href="https://github.com/JinhyeokFang/take-me-home">https://github.com/JinhyeokFang/take-me-home</a>
                            <p>
                              <span className={styles.tag}>NestJS</span>
                              <span className={styles.tag}>Jest</span>
                              <span className={styles.tag}>TypeORM</span>
                              <span className={styles.tag}>MySQL</span>
                            </p>
                        </div>
                    </li>
                    <li className={styles.project} onClick={moveTo('/projects/Cafe4Me')}>
                        <h2 className={styles.name}>Cafe4Me</h2>
                        <div className={styles.content}>
                            <p>AWS ECS로 자동배포되는 Nest.js + Next.js기반 카페 추천 웹서비스</p>
                            <a href="https://github.com/JinhyeokFang/Cafe4Me">https://github.com/JinhyeokFang/Cafe4Me</a>
                            <p>
                              <span className={styles.tag}>NestJS</span>
                              <span className={styles.tag}>MongoDB</span>
                              <span className={styles.tag}>AWS ECS</span>
                              <span className={styles.tag}>NextJS</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
        </>
    )
}
