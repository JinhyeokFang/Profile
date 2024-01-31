import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/survey-mate/survey-mate.png'
import significanceImage1 from '../../../public/screenshots/survey-mate/2.png'
import significanceImage2 from '../../../public/screenshots/survey-mate/3.png'
import significanceImage3 from '../../../public/screenshots/survey-mate/survey-mate.png'

import { ProjectPageHeader } from '../project/header'
import { ProjectPageInfo } from '../project/info'
import { ProjectPageFunctions } from '../project/functions'
import { ProjectPageSignificances } from '../project/significances'

export const SurveyMateSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='썰매(Survey Mate)' dateStart='2024.01' dateEnd='2024.02'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description=''
                  tags={[
                  ]}
                >
                  Github: <a href="https://github.com/survey-mate/backend">https://github.com/survey-mate/backend</a><br/>
                  Server: <a href="https://survey-mate-api.jinhy.uk/swagger-ui/index.html">https://survey-mate-api.jinhy.uk/swagger-ui/index.html</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '코드 리뷰 진행',
                    description: '매 Pull Request 마다 코드 리뷰 진행, Branch Protection으로 리뷰되지 않은 코드는 Merge하지 못하도록 보호',
                  },
                  {
                    src: significanceImage2,
                    title: 'CI/CD 파이프라인 구축',
                    description: '베포 자동화 및 빌드 테스트, main 브랜치 코드 AWS의 CodeDeploy로 자동 배포'
                  },
                  {
                    src: significanceImage3,
                    title: 'Swagger 적용',
                    description: 'Swagger로 API 문서화, 프론트와 협업',
                  }
                ]}/>
              </article>
            </div>
        </>
    )
}
