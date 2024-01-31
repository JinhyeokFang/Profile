import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/tomate/to.mate.png'
import significanceImage1 from '../../../public/screenshots/tomate/1.png'
import significanceImage2 from '../../../public/screenshots/tomate/2.png'

import { ProjectPageHeader } from '../project/header'
import { ProjectPageInfo } from '../project/info'
import { ProjectPageFunctions } from '../project/functions'
import { ProjectPageSignificances } from '../project/significances'

export const ToMateSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='To.Mate' dateStart='2024.01'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description=''
                  tags={[
                  ]}
                >
                  Github: <a href="https://github.com/5th-UMC-N-team/ESFJ-backend">https://github.com/5th-UMC-N-team/ESFJ-backend</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: 'JPA와 JPQL 활용',
                    description: '한 달 단위로 데이터를 불러올 때 JPQL과 서브쿼리 활용',
                  },
                  {
                    src: significanceImage2,
                    title: '어노테이션으로 횡단관심사 분리',
                    description: '@AuthUser'
                  }
                ]}/>
              </article>
            </div>
        </>
    )
}
