import styles from '../styles/sections.module.css'

interface ProjectPageEtcProps {
  children: React.ChildNode;
}

export const ProjectPageEtc = (props: ProjectPageEtcProps) => {
    return (
      <div>
        <h2 className={styles.subtitle}>기타</h2>
        <p className={styles.description}>{ props.children }</p>
      </div>
    )
}
