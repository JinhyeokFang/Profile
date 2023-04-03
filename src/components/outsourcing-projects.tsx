import styles from '../styles/outsourcing-projects.module.css'

export const OutsourcingProjects = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1>Outsourcing Projects</h1>
                <ul>
                    <li className={styles.project}>
                        <h2 className={styles.name}>-</h2>
                        <div className={styles.content}>
                            <p>Express, Typescript 기반 앱 서비스 API 서버 구현</p>
                        </div>
                    </li>
                    <li className={styles.project}>
                        <h2 className={styles.name}>-</h2>
                        <div className={styles.content}>
                            <p>Express 서버 및 Vue 기반 관리자용 웹 콘솔(클라이언트) 구현</p>
                        </div>
                    </li>
                    <li className={styles.project}>
                        <h2 className={styles.name}>-</h2>
                        <div className={styles.content}>
                            <p>Express, Vue 기반 웹 어플리케이션</p>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
        </>
    )
}
