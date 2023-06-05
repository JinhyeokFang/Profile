import styles from '../styles/sections.module.css'

interface ProjectPageFunctionsProps {
  functions: string[];
}

export const ProjectPageFunctions = (props: ProjectPageFunctionsProps) => {
    return (
      <div className={styles.functions}>
        <h2 className={styles.subtitle}>주요 기능</h2>
        <ul>
          {
            props.functions.map((func, index) => (
              <li className={styles.description} key={index}>{ func }</li>
            ))
          }
        </ul>
      </div>
    )
}
