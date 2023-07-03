import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/newsfeed/newsfeed.png'
import significanceImage1 from '../../../public/screenshots/newsfeed/1.png'
import significanceImage2 from '../../../public/screenshots/newsfeed/2.png'
import significanceImage3 from '../../../public/screenshots/newsfeed/3.png'

import { ProjectPageHeader } from '../project-page-header'
import { ProjectPageInfo } from '../project-page-info'
import { ProjectPageFunctions } from '../project-page-functions'
import { ProjectPageSignificances } from '../project-page-significances'
import { ProjectPageLessons } from '../project-page-lessons'
import { ProjectPageNeeds } from '../project-page-needs'
import { ProjectPageEtc } from '../project-page-etc'

export const NewsfeedSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='Newsfeed' dateStart='2023.02'/>
              <br />
              <article className={styles.article}>
                <ProjectPageInfo 
                  description='Express & Inversify 기반 자체 프레임워크로 서버 구현'
                  tags={[
                    'Express', 'Inversify', 'Jest', 'MySQL'
                  ]}
                >
                  Github: <a href="https://github.com/JinhyeokFang/newsfeed">https://github.com/JinhyeokFang/newsfeed</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '계정 생성 / 탈퇴하기',
                  '팔로우 / 언팔로우',
                  '팔로우 된 계정 확인',
                  '글 추가 / 삭제하기',
                  '입력한 계정 글 불러오기',
                  '좋아요 누르기 / 취소하기',
                  '댓글 작성하기 / 지우기',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '1. Nest.js와 ORM 없이 Dependency Injection을 지원하는 서버 프레임워크를 구현',
                    description: 'IoC 컨테이너 Inversify로 Nest.js 없이도 DI를 지원하는 서버를 구현했습니다. 데이터베이스를 사용하는 부분에는 DI를 적용하여 비즈니스 로직과 데이터베이스의 결합도를 낮추었습니다.',
                  },
                  {
                    src: significanceImage2,
                    title: '2. 데코레이터와 메타데이터로 횡단관심사 분리',
                    description: 'TypeScript의 데코레이터와 Reflect-metadata로 반복되는 부분을 횡단으로 분리했습니다. 요청 body를 validate하는 코드, 라우터에 handler를 등록하는 코드를 데코레이터로 만들었습니다.'
                  },
                  {
                    src: significanceImage3,
                    title: '3. 자체 프레임워크로 Domain Driven Development 구현',
                    description: 'DIP(의존성 역전 법칙)을 구현하기 위해 의존성 주입 컨테이너 inversify를 자체 프레임워크에 도입했습니다.',
                  },
                ]}/>
                <ProjectPageLessons lesson='횡단 관심사를 분리하는 코드를 프레임워크를 사용하지 않고 직접 작성하였습니다. DIP로 의존성을 관리하기 위해 의존성 주입과 IoC를 적용했습니다. ORM 없이 직접 SQL Query문을 작성하고 실행했습니다.' />
                <br />
                <ProjectPageNeeds needs={[
                  'CI & CD 구현',
                  '프레임워크에 모듈 시스템 도입',
                  '프레임워크, 비즈니스 로직 결합도 낮추기',
                  '클라이언트 구현', 
                ]} />
                <br />
                <ProjectPageEtc>
                  기존에 사용하던 서버 레포지토리 주소: &nbsp;
                  <a href="https://github.com/JinhyeokFang/cafe-for-me-server">https://github.com/JinhyeokFang/cafe-for-me-server</a>
                  <br />
                  기존에 사용하던 클라이언트 레포지토리 주소: &nbsp;
                  <a href="https://github.com/JinhyeokFang/cafe-for-me-client">https://github.com/JinhyeokFang/cafe-for-me-client</a>
                </ProjectPageEtc>
              </article>
            </div>
            <hr />
        </>
    )
}
