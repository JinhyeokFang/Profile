import Image from 'next/image'
import styles from '../styles/sections.module.css'

interface ProjectPageHeaderProps {
  src?: any;
  title: string;
  dateStart?: `20${number}${number}.${number}${number}`;
  dateEnd?: `20${number}${number}.${number}${number}`;
}

export const ProjectPageHeader = (props: ProjectPageHeaderProps) => {
    return (
      <header className={styles.header}>
        <h1 className={styles.name}>{ props.title }</h1>
        {
          (props.dateStart || props.dateEnd) && 
          <p className={styles.duration}>
            프로젝트 기간: { props.dateStart } ~ { props.dateEnd } 
          </p>
        }
        {
          props.src &&
          <Image className={styles.image} src={props.src} alt="" width="1000" height={1000 / 16 * 9} />
        }
      </header>
    )
}
