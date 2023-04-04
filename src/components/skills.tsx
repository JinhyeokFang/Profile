import styles from '../styles/skills.module.css'

export const Skills = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Skills</h1>
                <h2>Languages (+ runtimes)</h2>
                <ul className={styles.skillList}>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                </ul>
                <hr className='lighter' />
                <h2>Frameworks</h2>
                <ul className={styles.skillList}>
                    <li>Express</li>
                    <li>Nest.js</li>
                    <li>Next.js</li>
                    <li>Jest</li>
                    <li>Vue</li>
                </ul>
                <hr className='lighter' />
                <h2>Environments</h2>
                <ul className={styles.skillList}>
                    <li>Git/Github</li>
                    <li>Github Actions</li>
                    <li>Nginx</li>
                    <li>Docker</li>
                    <li>AWS</li>
                </ul>
                <hr className='lighter' />
                <h2>Databases</h2>
                <ul className={styles.skillList}>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <hr />
        </>
    )
}
