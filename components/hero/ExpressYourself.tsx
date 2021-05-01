import { Button } from "../Button";
import { Emoji } from "../Emoji";
import { Hero } from "../Hero";

export function ExpressYourself() {
    return (
        <Hero background="yellow" pad clamp>
            <div>
                <h1>Express yourself in new ways.</h1>
                <p>
                    Mutant brings in a bunch of new unique emojis and variations, there’s basically no limit to having emojis the way you truly like.
                </p>
                <Button style='turquoise'>Lemme see those emojis <Emoji codepoint="1f440" /></Button>
            </div>
            <div />
        </Hero>
    )
}