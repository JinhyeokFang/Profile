import Image from 'next/image'
import styles from '../styles/sections.module.css'

interface ProjectPageHeaderProps {
  src?: any;
}

export const ProjectPageHeader = (props: ProjectPageHeaderProps) => {
    return (
        <header className={styles.header}>
          <h1 className={styles.name}>Cafe4Me</h1>
          <div className={styles.imageSection}>
              <Image className={styles.image} src={props.src} alt="" width="1000" height={1000 / 16 * 9} />
          </div>
        </header>
    )
}
