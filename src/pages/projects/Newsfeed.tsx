import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'
import { NewsfeedSection } from '@/components/sections/newsfeed.section'

export default function Newsfeed() {
  return (
    <>
      <Head>
        <title>백엔드 개발자 방진혁 - Newsfeed</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="Newsfeed project" />
        <meta name="description" content="Newsfeed project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/Newsfeed" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Newsfeed project" />
        <meta property="og:description" content="Newsfeed project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <NewsfeedSection />
        <Footer />
      </main>
    </>
  )
}
