import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/cafe4me/profile.png'

import { ProjectPageHeader } from '../project-page-header'
import { ProjectPageInfo } from '../project-page-info'
import { ProjectPageFunctions } from '../project-page-functions'
import { ProjectPageLessons } from '../project-page-lessons'

export const PhotoCloudSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader title='Photo Cloud' dateStart='2019.09' dateEnd='2019.10'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description=''
                  tags={[
                  ]}
                >
                  Github: <a href="https://github.com/JinhyeokFang/PhotoCloudServer">https://github.com/JinhyeokFang/PhotoCloudServer</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                ]} />
                <ProjectPageLessons lesson='' />
              </article>
            </div>
        </>
    )
}
