import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'
import { Cafe4MeSection } from '@/sections/Cafe4Me.section'

export default function Cafe4Me() {
  return (
    <>
      <Head>
        <title>개발자 방진혁 - Cafe4Me</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="Cafe4Me project" />
        <meta name="description" content="Cafe4Me project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/Cafe4Me" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cafe4Me project" />
        <meta property="og:description" content="Cafe4Me project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <Cafe4MeSection />
        <Footer />
      </main>
    </>
  )
}
