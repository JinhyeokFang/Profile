import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'
import { PhotoCloudSection } from '@/components/sections/PhotoCloud.section'

export default function PhotoCloud() {
  return (
    <>
      <Head>
        <title>개발자 방진혁 - PhotoCloud</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="Photo Cloud project" />
        <meta name="description" content="Photo Cloud project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/PhotoCloud" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Photo Cloud project" />
        <meta property="og:description" content="Photo Cloud project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <PhotoCloudSection />
        <Footer />
      </main>
    </>
  )
}
