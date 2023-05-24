import Image from 'next/image'
import styles from '../styles/sections.module.css'
import profileImage from '../../public/screenshots/cafe4me/profile.png'
import significanceImage1 from '../../public/screenshots/newsfeed/1.png'
import significanceImage2 from '../../public/screenshots/newsfeed/2.png'
import significanceImage3 from '../../public/screenshots/newsfeed/3.png'

export const PedometerSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <header className={styles.header}>
                <div className={styles.imageSection}>
                    <Image className={styles.image} src={profileImage} alt="" width="500" height={500 / 16 * 9} />
                </div>
                <div className={styles.infoSection}>
                    <div>
                        <h1 className={styles.name}>Pedometer</h1>
                        <p className={styles.description}>사이트 방문 횟수, 시간 통계 웹 서비스</p>
                        <p className={styles.link}>
                          Github (Server): <a href="https://github.com/JinhyeokFang/pedometer-server">https://github.com/JinhyeokFang/pedometer-server</a>
                          <br/>
                          Github (Client): <a href="https://github.com/JinhyeokFang/pedometer-server">https://github.com/JinhyeokFang/pedometer-server</a>
                        </p>
                    </div>
                    <hr className='lighter' />
                    <div>
                      <p>
                        <span className={styles.tag}>NestJS</span>
                        <span className={styles.tag}>Serverless</span>
                        <span className={styles.tag}>MongoDB</span>
                        <span className={styles.tag}>Vue</span>
                      </p>
                    </div>
                </div>
              </header>
              <article className={styles.article}>
                <div>
                    <h2 className={styles.subtitle}>주요 기능</h2>
                    <p className={styles.description}>-</p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>프로젝트 의의</h2>
                    <ol className={styles.significanceList}>
                      <h3 className={styles.description}>1. -</h3>
                      <li className={styles.significance}>
                        <div>
                          <p>
                            &nbsp;
                          </p>
                        </div>
                        <Image className={styles.image} src={significanceImage1} alt=""/>
                      </li>
                      <li className={styles.significance}>
                        <Image className={styles.image} src={significanceImage2} alt=""/>
                        <div>
                          <h3 className={styles.description}>2. -</h3>
                          <p>
                            &nbsp;
                          </p>
                        </div>
                      </li>
                      <li className={styles.significance}>
                        <div>
                          <h3 className={styles.description}>3. -</h3>
                          <p>
                            &nbsp;
                          </p>
                        </div>
                        <Image className={styles.image} src={significanceImage3} alt=""/>
                      </li>
                    </ol>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>배운점 및 느낀점</h2>
                    <p className={styles.description}>
                      &nbsp;
                    </p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>개선이 필요한 점</h2>
                    <p className={styles.description}>-</p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>기타</h2>
                </div>
              </article>
            </div>
            <hr />
        </>
    )
}
