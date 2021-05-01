import styles from './ExpressYourself.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Button } from "../Button";
import { Emoji } from "../Emoji";
import { Hero } from "../Hero";

const EMOJIS = [
    "gsr/gsd/misc/so_gay",
    "food_drink_herbs/alcohol_herbs/cannabis_leaf",
    "extra/occult_magic/occult/tarot_sword",
    "people_animals/creatures/fantasy_metahumans/troll",
    "people_animals/creatures/other_mammals/red_panda",
    "expressions/hands/paw/v_paw_fk1",
    "objects/party/tada",
    "expressions/smileys/happy_fun/party_face",
    "people_animals/creatures/other_mammals/otter",
    "extra/weapons/flail",
];

EMOJIS.sort(() => Math.random() - 0.5);

export function ExpressYourself() {
    const ref = useRef<HTMLDivElement>();
    let [order, setOrder] = useState(EMOJIS);

    useEffect(() => {
        if (typeof ref.current === 'undefined') return;
        let el = ref.current;

        let x = 0;
        let lastTime = performance.now();
        let animate = true;

        function nextFrame() {
            if (!animate) return;
            let currentTime = performance.now();
            if (!lastTime) lastTime = currentTime;

            let elapsed = currentTime - lastTime;
            lastTime = currentTime;

            x += (elapsed) * 0.1;
            let display = Math.floor(el.clientWidth / 120);

            if (x >= 120) {
                x = 0;
                let newOrder = [...order.slice(1), order[0]];
                setOrder(newOrder);
                order = newOrder;
            }

            el.style.transform = `translateX(-${x}px)`;

            for (let i=0;i<el.children.length;i++) {
                let element = el.children[i] as HTMLImageElement;
                
                let opacity = 0;
                if (i === display - 1) {
                    opacity = x / 120;
                } else if (i === 1) {
                    opacity = 1 - x / 120;
                } else if (i < display && i > 0) {
                    opacity = 1;
                }

                element.style.opacity = opacity.toString();
            }

            requestAnimationFrame(nextFrame);
        }

        requestAnimationFrame(nextFrame);

        return () => { animate = false };
    }, [ref]);

    return (
        <Hero background="yellow" pad clamp>
            <div>
                <h1>Express yourself in new ways.</h1>
                <p>
                    Mutant brings in a bunch of new unique emojis and variations, there’s basically no limit to having emojis the way you truly like.
                </p>
                <Button style='turquoise'>Lemme see those emojis <Emoji codepoint="1f440" /></Button>
            </div>
            <div className={styles.container}>
                <div className={styles.scroller} ref={ref}>
                    {order.map(x => <Emoji path={x} key={x} />)}
                </div>
            </div>
        </Hero>
    )
}