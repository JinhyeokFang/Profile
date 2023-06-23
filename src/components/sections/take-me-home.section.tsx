import Image from 'next/image'
import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/cafe4me/profile.png'
import significanceImage1 from '../../../public/screenshots/take-me-home/1.png'
import significanceImage2 from '../../../public/screenshots/take-me-home/2.png'
import significanceImage3 from '../../../public/screenshots/take-me-home/3.png'
import significanceImage4 from '../../../public/screenshots/take-me-home/4.png'

import { ProjectPageHeader } from '../project-page-header'
import { ProjectPageInfo } from '../project-page-info'
import { ProjectPageFunctions } from '../project-page-functions'
import { ProjectPageSignificances } from '../project-page-significances'
import { ProjectPageLessons } from '../project-page-lessons'
import { ProjectPageNeeds } from '../project-page-needs'
import { ProjectPageEtc } from '../project-page-etc'

export const TakeMeHomeSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={significanceImage4} title='take-me-home'/>
              <br />
              <article className={styles.article}>
                <ProjectPageInfo 
                  description='TDD로 DDD를 점진적으로 적용한 Nest.js 기반 API 서버'
                  tags={[
                    'NestJS', 'Jest', 'TypeORM', 'MySQL'
                  ]}
                >
                  사이트: <a href="https://server2.jinhy.uk">https://server2.jinhy.uk</a><br/>
                  Github: <a href="https://github.com/JinhyeokFang/take-me-home">https://github.com/JinhyeokFang/take-me-home</a><br/>
                  Postman: 준비중
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '보호소 정보를 모두 불러오는 기능',
                  '보호소에서 반려동물 전체 확인',
                  '사용자가 입양한 모든 반려동물을 확인',
                  '보호소로 들어온 입양 신청 내역을 확인',
                  '보호소가 반려동물 정보를 입력해 반려동물을 등록',
                  '반려동물ID를 입력받아 보호소에서 반려동물을 삭제',
                  '사용자가 보호소와 반려동물을 입력, 입양을 신청',
                  '입양 신청 내역 ID를 입력, 승인또는 거절',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '1. TDD를 처음으로 웹 서버개발에 적용 + Jest와 Supertest로 자동화된 테스트를 구현',
                    description: '테스트 케이스를 먼저 작성하고 작동하는 코드를 만드는 TDD를 최초로 적용한 프로젝트입니다. TDD를 위해서 단위 테스트에는 Jest, e2e 테스트에는 supertest를 사용했습니다. 단위 테스트를 성공할 경우에만 깃 커밋을 남길 수 있도록 husky를 사용했습니다.',
                  },
                  {
                    src: significanceImage2,
                    title: '2. 테스트와 리팩토링을 활용, DDD를 기반으로 아키텍처를 점진적으로 설계',
                    description: '프로젝트 초반부터 아키텍처 전체를 설계하지 않고 테스트와 리팩토링을 활용하여 점진적으로 설계를 발전시켰습니다. 서비스의 비즈니스 로직부터 먼저 구현하고 세부 구현 기능은 DIP로 남겨두었습니다. 비즈니스 로직의 동작을 검증하기 위해 테스트 프레임워크를 사용했습니다.'
                  },
                  {
                    src: significanceImage3,
                    title: '3. TypeOrm으로 데이터베이스와 연동, 마이그레이션까지 추가',
                    description: 'TypeOrm으로 MySQL과 서버를 연결하였습니다. TypeORM Cli 기능으로 npm script에 마이그레이션을 추가했습니다.',
                  },
                  {
                    src: significanceImage4,
                    title: '4. Event로 비즈니스 로직의 결합도를 낮춤',
                    description: 'Event로 입양 요청 내역 모듈과 보호소 모듈의 결합도를 낮추었습니다. 입양 요청 내역 모듈에서 입양이 승인되면 adoption-request.accepted 이벤트를 전송합니다. 이벤트를 받은 보호소 모듈은 반려동물을 입양하는 로직을 호출합니다. NestJS의 EventEmitter2 모듈을 사용했습니다. ',
                  },
                ]}/>
                <ProjectPageLessons lesson='' />
                <br />
                <ProjectPageNeeds needs={[
                  '더 많은 경우의 수를 커버하는 테스트 케이스',
                  '예외처리 미흡한 부분 개선',
                  'Transaction 지원',
                  'CD를 적용하여 자동 무중단 배포 지원', 
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
