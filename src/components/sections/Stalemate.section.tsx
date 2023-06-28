import styles from '../../styles/sections.module.css'

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
                    'Socket.io', 'MongoDB'
                  ]}
                >
                  Github: <a href="https://github.com/JinhyeokFang/horse-chess-server">https://github.com/JinhyeokFang/horse-chess-server</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '유저 두 명을 온라인 매칭',
                  '온라인 게임 진행',
                  '친구 요청 / 승락',
                  '게임이 종료된 방 자동 제거'                  
                ]} />
                <ProjectPageLessons lesson='' />
              </article>
            </div>
        </>
    )
}
