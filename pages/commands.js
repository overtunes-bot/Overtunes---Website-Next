import Head from 'next/head';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useState } from 'react';
import Music from '../components/commands/music';
import Filter from '../components/commands/filter';
import Settings from '../components/commands/setting';
import Playlist from '../components/commands/Playlist';
import Utils from '../components/commands/utils';

export default function Commands() {

    const [command, setCommand] = useState(<Music />);
    let selected = 'music';

    function changeCommand(content, id) {
        setCommand(content)
    }

    function select(id) {
        document.getElementById(selected).classList.toggle('bg-[#4696e6]')
        document.getElementById(id).classList.toggle('bg-[#223f5c]')
        selected = id;
    }

    return (
        <>
            <Head>
                <title>Overtunes | Commands</title>
                <meta name="description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
                <meta property="og:title" content="Overtunes ! Commands" />
                <meta property="og:description" content="Best music bot for Discord. Supports Spotify, Soundcloud, Deezer and more..." />
                <meta property="og:image" content="/favicon-32x32.png" />
            </Head>

            <Navbar />

            <section className='border-[#3C4652] border-2 p-10  md:px-20 lg:px-32 xl:px-48 flex flex-col md:flex-row'>
                <div className='border-[#3C4652] border-2 p-2'>
                    <div className='border-[#3C4652] border-2 md:w-56 p-2 flex gap-3 md:flex-col flex-wrap text-gray-200 font-mukta text-[15px] md:text-lg lg:text-xl'>
                        <button id='music' onClick={(e) => changeCommand(<Music />)} className='border-[#3C4652] flex-grow bg-[#223f5c] border-2 px-3 py-1 rounded-lg'>
                            MUSIC
                        </button>
                        <button id='filter' onClick={(e) => changeCommand(<Filter />)} className='border-[#3C4652] flex-grow bg-[#223f5c] border-2 px-3 py-1 rounded-lg'>
                            FILTER
                        </button>
                        <button id='settings' onClick={(e) => changeCommand(<Settings />)} className='border-[#3C4652] flex-grow bg-[#223f5c] border-2 px-3 py-1 rounded-lg'>
                            SETTINGS
                        </button>
                        <button id='playlist' onClick={(e) => changeCommand(<Playlist />)} className='border-[#3C4652] flex-grow bg-[#223f5c] border-2 px-3 py-1 rounded-lg'>
                            PLAYLIST
                        </button>
                        <button id='utils' onClick={(e) => changeCommand(<Utils />)} className='border-[#3C4652] flex-grow bg-[#223f5c] border-2 px-3 py-1 rounded-lg'>
                            UTILS
                        </button>
                    </div>
                </div>

                <div id='commands' className='mt-5 md:mt-0 w-full border-[#3C4652] border-2 font-sansPro'>
                    <div className='bg-[#172b55] rounded-lg p-3 m-2'>
                        <h3 className='font-bold text-2xl text-gray-200'>Note:</h3>
                        <p className='font-lato text-gray-200/80 mt-2'>{'- Never includes < > in your message when using the commands.'}</p>
                        <p className='font-lato text-gray-200/80'>- If you have changed the prefix, please use your own prefix</p>
                    </div>
                    {command}
                </div>
            </section>

            <Footer />
        </>
    )
}