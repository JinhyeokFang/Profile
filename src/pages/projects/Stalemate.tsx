import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'
import { StalemateSection } from '@/components/sections/Stalemate.section'

export default function Stalemate() {
  return (
    <>
      <Head>
        <title>개발자 방진혁 - 스테일메이트</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="Stalemate project" />
        <meta name="description" content="Stalemate project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/Stalemate" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stalemate project" />
        <meta property="og:description" content="Stalemate project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <StalemateSection />
        <Footer />
      </main>
    </>
  )
}
