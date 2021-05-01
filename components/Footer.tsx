import { Emoji } from './Emoji';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <div className={styles.footer}>
            <span>Made with <Emoji codepoint="2764-fe0f" /> by nizune for <a href="https://revolt.chat" target="_blank"><img className={styles.revolt} src="https://revolt.chat/logo.svg" /></a></span>
            <p>
                Mutant Remix is not affiliated with https://mutant.tech.
                This is a transformation of the original Mutant Standard emoji pack, which is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
            </p>
        </div>
    )
}
