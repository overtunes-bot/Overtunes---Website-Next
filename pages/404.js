import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Overtunes | 404</title>
                <meta name="description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
                <meta property="og:title" content="Overtunes ! 404" />
                <meta property="og:description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
                <meta property="og:image" content="/favicon-32x32.png" />
            </Head>

            <Navbar />

            <section className='text-center p-10'>
                <h1 className='text-gray-200/75 text-9xl font-mono'>
                    404
                </h1>
                <p className='text-gray-200 text-xl font-bold'>Oops!</p>
                <p className='text-gray-200 mt-2'>Are you lost?</p>
                <p className='text-gray-200/80 mt-2 font-spline'>If you belive something here, <a href='https://discord.gg/hM8U8cHtwu' rel='noopener noreferrer' target={'_blank'} className='text-[#4097ee]'>let us know!</a></p>
                <div className='flex justify-center mt-5'>
                    <Link href={'/'} passHref><button className='flex text-indigo-500 text-3xl font-spline items-center gap-3'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg> Home</button></Link>
                </div>
            </section>

            <Footer />
        </>
    )
}