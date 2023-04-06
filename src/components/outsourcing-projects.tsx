import { useRouter } from 'next/router';
import styles from '../styles/outsourcing-projects.module.css'

export const OutsourcingProjects = () => {
  const router = useRouter();

  const moveTo = (location: string) => () => {
    router.push(location);
  }

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Outsourcing Projects</h1>
                <ul>
                    <li className={styles.project} onClick={moveTo('/projects/outsourcing1')}>
                        <div className={styles.content}>
                            <p>Express, Typescript 기반 앱 서비스 API 서버 구현</p>
                            <p>
                              <span className={styles.tag}>Express</span>
                              <span className={styles.tag}>MongoDB</span>
                            </p>
                        </div>
                    </li>
                    <li className={styles.project} onClick={moveTo('/projects/outsourcing2')}>
                        <div className={styles.content}>
                            <p>Express API 서버 및 Vue 기반 관리자용 웹 콘솔(클라이언트) 구현</p>
                            <p>
                              <span className={styles.tag}>Express</span>
                              <span className={styles.tag}>MongoDB</span>
                              <span className={styles.tag}>Vue</span>
                            </p>
                        </div>
                    </li>
                    <li className={styles.project} onClick={moveTo('/projects/outsourcing3')}>
                        <div className={styles.content}>
                            <p>Express, Vue 기반 레시피 공유 웹 어플리케이션</p>
                            <p>
                              <span className={styles.tag}>Express</span>
                              <span className={styles.tag}>Sequelize</span>
                              <span className={styles.tag}>MySQL</span>
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
