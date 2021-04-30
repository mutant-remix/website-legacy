import { ReactNode } from 'react';
import styles from './Button.module.scss';

export interface Props {
    style: 'purple' | 'turquoise' | 'transparent'
    children?: ReactNode | ReactNode[]
}

export function Button({ style, children }: Props) {
    return (
        <div className={styles.button} data-style={style}>
            { children }
        </div>
    )
}
