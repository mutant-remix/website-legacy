import { Hero } from "../Hero";
import { Fragment } from "react";
import { Emoji } from "../Emoji";
import { Button } from "../Button";
import classNames from "classnames";
import styles from './MainHero.module.scss';

export function MainHero() {
    return (
        <Fragment>
            <div className={styles.overlay}>
				<div className={styles.whitespace}></div>
				<div className={styles.image}>
					<img src="/emoji-display.svg" />
				</div>
			</div>
			<Hero column full>
				<div className={classNames(styles.main, styles.top)}>
					<div className={styles.menu}>
						<div className={styles.navbar}>
							<img className={styles.logo} src="/logo.svg" draggable="false"/>
							<a className={styles.backRef} href="https://revolt.chat" target="_blank"><Emoji codepoint="2b05-fe0f" /> <span>back to revolt.chat</span></a>
						</div>
					</div>
				</div>
				<div className={classNames(styles.main, styles.bottom)}>
					<div className={styles.text}>
						<div>
							<div>
								<div className={styles.breakout}>
									<h1>Be diverse.</h1>
								</div>
								<h1>Stand out.</h1>
								<p>
									Mutant Remix brings a new twist to the good old emojis that have become a part of our daily conversations.
								</p>
								<Button style='purple'>Learn how to use it <Emoji codepoint="2197-fe0f" /></Button>
							</div>
						</div>
						<div />
					</div>
				</div>
			</Hero>
        </Fragment>
    )
}