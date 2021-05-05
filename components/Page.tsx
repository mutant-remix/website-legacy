import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface Props {
    dark: boolean,
    navbar?: boolean,
    children?: ReactNode | ReactNode[]
}

export function Page({ dark, children, navbar }: Props) {
    return (
        <main data-dark={dark}>
			<Head>
				<title>Mutant Remix</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

            { navbar && <Navbar center light={!dark} /> }
			{ children }
			<Footer light={!dark} />
		</main>
    )
}
