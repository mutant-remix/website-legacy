import Head from 'next/head'
import { Page } from '../components/Page'
import { Clamp } from '../components/Clamp'
import styles from '../styles/Changelog.module.scss'
import Link from 'next/link'

export default function Home() {
	return (
        <Page dark={false} navbar>
			<Head>
                <title>Changelog – Mutant Remix</title>

                <meta property="og:title" content="Changelog – Mutant Remix" />
                <meta property="og:url" content="https://mutant.revolt.chat/demo" />
                <meta property="og:description" content="View the Mutant Remix emoji sets." />
			</Head>

            <Clamp>
                <h1>Changelog</h1>

                <ul className={styles.list}>
                    <li>
                        <Link href="/changelog/1">
                            <a>
                                <b>05. May 2021</b> Release 1.0: Welcome!
                            </a>
                        </Link>
                    </li>
                </ul>
            </Clamp>
        </Page>
	)
}
