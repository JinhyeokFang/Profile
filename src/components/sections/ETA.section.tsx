import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/eta/profile.png'
import significanceImage1 from '../../../public/screenshots/eta/1.png'
import significanceImage2 from '../../../public/screenshots/eta/2.png'
import significanceImage3 from '../../../public/screenshots/eta/3.png'

import { ProjectPageHeader } from '../project-page-header'
import { ProjectPageInfo } from '../project-page-info'
import { ProjectPageFunctions } from '../project-page-functions'
import { ProjectPageSignificances } from '../project-page-significances'
import { ProjectPageLessons } from '../project-page-lessons'
import { ProjectPageEtc } from '../project-page-etc'

export const ETASection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='ETA' dateStart='2023.11'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description='NestJS 기반 회의 일정 관리 서비스 (5th 너디너리 해커톤 3등)'
                  tags={[
                    'NestJS', 'AWS EC2', 'AWS RDS', 'MySQL', 'TypeOrm'
                  ]}
                >
                  Github: <a href="https://github.com/5th-Neordinary-HACKATHON-MEETA/Backend">https://github.com/5th-Neordinary-HACKATHON-MEETA/Backend</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '회의 생성 및 일정 조율',
                  '팀 공지사항 생성 및 전달',
                  '최근 회의 확인하기',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '1. TypeOrm의 QueryBuilder로 복잡한 쿼리 작성',
                    description: '',
                  },
                  {
                    src: significanceImage2,
                    title: '2. Passport로 인증 횡단 관심사 분리',
                    description: ''
                  },
                  {
                    src: significanceImage3,
                    title: '3. 공통 응답 코드로 상세 정보 제공',
                    description: '',
                  }
                ]}/>
                <ProjectPageLessons lesson='' />
                <ProjectPageEtc>
                </ProjectPageEtc>
              </article>
            </div>
        </>
    )
}
