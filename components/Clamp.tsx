import { ReactNode } from "react";
import styles from './Clamp.module.scss';

interface Props {
    children?: ReactNode | ReactNode[]
}

export function Clamp({ children }: Props) {
    return (
        <div className={styles.clamp}>
            { children }
        </div>
    )
}
