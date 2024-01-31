import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/tomate/to.mate.png'
import significanceImage1 from '../../../public/screenshots/tomate/1.png'
import significanceImage2 from '../../../public/screenshots/tomate/2.png'

import { ProjectPageHeader } from '../project/header'
import { ProjectPageInfo } from '../project/info'
import { ProjectPageFunctions } from '../project/functions'
import { ProjectPageSignificances } from '../project/significances'

export const ToMateSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='To.Mate' dateStart='2024.01'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description=''
                  tags={[
                  ]}
                >
                  Github: <a href="https://github.com/5th-UMC-N-team/ESFJ-backend">https://github.com/5th-UMC-N-team/ESFJ-backend</a>
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
                  }
                ]}/>
              </article>
            </div>
        </>
    )
}
