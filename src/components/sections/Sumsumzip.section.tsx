import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/sumsumzip/1.png'

import significanceImage1 from '../../../public/screenshots/sumsumzip/1.png'
import significanceImage2 from '../../../public/screenshots/sumsumzip/2.png'
import significanceImage3 from '../../../public/screenshots/sumsumzip/3.png'

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
                    title: '1. Spring Boot 첫 도전',
                    description: '새로운 프레임워크를 빠르게 습득하고 실제로 작동하는 서비스를 만드는 것을 목표로 했던 프로젝트입니다. Spring Boot와 JPA, Spring Security를 학습하고 프로젝트에서 활용했습니다.',
                  },
                  {
                    src: significanceImage2,
                    title: '2. Spring Security로 소셜 로그인 지원',
                    description: '스프링 시큐리티와 OAuth로 구글 로그인을 구현했습니다. 구글 로그인으로 엑세스 토큰을 발급받을 수 있는 리프레시 토큰을 발급하고, HTTP Header의 JWT로 엑세스 토큰을 검증했습니다. Spring Security의 설정을 Java의 람다로 만들었습니다.',
                  },
                  {
                    src: significanceImage3,
                    title: '3. AWS S3로 이미지 관리, Cloudfront로 캐싱',
                    description: 'AWS S3와 SDK로 고양이 이미지를 업로드하고 저장했습니다. Cloudfront를 추가해 이미지가 캐싱되도록 구축했습니다.',
                  },
                ]}/>
                <ProjectPageNeeds needs={[
                  '카카오, 네이버 소셜 로그인 지원',
                  '이미지 다중 업로드',
                  '자동 배포'
                ]} />
              </article>
            </div>
        </>
    )
}
