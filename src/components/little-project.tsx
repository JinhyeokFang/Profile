import { useRouter } from 'next/router';
import styles from '../styles/little-project.module.css'

interface LittleProjectProps {
  name: string; // Take-Me-Home
  link?: string; // /projects/take-me-home
  title: string; // TDD로 DDD를 점진적으로 적용한 Nest.js 기반 API 서버
  children: React.ReactNode;
}

export const LittleProject = (props: LittleProjectProps) => {
  const { name, link, title, children } = props;
  const router = useRouter();

  const moveTo = (location: string | undefined) => () => {
    if (location === undefined)
      return;
    router.push(location);
  }

    return (
      <div className={styles.project} onClick={moveTo(link)} >
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
