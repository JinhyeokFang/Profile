import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/pedometer/pedometer.png'
import significanceImage1 from '../../../public/screenshots/pedometer/1.png'

import { ProjectPageHeader } from '../project-page-header'
import { ProjectPageInfo } from '../project-page-info'
import { ProjectPageFunctions } from '../project-page-functions'
import { ProjectPageSignificances } from '../project-page-significances'
import { ProjectPageNeeds } from '../project-page-needs'
import { ProjectPageLessons } from '../project-page-lessons'

export const PedometerSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='Pedometer' dateStart='2022.09' dateEnd='2022.09'/>
              <article className={styles.article}>
                <ProjectPageInfo 
                  description='Serverless & svg로 만든 사이트 방문 횟수, 통계 웹 서비스'
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
                  '조회수를 표시하는 SVG 이미지 생성',
                  '각 날짜 별 조회수 조회',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: 'Serverless 프레임워크로 Nest.js 서버 배포',
                    description: '조회수를 데이터베이스로부터 불러오고 추가하는 Nest.js 서버를 Serverless 프레임워크를 활용해 AWS Lambda로 배포했습니다.',
                  },
                ]}/>
                <ProjectPageLessons lesson='처음으로 Serverless Framework를 활용해본 프로젝트입니다. AWS 람다와는 다르게 복잡한 설정 없이 yml 파일 하나면 바로 배포가 가능한 점이 편리하고 인상깊었습니다. 조회수를 표시하는 이미지는 SVG에 조회수를 동적으로 집어넣어 생성했습니다.' />
              </article>
            </div>
            <hr />
        </>
    )
}
