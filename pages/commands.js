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

    const emojis = ["😗", "😱", "😃", "😯", "🤩"]
    const [command, setCommand] = useState(<Music />);
    const [selected, setSelected] = useState('music');

    function changeCommand(content, id) {
        setCommand(content)
        setSelected(id)
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

            <section className='p-8 md:px-20 lg:px-32 xl:px-48 flex flex-col'>
                <div className='px-2 md:px-40 lg:px-60'>
                    <div className='bg-[#1b1d22] h-10  md:h-12 w-full rounded-md'></div>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <div className='px-2 mt-4'>
                        <div className='bg-[#1b1d22] md:w-56 px-3 py-5 rounded-lg flex-grow-0 flex gap-3 md:flex-col flex-wrap text-gray-200 font-mukta text-[15px] md:text-lg lg:text-xl'>
                            <button id='music' onClick={(e) => [changeCommand(<Music />, e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'music') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                MUSIC
                            </button>
                            <button id='filter' onClick={(e) => [changeCommand(<Filter />, e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'filter') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                FILTER
                            </button>
                            <button id='settings' onClick={(e) => [changeCommand(<Settings />, e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'settings') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                SETTINGS
                            </button>
                            <button id='playlist' onClick={(e) => [changeCommand(<Playlist />, e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'playlist') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                PLAYLIST
                            </button>
                            <button id='utils' onClick={(e) => [changeCommand(<Utils />, e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'utils') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                UTILS
                            </button>
                        </div>
                    </div>

                    <div id='commands' className='mt-2 w-full font-sansPro'>
                        <div className='bg-[#262b30] rounded-lg p-3 m-2'>
                            <h3 className='font-bold text-2xl text-gray-200'>{emojis[Math.floor(Math.random() * emojis.length)]} Slashies</h3>
                            <p className='font-lato text-gray-200 mt-2 ml-1 md:text-lg lg:text-xl'>Now you can interact with Overtunes using <span className='bg-black px-1 rounded'>/</span> as a universal prefix</p>
                            <p className='font-lato text-gray-200 ml-1 md:text-lg lg:text-xl'>To get started type <span className='bg-black px-1 rounded'>/help</span></p>
                        </div>
                        {command}
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}