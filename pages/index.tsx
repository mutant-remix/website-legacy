import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames'
import { Hero } from '../components/Hero'
import styles from '../styles/Home.module.scss'
import { Button } from '../components/Button'

export default function Home() {
	return (
		<main>
			<div className={styles.overlay}>
				<div></div>
				<div className={styles.image}>
					<img src="/emoji-display.svg" />
				</div>
			</div>
			<Hero>
				<div className={classNames(styles.main, styles.top)}>
					<div className={styles.navbar}>
						<div className={styles.logo}>
							<img src="/logo.svg" />
						</div>
						<div className={styles.backRef}>back to revolt.chat</div>
					</div>
					<div className={styles.text}>
						<div>
							<h1>Be diverse.</h1>
						</div>
					</div>
				</div>
				<div className={classNames(styles.main, styles.bottom)}>
					<div className={styles.text}>
						<div>
							<h1>Stand out.</h1>
							<p>
								Mutant Remix brings a new twist to the good old emojis that have become a part of our daily conversations.
							</p>
							<Button style='purple'>Learn on how to use it</Button>
						</div>
					</div>
				</div>
			</Hero>
			<h1>hgfhgfd</h1>
			<h1>hgfhgfd</h1>
			<h1>hgfhgfd</h1>
		</main>
	)
}
