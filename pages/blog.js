import Head from 'next/head';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Overtunes | Blog</title>
                <meta name="description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
                <meta property="og:title" content="Overtunes ! Blog" />
                <meta property="og:description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
                <meta property="og:image" content="/favicon-32x32.png" />
            </Head>

            <Navbar />

            <h1 className='text-6xl text-gray-200 text-center m-10'>TODO</h1>

            <Footer />
        </>
    )
}