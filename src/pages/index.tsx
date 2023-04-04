import Head from 'next/head'
import styles from '@/styles/Index.module.css'
import { Title } from '@/components/title'
import { Profile } from '@/components/profile'
import { Skills } from '@/components/skills'
import { MainProjects } from '@/components/main-projects'
import { OutsourcingProjects } from '@/components/outsourcing-projects'
import { SideProjects } from '@/components/side-projects'
import { ETC } from '@/components/etc'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'

export default function Index() {
  return (
    <>
      <Head>
        <title>Jin-hyeok Bang</title>
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
        <script async src="https://unpkg.com/pwacompat" crossOrigin="anonymous"></script>
      </Head>
      <main className={styles.main}>
        <FAB />
        <Title />
        <Profile />
        <Skills />
        <MainProjects />
        <OutsourcingProjects />
        <SideProjects />
        <ETC />
        <Footer />
      </main>
    </>
  )
}
