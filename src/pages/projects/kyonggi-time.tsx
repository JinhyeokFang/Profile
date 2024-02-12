import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'
import { KyonggiTimeSection } from '@/components/sections/kyonggi-time.section'

export default function KyonggiTime() {
  return (
    <>
      <Head>
        <title>백엔드 개발자 방진혁 - 경기타임</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="kyonggi-time project" />
        <meta name="description" content="kyonggi-time project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/kyonggi-time" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="kyonggi-time project" />
        <meta property="og:description" content="kyonggi-time project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <KyonggiTimeSection />
        <Footer />
      </main>
    </>
  )
}
