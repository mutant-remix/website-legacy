import Head from 'next/head'
import { Clamp } from '../components/Clamp'
import { Page } from '../components/Page'

export default function Home() {
	return (
        <Page navbar>
			<Head>
                <title>Demo – Mutant Remix</title>

                <meta property="og:title" content="Demo – Mutant Remix" />
                <meta property="og:url" content="https://mutant.revolt.chat/demo" />
                <meta property="og:description" content="View the Mutant Remix emoji sets." />
			</Head>

            <Clamp>
                <h1>Demo</h1>
            </Clamp>
        </Page>
	)
}
