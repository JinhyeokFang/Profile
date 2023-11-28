import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/sumsumzip/1.png'

import { ProjectPageHeader } from '../project/header'
import { ProjectPageInfo } from '../project/info'
import { ProjectPageFunctions } from '../project/functions'
import { ProjectPageLessons } from '../project/lessons'
import { ProjectPageEtc } from '../project/etc'
import { ProjectPageNeeds } from '../project/needs'
import { ProjectPageSignificances } from '../project/significances'

export const SumsumzipSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='숨숨집 (개발중)' dateStart='2023.08'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description=''
                  tags={[
                    'Springboot 3', 'Java', 'MySQL', 'Spring Security'
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
                <ProjectPageSignificances significances={[
                ]}/>
                <ProjectPageLessons lesson='개발중'/>
                <br />
                <ProjectPageNeeds needs={[
                  '개발중'
                ]} />
                <br />
                <ProjectPageEtc>
                  개발중
                </ProjectPageEtc>
              </article>
            </div>
        </>
    )
}
