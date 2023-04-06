import Head from 'next/head'
import styles from '@/styles/Index.module.css'
import { Title } from '@/components/title'
import { Footer } from '@/components/footer'
import { FAB } from '@/components/fab'

export default function Outsourcing2() {
  return (
    <>
      <Head>
        <title>개발자 방진혁</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="title" content="the outsourcing project" />
        <meta name="description" content="the outsourcing project by Jin-hyeok Bang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://bang.jinhy.uk/projects/outsourcing2" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="the outsourcing project" />
        <meta property="og:description" content="the outsourcing project by Jin-hyeok Bang" />
        <meta property="og:image" content="/profile.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://unpkg.com/pwacompat" crossOrigin="anonymous"></script>
      </Head>
      <main className={styles.main}>
        <FAB />
        <Title />
        <Footer />
      </main>
    </>
  )
}
