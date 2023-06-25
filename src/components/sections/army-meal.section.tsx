import Image from 'next/image'
import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/cafe4me/profile.png'
import significanceImage1 from '../../../public/screenshots/newsfeed/1.png'
import significanceImage2 from '../../../public/screenshots/newsfeed/2.png'
import significanceImage3 from '../../../public/screenshots/newsfeed/3.png'

import { ProjectPageHeader } from '../project-page-header'
import { ProjectPageInfo } from '../project-page-info'
import { ProjectPageFunctions } from '../project-page-functions'
import { ProjectPageSignificances } from '../project-page-significances'
import { ProjectPageLessons } from '../project-page-lessons'
import { ProjectPageNeeds } from '../project-page-needs'
import { ProjectPageEtc } from '../project-page-etc'

export const ArmyMealSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={significanceImage1} title='army-meal'/>
              <article className={styles.article}>
                <ProjectPageInfo 
                  description='국방부 군대 급식 API 모듈'
                  tags={[]}
                >
                  Github: <a href="https://github.com/JinhyeokFang/army-meal">https://github.com/JinhyeokFang/army-meal</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '한 달 내 급식 정보 불러오기',
                  '하루 급식 정보 불러오기',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: 'npm으로 모듈 배포',
                    description: '국방부 군대 급식 API를 쉽게 사용하도록 도와주는 Node.js 모듈을 npm으로 배포하였습니다.',
                  },
                ]}/>
              </article>
            </div>
            <hr />
        </>
    )
}
