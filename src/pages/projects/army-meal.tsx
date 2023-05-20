import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'

export default function ArmyMeal() {
  return (
    <>
      <Head>
        <title>개발자 방진혁 - army-meal</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="army-meal project" />
        <meta name="description" content="army-meal project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/army-meal" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="army-meal project" />
        <meta property="og:description" content="army-meal project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://unpkg.com/pwacompat" crossOrigin="anonymous"></script>
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <Footer />
      </main>
    </>
  )
}
