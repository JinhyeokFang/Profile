import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/project.module.css'

interface ProjectProps {
  name: string; // Take-Me-Home
  link?: string; // /projects/take-me-home
  title: string; // TDD로 DDD를 점진적으로 적용한 Nest.js 기반 API 서버
  children: React.ReactNode;
  src?: string | StaticImport;
}

export const Project = (props: ProjectProps) => {
  const { name, link, title, children, src } = props;
  const router = useRouter();

  const moveTo = (location: string | undefined) => () => {
    if (location === undefined)
      return;
    router.push(location);
  }

    return (
      <div className={styles.project} onClick={moveTo(link)} >
        { 
          src && 
          (<Image 
            src={src} 
            quality={100}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              margin: '5px'
            }}
          />)
        }
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
