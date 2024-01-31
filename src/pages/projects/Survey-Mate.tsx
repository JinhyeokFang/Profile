import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'
import { SurveyMateSection } from '@/components/sections/Survey-Mate.section'

export default function SurveyMateProject() {
  return (
    <>
      <Head>
        <title>백엔드 개발자 방진혁 - Survey Mate</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="Survey Mate project" />
        <meta name="description" content="Survey Mate project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/Survey-Mate" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Survey Mate project" />
        <meta property="og:description" content="Survey Mate project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <SurveyMateSection />
        <Footer />
      </main>
    </>
  )
}
