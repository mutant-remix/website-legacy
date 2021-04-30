import { ReactNode } from 'react';
import styles from './Hero.module.scss';

interface Props {
    children?: ReactNode | ReactNode[]
    background?: string
    column?: boolean
    full?: boolean
    pad?: boolean
}

export function Hero({ children, column, full, pad, background }: Props) {
    return (
        <div
            style={{ backgroundColor: `var(--${background})` }}
            className={styles.hero}
            data-column={column}
            data-full={full}
            data-pad={pad}>
            { children }
        </div>
    )
}
