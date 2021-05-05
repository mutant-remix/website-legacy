import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface Props {
    navbar?: boolean,
    children?: ReactNode | ReactNode[]
}

export function Page({ children, navbar }: Props) {
    return (
        <main>
			<Head>
				<title>Mutant Remix</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

            { navbar && <Navbar center /> }
			{ children }
			<Footer />
		</main>
    )
}
