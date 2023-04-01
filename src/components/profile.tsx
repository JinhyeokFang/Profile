import styles from '../styles/profile.module.css'

export const Profile = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.imageSection}>
                    <img className={styles.image} src="./profile.jpg" alt="" />
                </div>
                <div className={styles.infoSection}>
                    <h1>이름</h1>
                    <h2>표어표어표어표어</h2>
                    <hr />
                    <p>깃허브 링크: <a>https://github.com/JinhyeokBang</a></p>
                    <p>이메일: hyeki0206@naver.com</p>
                    <p>이메일: jinhyeokfang@gmail.com</p>
                    <hr />
                    <h3>경기대 컴공 (21.03 ~ )</h3>
                    <h3>선린인고  (18.03 ~ 21.02)</h3>
                    <hr />
                    <h3>병역: </h3>
                </div>
            </div>
            <hr />
        </>
    )
}
