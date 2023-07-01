import styles from '../../styles/sections.module.css'

import { ProjectPageHeader } from '../project-page-header'
import { ProjectPageInfo } from '../project-page-info'
import { ProjectPageFunctions } from '../project-page-functions'
import { ProjectPageLessons } from '../project-page-lessons'

export const SumsumzipSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader title='숨숨집 (개발중)' dateStart='2023.07'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description=''
                  tags={[
                    'Nest.js', 'GraphQL', 'MySQL', 'TypeOrm'
                  ]}
                >
                  Github: <a href="https://github.com/JinhyeokFang/sumsumzip">https://github.com/JinhyeokFang/sumsumzip</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '고양이 사진 최신순으로 불러오기',
                  '특정 유저 고양이 사진 불러오기',
                  '고양이 사진을 업로드 / 삭제',
                ]} />
                <ProjectPageLessons lesson='' />
              </article>
            </div>
        </>
    )
}
