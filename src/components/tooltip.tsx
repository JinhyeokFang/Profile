import styles from '../styles/tooltip.module.css'

interface TooltipProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Tooltip = (props: TooltipProps) => {
  const { title, description, children } = props;

    return (
        <div className={styles.tooltip}>
            <div className={styles.content}>
                { children }
            </div>
            <div className={styles.description}>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </div>
        </div>
    );
}
