import { ReactNode } from 'react';
import styles from './Hero.module.scss';

interface Props {
    children?: ReactNode | ReactNode[]
    background?: string
    column?: boolean
    full?: boolean
    pad?: boolean

    clamp?: boolean
}

export function Hero(props: Props) {
    if (props.clamp) {
        let { clamp: _, background, ...newProps } = props;

        return (
            <div className={styles.clamp}
                style={{ backgroundColor: background ? `var(--${background})` : undefined }}>
                <Hero {...newProps} />
            </div>
        )
    }
    
    const { children, column, full, pad, background } = props;
    return (
        <div
            style={{ backgroundColor: background ? `var(--${background})` : undefined }}
            className={styles.hero}
            data-column={column}
            data-full={full}
            data-pad={pad}>
            { children }
        </div>
    )
}
