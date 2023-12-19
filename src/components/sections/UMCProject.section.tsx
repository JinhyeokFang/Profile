import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/eta/profile.png'
import significanceImage1 from '../../../public/screenshots/eta/1.png'
import significanceImage2 from '../../../public/screenshots/eta/2.png'
import significanceImage3 from '../../../public/screenshots/eta/3.png'

import { ProjectPageHeader } from '../project/header'
import { ProjectPageInfo } from '../project/info'
import { ProjectPageFunctions } from '../project/functions'
import { ProjectPageSignificances } from '../project/significances'

export const UMCProjectSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='UMCProject' dateStart='2024.01'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description=''
                  tags={[
                  ]}
                >
                  Github: <a href=""></a>
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
