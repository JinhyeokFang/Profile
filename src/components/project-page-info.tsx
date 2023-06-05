import styles from '../styles/sections.module.css'

interface ProjectPageInfoProps {
  description: string;
  tags: string[];
  children: React.ReactNode;
}

export const ProjectPageInfo = (props: ProjectPageInfoProps) => {
    return (
      <div className={styles.infoSection}>
        <div>
            <p className={styles.description}>{ props.description }</p>
            <p className={styles.link}>
              { props.children }
            </p>
        </div>
        <div>
          <p>
            {
              props.tags.map((tag, index) => (
                <span className={styles.tag} key={index}>{ tag }</span>
              ))
            }
          </p>
        </div>
    </div>
    )
}
