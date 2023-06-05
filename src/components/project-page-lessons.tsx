import styles from '../styles/sections.module.css'

interface ProjectPageLessonsProps {
  lesson: string;
}

export const ProjectPageLessons = (props: ProjectPageLessonsProps) => {
    return (
      <div>
          <h2 className={styles.subtitle}>배운점 및 느낀점</h2>
          <p className={styles.description}>
            &nbsp;{props.lesson}
          </p>
      </div>
    )
}
