import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/sumsumzip/1.png'

import significanceImage1 from '../../../public/screenshots/sumsumzip/2.png'
import significanceImage2 from '../../../public/screenshots/sumsumzip/3.png'

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
              <ProjectPageHeader src={profileImage} title='숨숨집' dateStart='2023.08' dateEnd='2023.08'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description=''
                  tags={[
                    'Springboot 3', 'Java', 'MySQL', 'AWS S3', 'AWS Cloudfront', 'Spring Security'
                  ]}
                >
                  Link: <a href="https://sumsumzip.jinhy.uk">https://sumsumzip.jinhy.uk</a> <br/>
                  Github: <a href="https://github.com/JinhyeokFang/sumsumzip">https://github.com/JinhyeokFang/sumsumzip</a>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '고양이 사진 최신순으로 불러오기',
                  '특정 유저 고양이 사진 불러오기',
                  '고양이 사진을 업로드 / 삭제',
                ]} />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '1. Spring Security로 소셜 로그인 지원',
                    description: '',
                  },
                  {
                    src: significanceImage2,
                    title: '2. AWS S3로 이미지 관리, Cloudfront로 캐싱',
                    description: '',
                  },
                ]}/>
                <ProjectPageLessons lesson=''/>
                <br />
                <ProjectPageNeeds needs={[
                  '카카오, 네이버 소셜 로그인 지원',
                  '이미지 다중 업로드',
                  '자동 배포'
                ]} />
                <br />
                <ProjectPageEtc>
                </ProjectPageEtc>
              </article>
            </div>
        </>
    )
}
