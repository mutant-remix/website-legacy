import Head from 'next/head'
import Link from 'next/link';
import { Page } from '../components/Page'
import { Clamp } from '../components/Clamp'
import styles from '../styles/Download.module.scss';
import { RELEASE_DATE, VERSION } from '../manifest';

export default function Home() {
    function genLink(path: string) {
        return `https://static.revolt.chat/mutant/downloads/${VERSION}/mtnt_${VERSION}_${path}`;
    }

    return (
        <Page dark navbar>
            <Head>
                <title>Download – Mutant Remix</title>

                <meta property="og:title" content="Download – Mutant Remix" />
                <meta property="og:url" content="https://mutant.revolt.chat/download" />
                <meta property="og:description" content="Download the Mutant Remix emoji sets." />
            </Head>

            <Clamp>
                <h1>Download</h1>
                <h3 className={styles.version}>version {VERSION} (released {RELEASE_DATE})</h3>
                <Link href="/changelog">
                    <h3>Open Changelog</h3>
                </Link>
                <div className={styles.downloads}>
                    <div className={styles.column}>
                        <h2>Shortcode Format</h2>
                        <p>
                            Structured folder tree with categories containing files for each relevant emoji.<br />
                            Uses human-readable names.
                        </p>
                        <p><b>SVG</b> – Vector graphics.</p>
                        <a href={genLink('short_svg.tar.gz')} download>
                            <div className={styles.button} data-type="svg">
                                <span>Download</span>
                            </div>
                        </a>
                        <p><b>PNG</b> – Lossless raster graphics.</p>
                        <div className={styles.button} data-type="png">
                            <span>PNG</span>
                            <a href={genLink('short_png32.tar.gz')} download>x32</a>
                            <a href={genLink('short_png128.tar.gz')} download>x128</a>
                            <a href={genLink('short_png512.tar.gz')} download>x512</a>
                        </div>
                        <p><b>WebP</b> – Efficient lossless raster graphics, but with less compatibility.</p>
                        <div className={styles.button} data-type="webp">
                            <span>WebP</span>
                            <a href={genLink('short_webp32.tar.gz')} download>x32</a>
                            <a href={genLink('short_webp128.tar.gz')} download>x128</a>
                        </div>
                        <p><b>Mastodon</b> – Specially formatted package for Mastodon instances. </p>
                        <a href={genLink('masto.tar.gz')} download>
                            <div className={styles.button} data-type="masto">
                                <span>Download</span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.column}>
                        <h2>Codepoint Format</h2>
                        <p>
                            Flat folder full of single emoji images, filename is the emoji's Unicode codepoint.<br />
                            Some emojis which don't have codepoints may not be included in these!
                        </p>
                        <p><b>SVG</b> – Vector graphics.</p>
                        <a href={genLink('code_svg.tar.gz')} download>
                            <div className={styles.button} data-type="svg">
                                <span>Download</span>
                            </div>
                        </a>
                        <p><b>PNG</b> – Lossless raster graphics.</p>
                        <div className={styles.button} data-type="png">
                            <span>PNG</span>
                            <a href={genLink('code_png32.tar.gz')} download>x32</a>
                            <a href={genLink('code_png128.tar.gz')} download>x128</a>
                            <a href={genLink('code_png512.tar.gz')} download>x512</a>
                        </div>
                        <p><b>WebP</b> – Efficient lossless raster graphics, but with less compatibility.</p>
                        <div className={styles.button} data-type="webp">
                            <span>WebP</span>
                            <a href={genLink('code_webp32.tar.gz')} download>x32</a>
                            <a href={genLink('code_webp128.tar.gz')} download>x128</a>
                        </div>
                    </div>
                </div>
                <div className={styles.downloads}>
                    <div className={styles.column}>
                        <h2>Other</h2>
                        <p><b>Metadata</b> – JSON file containing all of the metadata for the Mutant Remix emoji.</p>
                        <a href={genLink('data.json')} target="_blank">
                            <div className={styles.button}>
                                <span>Download JSON</span>
                            </div>
                        </a>
                        <p><b>Build Files</b> – Build files for Mutant Remix are available on Git.</p>
                        <a href="https://gitlab.insrt.uk/revolt/mutant-remix/build" target="_blank">
                            <div className={styles.button}>
                                <span>Take me to Git</span>
                            </div>
                        </a>
                    </div>
                </div>
            </Clamp>
        </Page>
    )
}
