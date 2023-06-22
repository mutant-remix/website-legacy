import { Hero } from "../Hero";
import { Fragment } from "react";
import { Emoji } from "../Emoji";
import styles from './LicensingInformation.module.scss';

export function LicensingInformation() {
    return (
        <Fragment>
            <Hero background="orange" pad clamp>
				<div>
					<h1>Want it?<br/>Use it!</h1>
					<p>
						Mutant Standard and Mutant Remix are both licensed under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
					</p>
				</div>
				<img src="/cc.svg" className={styles.cc} />
			</Hero>
			<Hero background="orange" column pad clamp>
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
							<h3><Emoji codepoint="2705" /> Make your own!</h3>
							<p>
								You're free to remix, transform or build upon the Mutant emoji packs, as long as you follow the original Creative Commons license. Don't forget to include attribution!
							</p>
						</div>
					</div>
					<div>
						<div>
							<h3><Emoji codepoint="26d4-fe0f" /> Use it for any commercial purposes</h3>
							<p>
								You're not allowed to sell the entirety or parts of the pack or restrict people from using it (e.g. by putting it behind a paywall).
							</p>
						</div>
						<div>
							<h3><Emoji codepoint="26d4-fe0f" /> Distribute it with another license</h3>
							<p>
								Mutant Standard and Mutant Remix are both licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. <br/>
								If you choose to remix, transform or build upon the emoji packs, you must redistribute your changes under the same license.
							</p>
						</div>
					</div>
				</div>
			</Hero>
        </Fragment>
    )
}
