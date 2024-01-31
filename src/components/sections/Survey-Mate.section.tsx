import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/survey-mate/survey-mate.png'
import significanceImage1 from '../../../public/screenshots/survey-mate/survey-mate.png'
import significanceImage2 from '../../../public/screenshots/survey-mate/2.png'
import significanceImage3 from '../../../public/screenshots/survey-mate/3.png'

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
                  Github: <a href="https://github.com/survey-mate/backend">https://github.com/survey-mate/backend</a>
                  Server: <a href="https://survey-mate-api.jinhy.uk/swagger-ui/index.html">https://survey-mate-api.jinhy.uk/swagger-ui/index.html</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '',
                    description: '',
                  },
                  {
                    src: significanceImage2,
                    title: '',
                    description: ''
                  },
                  {
                    src: significanceImage3,
                    title: '',
                    description: '',
                  }
                ]}/>
              </article>
            </div>
        </>
    )
}
