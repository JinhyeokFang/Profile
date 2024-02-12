import styles from '../../styles/sections.module.css'
import profileImage from '../../../public/screenshots/kyonggitime/profile.jpg'
import significanceImage1 from '../../../public/screenshots/kyonggitime/1.png'
import significanceImage2 from '../../../public/screenshots/kyonggitime/2.png'
import significanceImage3 from '../../../public/screenshots/kyonggitime/3.png'
import significanceImage4 from '../../../public/screenshots/kyonggitime/4.png'

import { ProjectPageHeader } from '../project/header'
import { ProjectPageInfo } from '../project/info'
import { ProjectPageFunctions } from '../project/functions'
import { ProjectPageSignificances } from '../project/significances'
import { ProjectPageEtc } from '../project/etc'

export const KyonggiTimeSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <ProjectPageHeader src={profileImage} title='경기타임' dateStart='2024.02'/>
              <br />
              <article>
                <ProjectPageInfo 
                  description='700명 이상의 사용자를 확보한 경기대 시간표 작성 서비스'
                  tags={[
                    'NestJS', 'MySQL', 'TypeORM', 'AWS EC2', 'AWS RDS', 'NextJS', 'Vercel'
                  ]}
                >
                  사이트: <a href="https://kyonggiti.me">https://kyonggiti.me</a><br/>
                  Github(Server): <a href="https://github.com/JinhyeokFang/kyonggi-univ-time-table-server">https://github.com/JinhyeokFang/kyonggi-univ-time-table-server</a><br/>
                  Github(Client): <a href="https://github.com/JinhyeokFang/kyonggi-univ-time-table-client">https://github.com/JinhyeokFang/kyonggi-univ-time-table-client</a><br/>
                  개발과정 및 후기: <a href="https://jinhy.uk/kyonggitime">https://jinhy.uk/kyonggitime</a><br/>
                </ProjectPageInfo>
                <br />
                <ProjectPageFunctions functions={[
                  '원하는 강의 검색',
                  '시간표에 강의 추가',
                ]} />
                <br />
                <ProjectPageSignificances significances={[
                  {
                    src: significanceImage1,
                    title: '1. 사용자 대상 서비스 제작 및 운영',
                    description: '',
                  },
                  {
                    src: significanceImage2,
                    title: '2. Vercel 및 PM2로 무중단 배포 운영',
                    description: 'Vercel과 PM2로 서비스 중단 없는 업데이트를 실시하여 이용 불편을 최소화했습니다.'
                  },
                  {
                    src: significanceImage3,
                    title: '3. 25시간 MVP 개발 및 출시',
                    description: '경기타임은 10일 15시 47분에 개발을 시작해 11일 16시 40분에 첫 사용자를 받았습니다. 수강 신청이 얼마 남지않은 경기대 학우를 위해 최대한 빠르게 개발하여 출시했습니다.',
                  },
                  {
                    src: significanceImage4,
                    title: '4. 모바일 UI 및 PWA 앱 설치 지원',
                    description: '',
                  },
                ]}/>
                <br />
                <ProjectPageEtc>
                  기존에 사용하던 서버 레포지토리 주소: &nbsp;
                  <a href="https://github.com/JinhyeokFang/cafe-for-me-server">https://github.com/JinhyeokFang/cafe-for-me-server</a>
                  <br />
                  기존에 사용하던 클라이언트 레포지토리 주소: &nbsp;
                  <a href="https://github.com/JinhyeokFang/cafe-for-me-client">https://github.com/JinhyeokFang/cafe-for-me-client</a>
                </ProjectPageEtc>
              </article>
            </div>
        </>
    )
}
