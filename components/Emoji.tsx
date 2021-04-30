import styles from './Emoji.module.scss';

export interface Props {
    codepoint: string
}

export function Emoji({ codepoint }: Props) {
    return <img className={styles.emoji} src={`https://mutant.revolt.chat/emoji/${codepoint}.svg`} />
}
