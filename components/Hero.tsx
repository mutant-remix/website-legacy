import { ReactNode } from 'react';
import styles from './Hero.module.scss';

interface Props {
    children?: ReactNode | ReactNode[]
}

export function Hero({ children }: Props) {
    return (
        <div className={styles.hero}>
            { children }
        </div>
    )
}
