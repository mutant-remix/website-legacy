import { Emoji } from './Emoji';
import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.logo} src="/logo.svg" draggable="false"/>
            <a className={styles.backRef} href="https://revolt.chat" target="_blank"><Emoji codepoint="2b05-fe0f" /> <span>back to revolt.chat</span></a>
        </div>
    )
}
