import { motion } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const useOutSideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current?.contains(event.target as Node)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick)
        };
    }, [callback]);
    return ref;
};

export default function Layout() {
    const [current, setCurrent] = useState<Card | null>(null);
    const ref = useOutSideClick(() => setCurrent(null));

    const handleCardClick = (card: Card, event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent event bubbling
        setCurrent(card);
    };

    return (
        <div className="p-40 bg-neutral-200 h-full flex flex-col items-center justify-center gap-14">
            {current && <div className='fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm'></div>}

            {
                current &&
                <motion.div
                    layoutId={`card-parent-${current.title}`}
                    ref={ref}
                    className='flex flex-col gap-6 fixed h-[600px] overflow-y-scroll overflow-x-hidden z-20 m-auto inset-0 w-80 border-neutral-200 p-4 rounded-md bg-white'>
                    <motion.img layoutId={`card-image-${current.src}`} src={current.src} alt={current.src} className='object-cover rounded-lg h-[300px]' />
                    <motion.div

                        layoutId={`card-content-${current.content}`}
                        className='flex flex-col items-start gap-5'>
                        <div className='flex flex-row justify-between w-full'>
                            <div className='flex flex-col gap-1'>
                                <h2 className='font-bold text-xs tracking-tight text-black'>{current.title}</h2>
                                <p className='text-[10px] text-neutral-700'>{current.artist}</p>
                            </div>
                            <div>
                                <Link to={current.ctaLink} className='p-2 bg-green-500 rounded-md text-white text-[10px] cursor-pointer'>
                                    Play
                                </Link>
                            </div>
                        </div>
                        <p className='text-neutral-500 text-[11px]'>{current.description}</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                            filter: 'blur(10px)'
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)'
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        className='text-neutral-500 text-[11px] overflow-x-hidden h-24 overflow-y-auto [mask-image:linear-gradient(to_top,transparent_5%,black_80%)]'>
                        {current.content()}
                    </motion.div>
                </motion.div>
            }
            {
                cards.map((card: Card, idx: any) => (
                    <motion.div
                        layoutId={`card-parent-${card.title}`}
                        whileHover={{
                            rotate: 1
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        onClick={(event) => handleCardClick(card, event)} // Updated click handler
                        key={idx}
                        className="cursor-pointer flex justify-between flex-row items-center bg-white rounded-lg w-[400px] p-2 shadow-sm relative ">
                        <div className="flex flex-row gap-3 items-center">
                            <motion.img layoutId={`card-image-${card.src}`} src={card.src} alt="album cover" className="rounded-md object-cover h-12 w-12" />
                            <motion.div
                                layoutId={`card-content-${card?.content}`}
                                className="flex flex-col gap-1">
                                <p className="text-sm font-medium">{card.title}</p>
                                <p className="text-sm text-neutral-800">{card.artist}</p>
                            </motion.div>
                        </div>
                        <motion.a
                            whileHover={{
                                scale: 0.9
                            }}
                            whileTap={{
                                scale: 1
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent card click when clicking play button
                            className="p-2 bg-green-500 rounded-lg text-white/90 text-sm cursor-pointer hover:bg-green-400"
                            href={card.ctaLink}>
                            play
                        </motion.a>
                        <span
                            className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4 mx-auto "></span>
                    </motion.div >
                ))
            }
        </div >
    )
}

type Card = {
    description: string,
    title: string,
    src: string,
    ctaText: string,
    ctaLink: string,
    content: () => React.ReactNode,
    artist: string
}

const cards: Card[] = [
    {
        title: "Glimpse of Us",
        description: "A melancholic ballad by Joji that explores the lingering emotions of a past relationship.",
        src: "./src/assets/6.jpg",
        ctaText: "Listen Now",
        ctaLink: "https://open.spotify.com/track/2dHHgzDwk4BJdRwy9uXhTO",
        content: () => {
            return (
                <>
                    <p>
                        "Glimpse of Us" is a heartfelt piano-driven song that captures the pain of comparing a new love to someone from the past.
                        Joji's haunting vocals and poetic lyrics make it a standout track in his discography.
                    </p>
                    <ul className="mt-2 list-disc list-inside">
                        <li>Artist: Joji</li>
                        <li>Released: 2022</li>
                        <li>Genre: R&B, Lo-fi</li>
                        <li>Album: Smithereens</li>
                    </ul>
                </>)
        },
        artist: 'Joji'
    },
    {
        title: "Kill Bill",
        description: "A darkly humorous yet emotionally raw song from SZA's critically acclaimed album 'SOS'.",
        src: "./src/assets/2.jpg",
        ctaText: "Listen Now",
        ctaLink: "https://open.spotify.com/track/3OHfY25tqY28d16oZczHc8",
        content: () => {
            return (
                <>
                    <p>
                        "Kill Bill" dives deep into the darker side of heartbreak, blending vulnerability, obsession, and revenge into a hauntingly melodic narrative.
                        SZA's raw lyricism and smooth delivery craft a chilling yet strangely relatable story of post-breakup turmoil.
                        With its minimalist production and emotionally charged vocals, the track captures the fine line between love and madness,
                        making it one of the most talked-about songs from her *SOS* album.
                    </p>
                    <ul className="mt-2 list-disc list-inside">
                        <li>Artist: SZA</li>
                        <li>Released: 2022</li>
                        <li>Genre: Alternative R&B</li>
                        <li>Album: SOS</li>
                    </ul>
                </>
            )
        },
        artist: 'Sza'
    },
    {
        title: "FE!N",
        description: "An intense and hypnotic banger from Travis Scott's genre-blending album 'Utopia', 'FE!N' delivers a sonic experience that merges chaotic energy with razor-sharp precision. The track is a relentless ride through glitchy trap beats, distorted vocals, and futuristic production.",
        src: "./src/assets/1.jpg",
        ctaText: "Listen Now",
        ctaLink: "https://open.spotify.com/track/4xhsWYTOGcal8zt0J161CU",
        content: () => {
            return (
                <>
                    <p>
                        "FE!N" showcases Travis Scott's signature trap production and futuristic soundscape. With hypnotic repetition and
                        an electric feature from Playboi Carti, the song creates a chaotic yet controlled energy that defines *Utopia*.
                    </p>
                    <ul className="mt-2 list-disc list-inside">
                        <li>Artist: Travis Scott (feat. Playboi Carti)</li>
                        <li>Released: 2023</li>
                        <li>Genre: Trap / Experimental Hip-Hop</li>
                        <li>Album: Utopia</li>
                    </ul>
                </>)
        },
        artist: 'Travis Scott'
    },
    {
        title: "Run",
        description: "A soaring track from Joji's 'Nectar' album that blends emotional vocals with intricate guitar work.",
        src: "./src/assets/5.jpg",
        ctaText: "Listen Now",
        ctaLink: "https://open.spotify.com/track/2d9Dydw4k5IEppVXtEMN9g",
        content: () => {
            return (
                <>
                    <p>
                        "Run" showcases Joji's dynamic vocal range as he drifts into a rock-infused sound, backed by reverb-heavy guitar riffs
                        and a deeply atmospheric production. It's a song about longing, distance, and losing someone you love.
                    </p>
                    <ul className="mt-2 list-disc list-inside">
                        <li>Artist: Joji</li>
                        <li>Released: 2020</li>
                        <li>Genre: Alternative R&B / Rock</li>
                        <li>Album: Nectar</li>
                    </ul>
                </>)
        },
        artist: 'Joji'
    },
    {
        title: "Smells Like Teen Spirit",
        description: "The explosive opening track of Nirvana's 'Nevermind' that launched grunge into the mainstream.",
        src: "./src/assets/4.jpg",
        ctaText: "Listen Now",
        ctaLink: "https://open.spotify.com/track/5ghIJDpPoe3CfHMGu71E6T",
        content: () => {
            return (
                <>
                    <p>
                        With gritty guitars, angst-filled lyrics, and Kurt Cobain's raw vocals, "Smells Like Teen Spirit" became a defining anthem
                        of the 90s and propelled Nirvana into global fame. It's often considered the face of the grunge movement.
                    </p>
                    <ul className="mt-2 list-disc list-inside">
                        <li>Artist: Nirvana</li>
                        <li>Released: 1991</li>
                        <li>Genre: Grunge / Alternative Rock</li>
                        <li>Album: Nevermind</li>
                    </ul>
                </>)
        },
        artist: 'Nirvana'
    },
    {
        title: "Time",
        description: "A powerful meditation on the passage of life, time, and regret — one of Pink Floyd's most celebrated tracks.",
        src: "./src/assets/3.jpg",
        ctaText: "Listen Now",
        ctaLink: "https://open.spotify.com/track/3TO7bbrUKrOSPGRTB5MeCz",
        content: () => {
            return (
                <>
                    <p>
                        "Time" opens with a barrage of ticking clocks and evolves into a profound reflection on mortality and wasted moments.
                        David Gilmour's soaring guitar solo and poignant vocals make it a timeless masterpiece.
                    </p>
                    <ul className="mt-2 list-disc list-inside">
                        <li>Artist: Pink Floyd</li>
                        <li>Released: 1973</li>
                        <li>Genre: Progressive Rock</li>
                        <li>Album: The Dark Side of the Moon</li>
                    </ul>
                </>)
        },
        artist: 'Pink Floyd'
    }
];