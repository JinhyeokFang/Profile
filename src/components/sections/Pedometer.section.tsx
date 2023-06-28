import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/pedometer/pedometer.png'
import significanceImage1 from '../../../public/screenshots/pedometer/1.png'

import { ProjectPageHeader } from '../project-page-header'
import { ProjectPageInfo } from '../project-page-info'
import { ProjectPageFunctions } from '../project-page-functions'
import { ProjectPageSignificances } from '../project-page-significances'
import { ProjectPageNeeds } from '../project-page-needs'

export const PedometerSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='Pedometer' dateStart='2022.09' dateEnd='2022.09'/>
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
                  '',
                  '',
                  '',
                  '',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: 'Serverless 프레임워크로 Nest.js 서버 배포',
                    description: '조회수를 데이터베이스로부터 불러오고 추가하는 Nest.js 서버를 Serverless 프레임워크를 활용해 AWS Lambda로 배포했습니다.',
                  },
                ]}/>
                <ProjectPageNeeds needs={[
                  '',
                  '',
                  '',
                  '', 
                ]} />
              </article>
            </div>
            <hr />
        </>
    )
}
