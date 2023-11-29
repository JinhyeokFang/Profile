import styles from '../styles/tooltip.module.css'

interface TooltipProps {
  children: React.ReactNode;
  width: `${number}%`;
}

export const Tooltip = (props: TooltipProps) => {
  const { children, width } = props;

    return (
        <div className={styles.tooltip}>
            <div className={styles.content}>
                { children }
            </div>
            <div className={styles.description}>
              { children }
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{
                  width: `calc(${width} - 20px)`,
                }}>
                  { width }
                </div>
              </div>
            </div>
        </div>
    );
}
