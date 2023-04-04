import styles from '../styles/side-projects.module.css'

export const SideProjects = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Side Projects</h1>
                <ul>
                    <li className={styles.project}>
                        <h2 className={styles.name}>army-meal</h2>
                        <div className={styles.content}>
                            <p>국방부 군대 급식 API 모듈</p>
                            <a href="https://github.com/JinhyeokFang/army-meal">https://github.com/JinhyeokFang/army-meal</a>
                        </div>
                    </li>
                    <li className={styles.project}>
                        <h2 className={styles.name}>Pedometer</h2>
                        <div className={styles.content}>
                            <p>사이트 방문 횟수, 시간 통계 웹 서비스</p>
                            <a href="https://github.com/JinhyeokFang/pedometer-server">https://github.com/JinhyeokFang/pedometer-server</a><br />
                            <a href="https://github.com/JinhyeokFang/Pedometer">https://github.com/JinhyeokFang/Pedometer</a>
                        </div>
                    </li>
                    <li className={styles.project}>
                        <h2 className={styles.name}>URL Shortener</h2>
                        <div className={styles.content}>
                            <p>URL 단축 서비스</p>
                            <a href="https://github.com/JinhyeokFang/JinhyeokFang">https://github.com/JinhyeokFang/JinhyeokFang</a>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
        </>
    )
}
