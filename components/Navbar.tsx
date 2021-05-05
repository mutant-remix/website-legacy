import Link from 'next/link';
import { Emoji } from './Emoji';
import styles from './Navbar.module.scss';

interface Props {
    center?: boolean
}

export function Navbar(props: Props) {
    return (
        <div className={styles.navbar} data-center={props.center}>
            <Link href="/">
                <a>
                    <img className={styles.logo} src="/logo.svg" draggable="false"/>
                </a>
            </Link>
            <a className={styles.backRef} href="https://revolt.chat" target="_blank"><Emoji codepoint="2b05-fe0f" /> <span>back to revolt.chat</span></a>
        </div>
    )
}
