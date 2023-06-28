import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/cafe4me/profile.png'

import { ProjectPageHeader } from '../project-page-header'
import { ProjectPageInfo } from '../project-page-info'
import { ProjectPageFunctions } from '../project-page-functions'
import { ProjectPageLessons } from '../project-page-lessons'

export const StalemateSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader title='스테일메이트' dateStart='2020.04' dateEnd='2020.07'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description=''
                  tags={[
                  ]}
                >
                  Github: <a href="https://github.com/JinhyeokFang/horse-chess-server">https://github.com/JinhyeokFang/horse-chess-server</a>
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
