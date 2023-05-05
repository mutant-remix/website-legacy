import styles from './ExpressYourself.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Button } from "../Button";
import useMedia from "use-media";
import { Emoji } from "../Emoji";
import { Hero } from "../Hero";
import { useWindowSize } from '../../util/WindowSize';
import Link from 'next/link';

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
const easeInOutQuad = t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

export function ExpressYourself() {
    const { width } = useWindowSize();
    const ref = useRef<HTMLDivElement>();
    let [order, setOrder] = useState(EMOJIS);

    const isSmall = width <= 1050;

    useEffect(() => {
        setOrder(order.sort(() => .5 - Math.random()));
    }, []);

    useEffect(() => {
        if (typeof ref.current === 'undefined') return;
        let el = ref.current;

        let v = 0;
        let lastTime = performance.now();
        let animate = true;

        function nextFrame() {
            if (!animate) return;
            let currentTime = performance.now();
            if (!lastTime) lastTime = currentTime;

            let elapsed = currentTime - lastTime;
            lastTime = currentTime;

            v += (elapsed) * 0.1;
            let display = Math.floor(el.clientWidth / IMAGE_WIDTH);

            if (v >= IMAGE_WIDTH) {
                v = 0;
                let newOrder = [...order.slice(1), order[0]];
                setOrder(newOrder);
                order = newOrder;
            }

            let x = easeInOutQuad(v / IMAGE_WIDTH);
            el.style.transform = `translateX(-${x * IMAGE_WIDTH}px)`;

            for (let i = 0; i < el.children.length; i++) {
                let element = el.children[i] as HTMLImageElement;

                let opacity = 0;
                if (isSmall) {
                    if (i === display + 1) {
                        opacity = 0.7 * x;
                    } else if (i === display) {
                        opacity = 0.7 + 0.3 * x;
                    } else if (i === 0) {
                        opacity = 0.7 - x;
                    } else if (i === 1) {
                        opacity = 1 - 0.3 * x;
                    } else if (i < display) {
                        opacity = 1;
                    }
                } else {
                    if (i === display - 1) {
                        opacity = x;
                    } else if (i === 1) {
                        opacity = 1 - x;
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
                <Link href="/demo">
                    <Button style='turquoise'>Lemme see those emojis <Emoji codepoint="1f440" /></Button>
                </Link>
            </div>
            <div className={styles.container}>
                <div className={styles.scroller} ref={ref}>
                    {order.map(x => <Emoji path={x} key={x} />)}
                </div>
            </div>
        </Hero>
    )
}