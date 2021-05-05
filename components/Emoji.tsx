import styles from './Emoji.module.scss';

export type Props = {
    codepoint: string
} | {
    path: string
};

export function Emoji(props: Props) {
    let o = props as any;
    return <img className={styles.emoji}
        src={o.codepoint ? `https://static.revolt.chat/emoji/mutant/${o.codepoint}.svg` : `https://static.revolt.chat/mutant/short/${o.path}.svg`} />
}
