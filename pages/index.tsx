import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames'
import { Hero } from '../components/Hero'
import styles from '../styles/Home.module.scss'
import { Button } from '../components/Button'
import { Emoji } from '../components/Emoji'

export default function Home() {
	return (
		<main>
			<Head>
				<title>Mutant Remix</title>

                <meta property="og:title" content="Mutant Remix" />
                <meta property="og:url" content="https://mutant.revolt.chat" />
                <meta property="og:image" content="https://mutant.revolt.chat/assets/embed.png" />
                <meta property="og:description" content="Mutant Remix brings a new twist to the good old emojis that have become a part of our daily conversations." />

                <meta property="twitter:title" content="Mutant Remix" />
                <meta property="twitter:site" content="@revoltchat" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content="https://mutant.revolt.chat/assets/embed.png" />
                <meta property="twitter:image:alt" content='Image consisting of some emojis and the titles "Be diverse." and "Stand out."' />
                <meta property="twitter:description" content="Mutant Remix brings a new twist to the good old emojis that have become a part of our daily conversations." />

                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="720" />
			</Head>
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
			<Hero background="yellow" pad>
				<div>
					<h1>Express yourself in new ways.</h1>
					<p>
						Mutant brings in a bunch of new unique emojis and variations, there’s basically no limit to having emojis the way you truly like.
					</p>
					<Button style='turquoise'>Lemme see those emojis <Emoji codepoint="1f440" /></Button>
				</div>
				<div />
			</Hero>
			<Hero background="blue" pad>
				<div>
					<h1>Plain, simple and just darn cute.</h1>
					<p>
						Mutant Remix pays homage to the good old Android blob emojis and combining the same style with the amazing-looking Mutant Standard emoji pack.
					</p>
				</div>
				<div />
			</Hero>
			<Hero background="orange" pad>
				<div>
					<h1>Want it?<br/>Use it!</h1>
					<p>
						Mutant Standard and Mutant Remix are both licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
					</p>
				</div>
				<div />
			</Hero>
			<Hero background="orange" column pad>
				<div className={styles.title}>
					<h2>So, what am I allowed to do with it?</h2>
					<h2 data-invert="true">Mutant Standard and Remix</h2>
				</div>
				<div className={styles.licensing}>
					<div>
						<div>
							<h3><Emoji codepoint="2705" /> Share the emoji pack with your friends!</h3>
						</div>
						<div>
							<h3><Emoji codepoint="2705" /> Make your own! (make sure to add attribution!)</h3>
							<p>
								You’re free to remix, transform or build upon the Mutant Standard emoji pack, as long as you follow the original Creative Commons license.
							</p>
						</div>
					</div>
					<div>
						<div>
							<h3><Emoji codepoint="26d4-fe0f" /> Use it for any commercial purposes</h3>
							<p>
								You’re not allowed to sell the entirety or parts of the pack or restrict anyone from using it behind a paywall.
							</p>
						</div>
						<div>
							<h3><Emoji codepoint="26d4-fe0f" /> You must redistribute with the same license</h3>
							<p>
								Mutant (also Mutant Remix) are both licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. <br/>
								If you choose to remix, transform or build upon the material, you must redistribute it with the same license as the original.
							</p>
						</div>
					</div>
				</div>
			</Hero>
		</main>
	)
}
