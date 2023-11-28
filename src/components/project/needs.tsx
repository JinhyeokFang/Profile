import styles from '../../styles/sections.module.css'

interface ProjectPageNeedsProps {
  needs: string[];
}

export const ProjectPageNeeds = (props: ProjectPageNeedsProps) => {
    return (
      <div className={styles.needs}>
        <h2 className={styles.subtitle}>개선이 필요한 점</h2>
        <ul>
            {
                props.needs.map((need, index) => (
                <li className={styles.description} key={index}>{ need }</li>
                ))
            }
        </ul>
      </div>
    )
}
