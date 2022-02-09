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

            <section className='border-[#3C4652] border-2 p-8'>
                <div className='border-[#3C4652] border-2 p-2 flex flex-col gap-4 md:flex-row md:gap-20'>
                    <div className='bg-[#223f5c] p-4 rounded-lg'>
                        <h1 className='text-xl text-white font-bold'>
                            Got Verified
                        </h1>
                        <p className='mt-5 text-gray-200/90'>Overtunes finally got verified by Discord 🎉</p>
                        <p className='text-sm mt-3 text-gray-400'>01/12/2021</p>
                    </div>
                    <div className='bg-[#223f5c] p-4 rounded-lg'>
                        <h1 className='text-xl text-white font-bold'>
                            Slashies 😱
                        </h1>
                        <p className='mt-5 text-gray-200/90'>Now Overtunes will only support slash commands</p>
                        <p className='text-sm mt-3 text-gray-400'>09/02/2022</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}