import Image from 'next/image'
import styles from '../styles/sections.module.css'
import profileImage from '../../public/screenshots/cafe4me/profile.png'
import significanceImage1 from '../../public/screenshots/newsfeed/1.png'
import significanceImage2 from '../../public/screenshots/newsfeed/2.png'
import significanceImage3 from '../../public/screenshots/newsfeed/3.png'

import { ProjectPageHeader } from '../components/project-page-header'
import { ProjectPageInfo } from '../components/project-page-info'
import { ProjectPageFunctions } from '../components/project-page-functions'
import { ProjectPageSignificances } from '../components/project-page-significances'
import { ProjectPageLessons } from '../components/project-page-lessons'
import { ProjectPageNeeds } from '../components/project-page-needs'
import { ProjectPageEtc } from '../components/project-page-etc'

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
                  '',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '1. ',
                    description: '',
                  },
                  {
                    src: significanceImage2,
                    title: '2. ',
                    description: ''
                  },
                  {
                    src: significanceImage3,
                    title: '3. ',
                    description: '',
                  },
                ]}/>
                <ProjectPageLessons lesson='' />
                <br />
                <ProjectPageNeeds needs={[
                  '',
                  '',
                  '',
                  '', 
                ]} />
                <br />
                <ProjectPageEtc>
                </ProjectPageEtc>
              </article>
            </div>
            <hr />
        </>
    )
}
