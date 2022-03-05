import Head from 'next/head';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Overtunes | Privacy Policy</title>
                <meta name="description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
                <meta property="og:title" content="Overtunes ! Privacy Policy" />
                <meta property="og:description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
                <meta property="og:image" content="/favicon-32x32.png" />
            </Head>

            <Navbar />

            <section className='p-8 lg:px-20'>
                <div className='bg-[#1b1d22] rounded-md px-4 lg:px-10 py-5 lg:py-12 text-gray-200'>
                    <h1 className='text-xl font-semibold'>Privacy Policy</h1>
                    <h2 className='text-lg mt-5 font-semibold'>What information we collect?</h2>
                    <p>We only collect User Ids, Channel Ids, Guild Ids, all thats data we collect is for making Overtunes work properly, such as playlist command, play command and much more.</p>
                    <h2 className='text-lg mt-5 font-semibold'>How we use the information?</h2>
                    <p>We use all information to get your voice channel when you paly a song, get queue for your server, and get your saved playlist with your user id, also getting the prefix when you using the command, know you already vote Overtunes or not.</p>
                    <h2 className='text-lg mt-5 font-semibold'>How we protect our information?</h2>
                    <p>{'We protect the information in our privately database, the database only can used by me "Overtunes Developer", and no one can access the database.'}</p>
                    <h2 className='text-lg mt-5 font-semibold'>What information we share?</h2>
                    <p>We only share user name, as now playing status, you know thats right when you playing a song.</p>
                    <h2 className='text-lg mt-5 font-semibold'>{"What information we don't share?"}</h2>
                    <p>We dont share your guild ids to anyone since its your private data, and we will keep it secret.</p>
                </div>
            </section>

            <Footer />
        </>
    )
}