import styles from '../styles/little-project.module.css'

interface LittleProjectProps {
  name: string; // Take-Me-Home
  title: string; // TDD로 DDD를 점진적으로 적용한 Nest.js 기반 API 서버
  children: React.ReactNode;
}

export const LittleProject = (props: LittleProjectProps) => {
  const { name, title, children } = props;
    return (
      <div className={styles.project}>
        <h2 className={styles.name}>{ name }</h2>
        <div className={styles.content}>
            <p>{ title }</p>
            <p>
              { children }
            </p>
        </div>
      </div>
    );
}
