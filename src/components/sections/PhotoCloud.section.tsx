import styles from '../../styles/sections.module.css'

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
                  description='휴대폰 사진을 관리하는 클라우드 서버 + 안드로이드 앱'
                  tags={[
                    'Express', 'MongoDB', 'Android', 'Kotlin'
                  ]}
                >
                  Github(Server): <a href="https://github.com/JinhyeokFang/PhotoCloudServer">https://github.com/JinhyeokFang/PhotoCloudServer</a>
                  <br/>
                  Github(Android): <a href="https://github.com/JinhyeokFang/PhotoCloudAndroid">https://github.com/JinhyeokFang/PhotoCloudAndroid</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '클라우드와 사진 동기화',
                  '폰에서 사진 제거',
                  '클라우드에서 사진 불러오기'
                ]} />
                <ProjectPageLessons lesson='' />
              </article>
            </div>
        </>
    )
}
