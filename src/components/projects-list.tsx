import styles from '../styles/projects-list.module.css'
import { Project } from './project/project';

import Cafe4MeImage from '../../public/screenshots/cafe4me/profile.png'
import SumsumzipImage from '../../public/screenshots/sumsumzip/1.png'
import ETAProjectImage from '../../public/screenshots/eta/profile.png'
import KyonggiTimeImage from '../../public/screenshots/kyonggitime/profile.jpg'
import SurveyMateImage from '../../public/screenshots/survey-mate/survey-mate.png'
import ToMateImage from '../../public/screenshots/tomate/to.mate.png'
import { LittleProject } from './project/little-project';

import AwsSmallBadge from '../../public/small-badges/Aws.svg'
import DynamoDBSmallBadge from '../../public/small-badges/Dynamodb.svg'
import ExpressSmallBadge from '../../public/small-badges/Express.svg'
import JavaSmallBadge from '../../public/small-badges/Java.svg'
import JestSmallBadge from '../../public/small-badges/Jest.svg'
import KotlinSmallBadge from '../../public/small-badges/Kotlin.svg'
import MongoDBSmallBadge from '../../public/small-badges/Mongodb.svg'
import MysqlSmallBadge from '../../public/small-badges/Mysql.svg'
import NestJsSmallBadge from '../../public/small-badges/Nest.js.svg'
import NextJsSmallBadge from '../../public/small-badges/Next.js.svg'
import ServerlessSmallBadge from '../../public/small-badges/Serverless.svg'
import SpringBootSmallBadge from '../../public/small-badges/SpringBoot.svg'
import TypeOrmSmallBadge from '../../public/small-badges/Typeorm.svg'
import VueSmallBadge from '../../public/small-badges/Vue.svg'

export const ProjectsList = () => {
  return (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>프로젝트</h1>
          <ul className={styles.projectList}>
              <Project
                name='ETA'
                link='/projects/ETA'
                title='NestJS 기반 회의 일정 관리 서비스 (5th 너디너리 해커톤 3등)'
                dateStart='2023.08'
                src={ETAProjectImage}
              >
                <NestJsSmallBadge />
                <MysqlSmallBadge />
                <AwsSmallBadge />
                <TypeOrmSmallBadge />
              </Project>
              <Project
                name='경기타임 (개발, 운영중)'
                link='/projects/kyonggi-time'
                title='[누적 방문자 2500+] 경기대 시간표 작성 서비스'
                dateStart='2024.02'
                src={KyonggiTimeImage}
              >
                <NestJsSmallBadge />
                <MysqlSmallBadge />
                <AwsSmallBadge />
                <TypeOrmSmallBadge />
              </Project>
              <Project
                name='썰매 (개발중)'
                title='UMC Spring Boot 팀 프로젝트 (AWS ECS 무중단 자동 배포)'
                link='/projects/Survey-Mate'
                src={SurveyMateImage}
                dateStart='2024.01'
                dateEnd='2024.02'
              >
                <SpringBootSmallBadge />
                <JavaSmallBadge />
                <AwsSmallBadge />
                <MysqlSmallBadge />
              </Project>
              <Project
                name='To.Mate'
                title='5th UMC Seoul Hackathon'
                link='/projects/To.Mate'
                src={ToMateImage}
                dateStart='2024.01'
              >
                <SpringBootSmallBadge />
                <JavaSmallBadge />
                <MysqlSmallBadge />
              </Project>
              <Project
                name='Cafe4Me'
                link='/projects/Cafe4Me'
                title='AWS ECS로 자동배포되는 Nest+Next기반 카페 추천 웹서비스'
                src={Cafe4MeImage}
                dateStart='2022.11'
              >
                <NestJsSmallBadge />
                <MongoDBSmallBadge />
                <AwsSmallBadge />
                <NextJsSmallBadge />
              </Project>
              <Project
                name='숨숨집'
                link='/projects/sumsumzip'
                title='Springboot 3, Java 17+ 기반 고양이 사진 공유 웹서비스'
                src={SumsumzipImage}
                dateStart='2023.08'
              >
                <SpringBootSmallBadge />
                <JavaSmallBadge />
                <MysqlSmallBadge />
              </Project>
              <Project
                name='Jinhy.uk'
                link='/projects/URL-Shortener'
                title='Next.js Vercel로 배포되는 프로필 & URL 단축 서비스'
              >
                <NextJsSmallBadge />
                <DynamoDBSmallBadge />
              </Project>
              <Project
                name='Pedometer'
                link='/projects/Pedometer'
                title='Serverless & svg로 만든 사이트 방문 횟수, 통계 웹 서비스'
              >
                <NestJsSmallBadge />
                <MongoDBSmallBadge />
                <VueSmallBadge />
                <ServerlessSmallBadge />
              </Project>
              <Project
                name='Take-Me-Home'
                link='/projects/take-me-home'
                title='TDD로 DDD를 점진적으로 적용한 Nest.js 기반 API 서버'
                dateStart='2022.12'
                dateEnd='2023.01'
              >
                <NestJsSmallBadge />
                <JestSmallBadge />
                <MysqlSmallBadge />
                <TypeOrmSmallBadge />
              </Project>
              <Project
                name='Newsfeed'
                link='/projects/Newsfeed'
                title='Express & Inversify 기반 자체 프레임워크로 서버 구현'
              >
                <ExpressSmallBadge />
                <JestSmallBadge />
                <MysqlSmallBadge />
              </Project>
              <LittleProject
                name='외주 프로젝트 1'
                title='Nest.js 기반 웹 페이지 서버 (코드 비공개)'
              >
                <NestJsSmallBadge />
                <MongoDBSmallBadge />
              </LittleProject>
              <LittleProject
                name='외주 프로젝트 2'
                title='Express API 서버 & Vue 기반 관리자용 웹 페이지 (코드 비공개)'
              >
                <ExpressSmallBadge />
                <MongoDBSmallBadge />
                <VueSmallBadge />
              </LittleProject>
              <LittleProject
                name='외주 프로젝트 3'
                title='Express, Typescript 기반 앱 서비스 API 서버 (코드 비공개)'
              >
                <ExpressSmallBadge />
                <MongoDBSmallBadge />
              </LittleProject>
          </ul>
        </div>
      </>
  )
}
