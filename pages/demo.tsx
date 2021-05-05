import Head from 'next/head'
import Image from 'next/image';
import { Page } from '../components/Page'
import { Clamp } from '../components/Clamp'
import styles from '../styles/Demo.module.scss'

import data from '../public/data.json';
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
                    <h3>Try on Discord</h3>
                </a>
                { Object.keys(data)
                    .map(cat => <Category key={cat} title={cat === 'gsr' ? 'Gender, Relationships and Sexuality' : cat} emojis={data[cat]} />) }
            </Clamp>
        </Page>
	)
}

function Category({ emojis, title }: { emojis: string[], title: string }) {
    return (
        <div className={styles.category}>
            <h4>{ title.replace(/_/g, ' / ') }</h4>
            <div>
            {
                emojis
                .filter(x => !x.match(/ /g))
                .map(path =>
                    <img
                        src={`https://static.revolt.chat/mutant/short/${path}?v=${VERSION}`}
                        className={styles.image}
                        width={64}
                        height={64}
                        key={path} />
                )
            }
            </div>
        </div>
    )
}
