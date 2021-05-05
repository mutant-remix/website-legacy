import Head from 'next/head'
import { Page } from '../components/Page'
import { Clamp } from '../components/Clamp'
import styles from '../styles/Demo.module.scss'
import { DISCORD_INVITE, RELEASE_DATE, VERSION } from '../manifest'

export default function Home() {
	return (
        <Page dark navbar>
			<Head>
                <title>Demo – Mutant Remix</title>

                <meta property="og:title" content="Demo – Mutant Remix" />
                <meta property="og:url" content="https://mutant.revolt.chat/demo" />
                <meta property="og:description" content="View the Mutant Remix emoji sets." />
			</Head>

            <Clamp>
                <h1>Demo</h1>
                <h3 className={styles.version}>version {VERSION} (released {RELEASE_DATE})</h3>
                <a href={DISCORD_INVITE} target="_blank">
                    <h3>View on Discord</h3>
                </a>
            </Clamp>
        </Page>
	)
}
