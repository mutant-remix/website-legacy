import styles from './ExpressYourself.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Button } from "../Button";
import useMedia from "use-media";
import { Emoji } from "../Emoji";
import { Hero } from "../Hero";

const EMOJIS = [
    "gsr/gsd/misc/so_gay",
    "food_drink_herbs/alcohol_herbs/cannabis_leaf",
    "extra/occult_magic/occult/tarot_sword",
    "people_animals/creatures/fantasy_metahumans/troll",
    "people_animals/creatures/other_mammals/red_panda",
    "expressions/hands/paw/v_paw_fk1",
    "expressions/smileys/happy_fun/party_face",
    "people_animals/creatures/other_mammals/otter",
    "extra/weapons/war_hammer",
    "gsr/gsd/symbols/bisexual_triangles",
    "gsr/gsd/symbols/furry_pride",
    "nature_effects/earth/earth_emea",
    "extra/cyber/crt_test_pattern",
    "extra/occult_magic/magic/magic_wand"
];

const IMAGE_WIDTH = 120 + 20;

export function ExpressYourself() {
    const ref = useRef<HTMLDivElement>();
    const isSmall = useMedia({ maxWidth: '1050px' });
    let [order, setOrder] = useState(EMOJIS.sort(() => .5 - Math.random()));

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
            let display = Math.floor(el.clientWidth / IMAGE_WIDTH);

            if (x >= IMAGE_WIDTH) {
                x = 0;
                let newOrder = [...order.slice(1), order[0]];
                setOrder(newOrder);
                order = newOrder;
            }

            el.style.transform = `translateX(-${x}px)`;

            for (let i=0;i<el.children.length;i++) {
                let element = el.children[i] as HTMLImageElement;
                
                let opacity = 0;
                if (isSmall) {
                    /* if (i === display) {
                        opacity = x / IMAGE_WIDTH;
                    } else if (i === 0) {
                        opacity = 1 - x / IMAGE_WIDTH;
                    } else if (i < display && i > 0) {
                        opacity = 1;
                    } */
                    if (i === display + 1) {
                        opacity = x / IMAGE_WIDTH;
                    } else if (i === 0) {
                        opacity = 1 - x / IMAGE_WIDTH;
                    } else {
                        opacity = 1;
                    }
                } else {
                    if (i === display - 1) {
                        opacity = x / IMAGE_WIDTH;
                    } else if (i === 1) {
                        opacity = 1 - x / IMAGE_WIDTH;
                    } else if (i < display && i > 0) {
                        opacity = 1;
                    }
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