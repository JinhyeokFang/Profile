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
                        <p className={styles.description}>Express & Inversify 기반 자체 프레임워크로 서버 구현 (개발중)</p>
                        <p className={styles.link}>
                          Github: <a href="https://github.com/JinhyeokFang/newsfeed">https://github.com/JinhyeokFang/newsfeed</a>
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
                <div className={styles.functions}>
                    <h2 className={styles.subtitle}>주요 기능</h2>
                    <p className={styles.description}>계정 생성 / 탈퇴하기</p>
                    <p className={styles.description}>팔로우 / 언팔로우</p>
                    <p className={styles.description}>팔로우 된 계정 확인</p>
                    <p className={styles.description}>글 추가 / 삭제하기</p>
                    <p className={styles.description}>입력한 계정 글 불러오기</p>
                    <p className={styles.description}>좋아요 누르기 / 취소하기</p>
                    <p className={styles.description}>댓글 작성하기 / 지우기</p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>프로젝트 의의</h2>
                    <ol className={styles.significanceList}>
                      <h3 className={styles.description}>1. Nest.js와 ORM 없이 Dependency Injection을 기원하는 서버 프레임워크를 구현</h3>
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
                          <h3 className={styles.description}>2. 데코레이터와 메타데이터로 횡단관심사 분리</h3>
                          <p>
                            &nbsp;
                          </p>
                        </div>
                      </li>
                      <li className={styles.significance}>
                        <div>
                          <h3 className={styles.description}>3. 자체 프레임워크로 Domain Driven Development 구현</h3>
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
                    <p className={styles.description}>CI & CD 구현</p>
                    <p className={styles.description}>프레임워크에 모듈 시스템 도입</p>
                    <p className={styles.description}>프레임워크, 비즈니스 로직 분리</p>
                    <p className={styles.description}>화면 구현</p>
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
