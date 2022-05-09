import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from "react";

export default function Invite() {
    const query = useRouter();

    useEffect(() => {
        query.push(`https://discord.com/api/oauth2/authorize?client_id=873101608467185684&permissions=8&scope=bot%20applications.commands`)
    });

    return (<>
        <Head>
            <title>{"Invite Overtunes"}</title>
            <meta name="description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
            <meta property="og:title" content={"Invite Overtunes"} />
            <meta property="og:description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
            <meta property="og:image" content="/favicon-32x32.png" />
        </Head>
    </>)
}
