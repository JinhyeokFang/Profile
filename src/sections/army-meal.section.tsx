import Image from 'next/image'
import styles from '../styles/sections.module.css'
import profileImage from '../../public/screenshots/cafe4me/profile.png'
import significanceImage1 from '../../public/screenshots/newsfeed/1.png'
import significanceImage2 from '../../public/screenshots/newsfeed/2.png'
import significanceImage3 from '../../public/screenshots/newsfeed/3.png'

import { ProjectPageHeader } from '../components/project-page-header'
import { ProjectPageInfo } from '../components/project-page-info'
import { ProjectPageFunctions } from '../components/project-page-functions'
import { ProjectPageSignificances } from '../components/project-page-significances'
import { ProjectPageLessons } from '../components/project-page-lessons'
import { ProjectPageNeeds } from '../components/project-page-needs'
import { ProjectPageEtc } from '../components/project-page-etc'

export const ArmyMealSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <header className={styles.header}>
                <div className={styles.imageSection}>
                    <Image className={styles.image} src={profileImage} alt="" width="500" height={500 / 16 * 9} />
                </div>
                <div className={styles.infoSection}>
                    <div>
                        <h1 className={styles.name}>army-meal</h1>
                        <p className={styles.description}>국방부 군대 급식 API 모듈</p>
                        <p className={styles.link}>
                          Github: <a href="https://github.com/JinhyeokFang/army-meal">https://github.com/JinhyeokFang/army-meal</a>
                        </p>
                    </div>
                </div>
              </header>
              <article className={styles.article}>
                <div className={styles.functions}>
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
