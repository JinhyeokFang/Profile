import Image from 'next/image'
import styles from '../../styles/projects/cafe4me-section.module.css'
import projectImage from '../../../public/cafe4me.png'

export const Cafe4MeSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <header className={styles.header}>
                <div className={styles.imageSection}>
                    <Image className={styles.image} src={projectImage} alt="" width="500" height="500" />
                </div>
                <div className={styles.infoSection}>
                    <div>
                        <h1 className={styles.name}>Cafe4Me</h1>
                        <p className={styles.description}>AWS ECS로 자동배포되는 Nest.js + Next.js기반 카페 추천 웹서비스</p>
                        <p className={styles.link}>
                          Github: <a href="https://github.com/JinhyeokFang/Cafe4Me">https://github.com/JinhyeokFang/Cafe4Me</a>
                        </p>
                    </div>
                    <hr className='lighter' />
                    <div>
                      <p>
                        <span className={styles.tag}>NestJS</span>
                        <span className={styles.tag}>MongoDB</span>
                        <span className={styles.tag}>AWS ECS</span>
                        <span className={styles.tag}>NextJS</span>
                      </p>
                    </div>
                </div>
              </header>
              <article className={styles.article}>
                <div>
                    <h2 className={styles.subtitle}>주요 기능</h2>
                    <p className={styles.description}>지도에서 위치로 카페 검색</p>
                    <p className={styles.description}>카페 추가</p>
                    <p className={styles.description}>리뷰 추가 / 삭제</p>
                    <p className={styles.description}>주소로 카페 검색</p>
                    <p className={styles.description}>이름으로 카페 검색</p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>프로젝트 의의</h2>
                    <ol className={styles.projectDescription}>
                      <ul>
                        <h3 className={styles.description}>1. AWS로 웹서비스를 처음으로 배포</h3>
                        <Image className={styles.image} src={projectImage} alt="" width="500" height="500" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo libero error quasi dolorem excepturi quo distinctio iusto quia, vero, sint accusamus explicabo veritatis itaque perspiciatis aliquam cupiditate. Itaque, deserunt.
                        </p>
                      </ul>
                      <ul>
                        <h3 className={styles.description}>2. Github Actions로 CD(Continuous Deployment) 사용</h3>
                        <Image className={styles.image} src={projectImage} alt="" width="500" height="500" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo libero error quasi dolorem excepturi quo distinctio iusto quia, vero, sint accusamus explicabo veritatis itaque perspiciatis aliquam cupiditate. Itaque, deserunt.
                        </p>
                      </ul>
                      <ul>
                        <h3 className={styles.description}>3. Docker로 클라이언트와 서버를 하나의 컨테이너로 묶어 배포</h3>
                        <Image className={styles.image} src={projectImage} alt="" width="500" height="500" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo libero error quasi dolorem excepturi quo distinctio iusto quia, vero, sint accusamus explicabo veritatis itaque perspiciatis aliquam cupiditate. Itaque, deserunt.
                        </p>
                      </ul>
                      <ul>
                        <h3 className={styles.description}>4. 첫 Next.js 클라이언트 개발</h3>
                        <Image className={styles.image} src={projectImage} alt="" width="500" height="500" />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo libero error quasi dolorem excepturi quo distinctio iusto quia, vero, sint accusamus explicabo veritatis itaque perspiciatis aliquam cupiditate. Itaque, deserunt.
                        </p>
                      </ul>
                    </ol>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>개선이 필요한 점</h2>
                    <p className={styles.description}>테스트 코드 추가</p>
                    <p className={styles.description}>AWS 기반 로드벨런싱 추가</p>
                    <p className={styles.description}>클라이언트 SSR로 전환</p>
                    <p className={styles.description}>카페 데이터 추가</p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>느낀점</h2>
                    <p className={styles.description}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo voluptates beatae, eaque dignissimos aliquam magni ducimus ut quo praesentium, eius similique sint quidem veritatis, blanditiis maiores! Vitae, nobis culpa.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo voluptates beatae, eaque dignissimos aliquam magni ducimus ut quo praesentium, eius similique sint quidem veritatis, blanditiis maiores! Vitae, nobis culpa.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo voluptates beatae, eaque dignissimos aliquam magni ducimus ut quo praesentium, eius similique sint quidem veritatis, blanditiis maiores! Vitae, nobis culpa.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo voluptates beatae, eaque dignissimos aliquam magni ducimus ut quo praesentium, eius similique sint quidem veritatis, blanditiis maiores! Vitae, nobis culpa.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo voluptates beatae, eaque dignissimos aliquam magni ducimus ut quo praesentium, eius similique sint quidem veritatis, blanditiis maiores! Vitae, nobis culpa.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo voluptates beatae, eaque dignissimos aliquam magni ducimus ut quo praesentium, eius similique sint quidem veritatis, blanditiis maiores! Vitae, nobis culpa.
                    </p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>기타</h2>
                    <p className={styles.description}>기존에 사용하던 서버 레포지토리 주소: https://github.com/JinhyeokFang/cafe-for-me-server</p>
                    <p className={styles.description}>기존에 사용하던 클라이언트 레포지토리 주소: https://github.com/JinhyeokFang/cafe-for-me-client</p>
                </div>
              </article>
            </div>
            <hr />
        </>
    )
}
