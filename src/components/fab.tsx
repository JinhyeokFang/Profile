import Image from 'next/image';
import { useEffect, useState } from 'react'
import iconImage from '../../public/fab.png'
import styles from '../styles/fab.module.css'

export const FAB = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        let savedIsDark = localStorage.getItem('jinhyukIsDark');
        if (savedIsDark == null)
            savedIsDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'true' : 'false';
        setIsDark(savedIsDark == 'true');
        const theme = savedIsDark == 'true' ? 'dark' : 'light';
        document.body.dataset.theme = theme;
    }, []);

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        document.body.dataset.theme = theme;
    }, [isDark]);

    const switchMode = () => {
        setIsDark(!isDark);
        localStorage.setItem('jinhyukIsDark', !isDark ? 'true' : 'false');
    }

    return (
        <div className={styles.wrapper} onClick={switchMode}>
            <Image className={styles.icon} src={iconImage} alt="" width="50" height="50" />
        </div>
    )
}
