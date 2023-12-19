import Head from 'next/head'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'
import { UMCHackathonProjectSection } from '@/components/sections/UMCHackathonProject.section'

export default function UMCHackathonProject() {
  return (
    <>
      <Head>
        <title>백엔드 개발자 방진혁 - </title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="project" />
        <meta name="description" content=" project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" project" />
        <meta property="og:description" content=" project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Title />
        <UMCHackathonProjectSection />
        <Footer />
      </main>
    </>
  )
}
