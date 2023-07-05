import { useRouter } from 'next/router';
import styles from '../styles/projects-list.module.css'
import { Project } from './project';

import Project1Image from '../../public/screenshots/take-me-home/1.png'
import Project2Image from '../../public/screenshots/cafe4me/profile.png'
import { LittleProject } from './little-project';

export const ProjectsList = () => {
  const router = useRouter();

  return (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Projects</h1>
          <ul className={styles.projectList}>
              <Project
                name='Take-Me-Home'
                link='/projects/take-me-home'
                title='TDD로 DDD를 점진적으로 적용한 Nest.js 기반 API 서버'
                src={Project1Image}
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--C21325.svg?&style=for-the-badge&logo=Jest&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/-TypeOrm-202020.svg?&style=for-the-badge"/>
              </Project>
              <Project
                name='Cafe4Me'
                link='/projects/Cafe4Me'
                title='AWS ECS로 자동배포되는 Nest+Next기반 카페 추천 웹서비스'
                src={Project2Image}
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--000000.svg?&style=for-the-badge&logo=Next.JS&logoColor=white"/>
              </Project>
              <Project
                name='Newsfeed'
                link='/projects/Newsfeed'
                title='Express & Inversify 기반 자체 프레임워크로 서버 구현'
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--C21325.svg?&style=for-the-badge&logo=Jest&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/-Inversify-202020.svg?&style=for-the-badge"/>
              </Project>
              <Project
                name='Jinhy.uk'
                link='/projects/URL-Shortener'
                title='Next.js Vercel로 배포되는 프로필 & URL 단축 서비스'
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--000000.svg?&style=for-the-badge&logo=Next.JS&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white"/>
              </Project>
              <Project
                name='Pedometer'
                link='/projects/Pedometer'
                title='Serverless & svg로 만든 사이트 방문 횟수, 통계 웹 서비스'
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--4FC08D.svg?&style=for-the-badge&logo=Vue.js&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/-Serverless-202020.svg?&style=for-the-badge"/>
              </Project>
              <LittleProject
                name='숨숨집 (개발중)'
                link='https://github.com/JinhyeokFang/sumsumzip'
                title='GraphQL + Nest.js 기반 고양이 사진 공유 웹서비스'
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--E10098?style=for-the-badge&logo=graphql&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--C21325.svg?&style=for-the-badge&logo=Jest&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white"/>
              </LittleProject>
              <LittleProject
                name='Photo Cloud'
                link='https://github.com/JinhyeokFang/PhotoCloudServer'
                title='휴대폰 사진을 관리하는 클라우드 서버 + 안드로이드 앱'
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--3DDC84?style=for-the-badge&logo=android&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--7F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white"/>
              </LittleProject>
              <LittleProject
                name='스테일메이트'
                link='https://github.com/JinhyeokFang/horse-chess-server'
                title='Socket.io로 stateful하게 통신하는 모바일 게임서버'
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--black?style=for-the-badge&logo=socket.io&badgeColor=010101"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
              </LittleProject>
              <LittleProject
                name='외주 프로젝트 1'
                title='Express, Typescript 기반 앱 서비스 API 서버'
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
              </LittleProject>
              <LittleProject
                name='외주 프로젝트 2'
                title='Express API 서버 & Vue 기반 관리자용 웹 페이지'
              >
                <img className={styles.tag} src="https://img.shields.io/badge/--404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
              </LittleProject>
          </ul>
        </div>
      </>
  )
}
