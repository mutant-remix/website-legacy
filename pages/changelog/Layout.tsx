import Head from "next/head";
import { ReactNode } from "react";
import styles from './Layout.module.scss';
import { Page } from "../../components/Page";

interface Props {
    title?: string
    children?: ReactNode | ReactNode[]
}

export default function Layout({ title, children }: Props) {
    return (
        <Page dark={false} navbar>
            <Head>
                <title>{ title } – Mutant Remix</title>
            </Head>
            <div className={styles.post}>
                { children }
            </div>
        </Page>
    )
}
