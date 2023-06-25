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

export const URLShortenerSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={significanceImage1} title='Jinhy.uk'/>
              <article className={styles.article}>
                <ProjectPageInfo 
                  description='프로필 + URL 단축 서비스'
                  tags={[
                    'NextJS', 'AWS DynamoDB'
                  ]}
                >
                  Github: <a href="https://github.com/JinhyeokFang/https-jinhy.uk">https://github.com/JinhyeokFang/https-jinhy.uk</a><br/>
                  URL 단축 서비스: <a href="https://jinhy.uk/url">https://jinhy.uk/url</a>
                  프로필: <a href="https://jinhy.uk">https://jinhy.uk</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '프로필',
                  '프로젝트 소개',
                  'URL 단축 기능',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '1. Next.js로 프론트엔드와 백엔드 통합',
                    description: 'URL 단축 서비스에 필요한 리다이렉트 로직(백엔드)과 화면(프론트엔드)을 Next.js로 합쳤습니다.',
                  },
                  {
                    src: significanceImage2,
                    title: '2. AWS DynamoDB 활용',
                    description: '단축된 url로 접속시 리다이렉트 될 실제 url를 저장하고 불러오기 위해 DynamoDB를 사용했습니다. DynamoDB 접속에 필요한 환경변수는 Vercel에 저장하여 Github에 공개되는 코드와 노출되면 위험한 데이터를 분리했습니다.'
                  },
                  {
                    src: significanceImage3,
                    title: '3. 다크모드 및 모바일 지원',
                    description: 'localStorage와 순수 css로 다크 모드를 직접 구현하고 미디어 쿼리로 모바일에 맞는 레이아웃을 구현했습니다.',
                  },
                ]}/>
                <ProjectPageLessons lesson='' />
              </article>
            </div>
            <hr />
        </>
    )
}
