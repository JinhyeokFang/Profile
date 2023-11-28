import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/url-shortener/jinhyuk.png'
import significanceImage1 from '../../../public/screenshots/url-shortener/1.png'
import significanceImage2 from '../../../public/screenshots/url-shortener/2.png'
import significanceImage3 from '../../../public/screenshots/url-shortener/3.png'

import { ProjectPageHeader } from '../project/header'
import { ProjectPageInfo } from '../project/info'
import { ProjectPageFunctions } from '../project/functions'
import { ProjectPageSignificances } from '../project/significances'
import { ProjectPageLessons } from '../project/lessons'

export const URLShortenerSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='Jinhy.uk' dateStart='2022.11' dateEnd='2023.07'/>
              <article className={styles.article}>
                <ProjectPageInfo 
                  description='Next.js Vercel로 배포되는 프로필 & URL 단축 서비스'
                  tags={[
                    'NextJS', 'AWS DynamoDB'
                  ]}
                >
                  Github: <a href="https://github.com/JinhyeokFang/https-jinhy.uk">https://github.com/JinhyeokFang/https-jinhy.uk</a><br/>
                  URL 단축 서비스: <a href="https://jinhy.uk/url">https://bang.jinhy.uk/url</a><br/>
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
                <ProjectPageLessons lesson='순수 CSS와 Next.js만을 사용하여 직접 스타일을 넣고 컴포넌트를 만들었습니다. AWS의 DynamoDB와 Vercel의 Serverless Function 기능을 활용하여 백엔드와 프론트엔드를 Next.js 하나로 작성하였습니다.' />
              </article>
            </div>
            <hr />
        </>
    )
}
