import { Hero } from "../Hero";

export function PlainAndSimple() {
    return (
        <Hero background="blue" pad clamp>
            <div>
                <h1>Plain, simple and just darn cute.</h1>
                <p>
                    Mutant Remix pays homage to the good old Android blob emojis, combining them with the incredible Mutant Standard emoji pack. You do the math.
                </p>
            </div>
            <img src="/addition.svg" />
        </Hero>
    )
}
