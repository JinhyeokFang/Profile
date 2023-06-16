import Image from 'next/image'
import styles from '../styles/sections.module.css'
import profileImage from '../../public/screenshots/cafe4me/profile.png'
import significanceImage1 from '../../public/screenshots/take-me-home/1.png'
import significanceImage2 from '../../public/screenshots/take-me-home/2.png'
import significanceImage3 from '../../public/screenshots/take-me-home/3.png'
import significanceImage4 from '../../public/screenshots/take-me-home/4.png'

import { ProjectPageHeader } from '../components/project-page-header'
import { ProjectPageInfo } from '../components/project-page-info'
import { ProjectPageFunctions } from '../components/project-page-functions'
import { ProjectPageSignificances } from '../components/project-page-significances'
import { ProjectPageLessons } from '../components/project-page-lessons'
import { ProjectPageNeeds } from '../components/project-page-needs'
import { ProjectPageEtc } from '../components/project-page-etc'

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
                    description: 'Cafe4Me는 AWS ECS로 배포한 첫 프로젝트입니다. API를 제공하는 Nest.js 서버와 화면을 담당하는 Next.js를 한 컨테이너로 묶어 ECS Fargate로 서비스를 배포했습니다. AWS로 서비스를 배포하면서 AWS의 IAM, VPC, ECR, ECS를 학습하고 실제 활용까지 하였습니다. 비용 절감을 위해 ECS Fargate와 Public Subnet만 사용해 배포했는데, 이로 인해 로드 밸런싱과 도메인 네임 설정이 되지 않는 점이 아쉬웠습니다.',
                  },
                  {
                    src: significanceImage2,
                    title: '2. 테스트와 리팩토링을 활용, DDD를 점진적으로 도입',
                    description: 'Git의 Main 브렌치로 Commit-Push하면 Github Action이 자동으로 서비스를 컨테이너화하고 배포합니다. Github Action에서 Docker로 Nest.js와 Next.js를 하나로 컨테이너화하고, AWS ECR로 업로드합니다. 업로드 된 컨테이너는 ECS로 바로 배포됩니다. 배포 파이프라인을 만들면서 Continous Integration을 위해 필요한 테스트 자동화에 관심을 가지게 되어 다음 프로젝트인 Take Me Home에서 테스트 자동화와 TDD를 학습하고 활용하는 계기가 되었습니다.'
                  },
                  {
                    src: significanceImage3,
                    title: '3. TypeOrm으로 데이터베이스와 연동, 마이그레이션까지 추가',
                    description: '백엔드 서버 Nest.js와 HTML/CSS/JS로 빌드된 Next.js를 하나의 컨테이너로 Dockerizing했습니다.',
                  },
                  {
                    src: significanceImage4,
                    title: '4. Event로 비즈니스 로직의 결합도를 낮춤',
                    description: '백엔드 서버 Nest.js와 HTML/CSS/JS로 빌드된 Next.js를 하나의 컨테이너로 Dockerizing했습니다.',
                  },
                ]}/>
                <ProjectPageLessons lesson='처음으로 Nest.js와 AWS를 활용해 웹서비스를 제작하고 배포한 프로젝트였습니다. API 개발부터 코드 자동 배포까지 서비스를 처음부터 끝까지 개발해볼 수 있는 좋은 경험이었습니다.' />
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
