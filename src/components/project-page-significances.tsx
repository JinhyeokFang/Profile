import Image from 'next/image'
import styles from '../styles/sections.module.css'

interface ProjectPageSignificancesProps {
  significances: {
    src: any;
    title: string;
    description: string;
  }[]
}

export const ProjectPageSignificances = (props: ProjectPageSignificancesProps) => {
    return (
      <div>
          <h2 className={styles.subtitle}>프로젝트 의의</h2>
          <ol className={styles.significanceList}>
            {
              props.significances.map((significance, index) => (
                index % 2 == 0 ?
                <li className={styles.significance} key={index}>
                  <div>
                    <h3 className={styles.description}>{significance.title}</h3>
                    <p>
                      &nbsp;{significance.description}
                    </p>
                  </div>
                  <Image className={styles.image} src={significance.src} alt=""/>
                </li>
                :
                <li className={styles.significance} key={index}>
                  <Image className={styles.image} src={significance.src} alt=""/>
                  <div>
                    <h3 className={styles.description}>{significance.title}</h3>
                    <p>
                      &nbsp;{significance.description}
                    </p>
                  </div>
                </li>
              ))
            }
          </ol>
      </div>
    )
}
