import { useRouter } from 'next/router';
import styles from '../styles/projects-list.module.css'
import { Project } from './project';

import Project1Image from '../../public/screenshots/take-me-home/1.png'
import Project2Image from '../../public/screenshots/cafe4me/profile.png'

export const ProjectsList = () => {
  const router = useRouter();

  const moveTo = (location: string) => () => {
    router.push(location);
  }

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
                      title='프로필 + URL 단축 서비스'
                    >
                      <img className={styles.tag} src="https://img.shields.io/badge/--000000.svg?&style=for-the-badge&logo=Next.JS&logoColor=white"/>
                      <img className={styles.tag} src="https://img.shields.io/badge/--4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white"/>
                    </Project>
                    <Project
                      name='army-meal'
                      link='/projects/army-meal'
                      title='국방부 군대 급식 API 모듈'
                    >
                      <img className={styles.tag} src="https://img.shields.io/badge/--%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>
                    </Project>
                    <Project
                      name='Pedometer'
                      link='/projects/Pedometer'
                      title='사이트 방문 횟수, 시간 통계 웹 서비스'
                    >
                      <img className={styles.tag} src="https://img.shields.io/badge/--E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/>
                      <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                      <img className={styles.tag} src="https://img.shields.io/badge/--4FC08D.svg?&style=for-the-badge&logo=Vue.js&logoColor=white"/>
                      <img className={styles.tag} src="https://img.shields.io/badge/-Serverless-202020.svg?&style=for-the-badge"/>
                    </Project>
                    <Project
                      name='외주 프로젝트 1'
                      title='Express, Typescript 기반 앱 서비스 API 서버 구현'
                    >
                      <img className={styles.tag} src="https://img.shields.io/badge/--404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                      <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                    </Project>
                    <Project
                      name='외주 프로젝트 2'
                      title='Express API 서버 및 Vue 기반 관리자용 웹 페이지 구현'
                    >
                      <img className={styles.tag} src="https://img.shields.io/badge/--404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
                      <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                      <img className={styles.tag} src="https://img.shields.io/badge/--47A248.svg?&style=for-the-badge&logo=MongoDB&logoColor=white"/>
                    </Project>
                </ul>
            </div>
        </>
    )
}
