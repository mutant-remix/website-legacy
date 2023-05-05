import Link from 'next/link';
import { Emoji } from './Emoji';
import styles from './Footer.module.scss';
import { DISCORD_INVITE } from '../manifest';

interface Props {
    light?: boolean
}

export function Footer({ light }: Props) {
    return (
        <div className={styles.footer} data-light={light}>
            <div className={styles.links}><Link href="/download">Download</Link> &middot; <Link href="/demo">Demo</Link> &middot; <Link href="/changelog">Changelog</Link> &middot; <a href={DISCORD_INVITE} target="_blank">Discord Server</a></div>
            <span>Made with <Emoji codepoint="2764-fe0f" /> by nizune for <a href="https://revolt.chat" target="_blank"><img className={styles.revolt} src="https://revolt.chat/logo.svg" /></a></span>
            <p>
                Mutant Remix is not affiliated with <a className={styles.link} href="https://mutant.tech" target="_blank">mutant.tech</a>.<br />
                This is a transformation of the original Mutant Standard emoji pack, which is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
            </p>
        </div>
    )
}
