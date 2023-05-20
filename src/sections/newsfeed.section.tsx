import Image from 'next/image'
import styles from '../styles/sections.module.css'
import profileImage from '../../public/screenshots/cafe4me/profile.png'
import significanceImage1 from '../../public/screenshots/newsfeed/1.png'
import significanceImage2 from '../../public/screenshots/newsfeed/2.png'
import significanceImage3 from '../../public/screenshots/newsfeed/3.png'

export const NewsfeedSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <header className={styles.header}>
                <div className={styles.imageSection}>
                    <Image className={styles.image} src={profileImage} alt="" width="500" height={500 / 16 * 9} />
                </div>
                <div className={styles.infoSection}>
                    <div>
                        <h1 className={styles.name}>Newsfeed</h1>
                        <p className={styles.description}>Express & Inversify 기반 자체 프레임워크로 서버 구현</p>
                        <p className={styles.link}>
                          Github: <a href="https://github.com/JinhyeokFang/newsfeed_with_custom_framework">https://github.com/JinhyeokFang/newsfeed_with_custom_framework</a>
                        </p>
                    </div>
                    <hr className='lighter' />
                    <div>
                      <p>
                        <span className={styles.tag}>Express</span>
                        <span className={styles.tag}>Inversify</span>
                        <span className={styles.tag}>Jest</span>
                        <span className={styles.tag}>MySQL</span>
                      </p>
                    </div>
                </div>
              </header>
              <article className={styles.article}>
                <div>
                    <h2 className={styles.subtitle}>주요 기능</h2>
                    <p className={styles.description}>Shelter 모두 불러오기</p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>프로젝트 의의</h2>
                    <ol className={styles.significanceList}>
                      <li className={styles.significance}>
                        <h3 className={styles.description}>1. Nest.js와 ORM 없이 Dependency Injection을 기원하는 서버 프레임워크를 구현</h3>
                        <div>
                          <Image className={styles.image} src={significanceImage1} alt="" width="600" height="400" />
                          <p>
                            &nbsp;
                          </p>
                        </div>
                      </li>
                      <li className={styles.significance}>
                        <h3 className={styles.description}>2. 데코레이터와 메타데이터로 횡단관심사 분리</h3>
                        <div>
                          <p>
                            &nbsp;
                          </p>
                          <Image className={styles.image} src={significanceImage2} alt="" width="600" height="400" />
                        </div>
                      </li>
                      <li className={styles.significance}>
                        <h3 className={styles.description}>3. 자체 프레임워크로 Domain Driven Development 구현</h3>
                        <div>
                          <Image className={styles.image} src={significanceImage3} alt="" width="600" height="400" />
                          <p>
                            &nbsp;
                          </p>
                        </div>
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
                    <p className={styles.description}>더 많은 경우의 수를 커버하는 테스트 케이스</p>
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
