import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'
import { SumsumzipSection } from '@/components/sections/Sumsumzip.section'

export default function Sumsumzip() {
  return (
    <>
      <Head>
        <title>백엔드 개발자 방진혁 - 숨숨집</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="sumsumzip project" />
        <meta name="description" content="sumsumzip project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/sumsumzip" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="sumsumzip project" />
        <meta property="og:description" content="sumsumzip project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <SumsumzipSection />
        <Footer />
      </main>
    </>
  )
}
