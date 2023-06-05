import Head from 'next/head'
import { Space } from '@/components/space'
import { Profile } from '@/components/profile'
import { Skills } from '@/components/skills'
import { ProjectsList } from '@/components/projects-list'
import { ETC } from '@/components/etc'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'

export default function Index() {
  return (
    <>
      <Head>
        <title>개발자 방진혁</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="Jin-hyeok Bang Profile" />
        <meta name="description" content="The profile of Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jin-hyeok Bang Profile" />
        <meta property="og:description" content="The profile of Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='page'>
        <FAB />
        <Space />
        <Profile />
        <Skills />
        <ProjectsList />
        <ETC />
        <Footer />
      </main>
    </>
  )
}
