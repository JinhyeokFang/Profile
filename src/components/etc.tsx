import styles from '../styles/etc.module.css'

export const ETC = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>ETC</h1>
                <ul>
                    <li className={styles.project}>
                        <div className={styles.content}>
                            <p>선린인터넷고등학교 소수전공 강사</p>
                            <p>2021년 웹게발프로젝트 과목</p>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
        </>
    )
}
