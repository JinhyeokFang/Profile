import styles from '../styles/side-projects.module.css'

export const SideProjects = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1>Side Projects</h1>
                <ul>
                    <li className={styles.project}>
                        <h2 className={styles.name}>army-meal</h2>
                        <div className={styles.content}>
                            <p> </p>
                            <a href="https://github.com/JinhyeokFang/army-meal">https://github.com/JinhyeokFang/army-meal</a>
                        </div>
                    </li>
                    <li className={styles.project}>
                        <h2 className={styles.name}>Pedometer</h2>
                        <div className={styles.content}>
                            <a href="https://github.com/JinhyeokFang/pedometer-server">https://github.com/JinhyeokFang/pedometer-server</a><br />
                            <a href="https://github.com/JinhyeokFang/Pedometer">https://github.com/JinhyeokFang/Pedometer</a>
                        </div>
                    </li>
                    <li className={styles.project}>
                        <h2 className={styles.name}>URL Shortener</h2>
                        <div className={styles.content}>
                            <p> </p>
                            <a href="https://github.com/JinhyeokFang/JinhyeokFang">https://github.com/JinhyeokFang/JinhyeokFang</a>
                        </div>
                    </li>
                </ul>
            </div>
            <hr />
        </>
    )
}
