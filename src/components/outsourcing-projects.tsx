import styles from '../styles/outsourcing-projects.module.css'

export const OutsourcingProjects = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1>Outsourcing Projects</h1>
                <ul>
                    <li>
                        <div>
                            Cafe4Me
                        </div>
                        <div>
                            <p>AWS ECS로 자동배포되는 카페 추천 웹서비스</p>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
        </>
    )
}
