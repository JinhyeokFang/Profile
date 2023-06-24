import Image from 'next/image'
import styles from '../styles/sections.module.css'

interface ProjectPageHeaderProps {
  src?: any;
  title: string;
}

export const ProjectPageHeader = (props: ProjectPageHeaderProps) => {
    return (
      <header className={styles.header}>
        <h1 className={styles.name}>{ props.title }</h1>
        <Image className={styles.image} src={props.src} alt="" width="1000" height={1000 / 16 * 9} />
      </header>
    )
}
