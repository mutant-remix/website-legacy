import { Hero } from "../Hero";
import { Fragment } from "react";
import { Emoji } from "../Emoji";
import { Navbar } from "../Navbar";
import { Button } from "../Button";
import classNames from "classnames";
import styles from './MainHero.module.scss';
import Link from "next/link";

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
						<Navbar light={false} />
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
								<Link href="/download">
									<Button style='purple'>Take me to the downloads <Emoji codepoint="2197-fe0f" /></Button>
								</Link>
							</div>
						</div>
						<div />
					</div>
				</div>
			</Hero>
		</Fragment>
	)
}