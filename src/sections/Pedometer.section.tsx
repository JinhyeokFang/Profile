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

export const PedometerSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={significanceImage1} title='Pedometer'/>
              <article className={styles.article}>
                <ProjectPageInfo 
                  description='사이트 방문 횟수, 시간 통계 웹 서비스'
                  tags={[
                    'NestJS', 'Serverless', 'MongoDB', 'Vue'
                  ]}
                >
                 Github (Server): <a href="https://github.com/JinhyeokFang/pedometer-server">https://github.com/JinhyeokFang/pedometer-server</a>
                 <br/>
                 Github (Client): <a href="https://github.com/JinhyeokFang/pedometer-server">https://github.com/JinhyeokFang/pedometer-server</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '지도에서 현재 위치를 중심으로 카페를 검색',
                  '카페 정보를 추가',
                  '카페의 리뷰를 추가하거나 삭제',
                  '주소, 이름으로 카페 검색',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '1. AWS로 웹서비스를 처음으로 배포',
                    description: 'Cafe4Me는 AWS ECS로 배포한 첫 프로젝트입니다. API를 제공하는 Nest.js 서버와 화면을 담당하는 Next.js를 한 컨테이너로 묶어 ECS Fargate로 서비스를 배포했습니다. AWS로 서비스를 배포하면서 AWS의 IAM, VPC, ECR, ECS를 학습하고 실제 활용까지 하였습니다. 비용 절감을 위해 ECS Fargate와 Public Subnet만 사용해 배포했는데, 이로 인해 로드 밸런싱과 도메인 네임 설정이 되지 않는 점이 아쉬웠습니다.',
                  },
                  {
                    src: significanceImage2,
                    title: '2. Github Actions로 자동 배포',
                    description: 'Git의 Main 브렌치로 Commit-Push하면 Github Action이 자동으로 서비스를 컨테이너화하고 배포합니다. Github Action에서 Docker로 Nest.js와 Next.js를 하나로 컨테이너화하고, AWS ECR로 업로드합니다. 업로드 된 컨테이너는 ECS로 바로 배포됩니다. 배포 파이프라인을 만들면서 Continous Integration을 위해 필요한 테스트 자동화에 관심을 가지게 되어 다음 프로젝트인 Take Me Home에서 테스트 자동화와 TDD를 학습하고 활용하는 계기가 되었습니다.'
                  },
                  {
                    src: significanceImage3,
                    title: '3. Docker로 클라이언트와 서버를 하나의 컨테이너로 묶어 배포',
                    description: '백엔드 서버 Nest.js와 HTML/CSS/JS로 빌드된 Next.js를 하나의 컨테이너로 Dockerizing했습니다.',
                  },
                ]}/>
                <ProjectPageLessons lesson='처음으로 Nest.js와 AWS를 활용해 웹서비스를 제작하고 배포한 프로젝트였습니다. API 개발부터 코드 자동 배포까지 서비스를 처음부터 끝까지 개발해볼 수 있는 좋은 경험이었습니다.' />
                <br />
                <ProjectPageNeeds needs={[
                  '테스트 코드 추가',
                  'AWS 기반 로드벨런싱 추가',
                  '클라이언트 SSR로 전환',
                  '카페 데이터 추가', 
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
