import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/eta/profile.png'
import significanceImage1 from '../../../public/screenshots/eta/1.png'
import significanceImage2 from '../../../public/screenshots/eta/2.png'
import significanceImage3 from '../../../public/screenshots/eta/3.png'

import { ProjectPageHeader } from '../project/header'
import { ProjectPageInfo } from '../project/info'
import { ProjectPageFunctions } from '../project/functions'
import { ProjectPageSignificances } from '../project/significances'
import { ProjectPageLessons } from '../project/lessons'
import { ProjectPageEtc } from '../project/etc'

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
                    description: 'QueryBuilder로 서브 쿼리가 들어간 복잡한 쿼리문을 작성했습니다. 테이블 반정규화가 어려운 상태에서 3개의 테이블에 나뉘어 저장된 컬럼들을 불러오기 위해 다중 Join문을 작성했습니다.',
                  },
                  {
                    src: significanceImage2,
                    title: '2. Passport로 인증 횡단 관심사 분리',
                    description: 'JWT 토큰의 유효성을 검증하고 유저 객체를 불러오는 로직을 Passport와 Nest.js의 데코레이터로 분리했습니다. 데코레이터로 횡단 관심사를 분리함으로써 반복되는 코드를 줄일 수 있었습니다.'
                  },
                  {
                    src: significanceImage3,
                    title: '3. 공통 응답 포맷 및 오류 코드',
                    description: '항상 똑같은 JSON 포맷으로 응답함으로써 클라이언트와의 협업에 도움이 되도록 했습니다. HTTP Status Code 외에도 더 상세한 정보를 클라이언트에 전달하기 위해 오류 코드를 만들었습니다.',
                  }
                ]}/>
                <ProjectPageEtc>
                </ProjectPageEtc>
              </article>
            </div>
        </>
    )
}
