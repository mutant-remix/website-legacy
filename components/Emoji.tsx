import styles from './Emoji.module.scss';

export type Props = {
    codepoint: string
} | {
    path: string
};

export function Emoji(props: Props) {
    let o = props as any;
    return <img className={styles.emoji}
        src={`https://mutant.revolt.chat/static/${
            o.codepoint ? `codepoint/${o.codepoint}`
                : `shortcode/${o.path}`
        }.svg`} />
}
