import Head from 'next/head';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useState } from 'react';
import axios from 'axios';
import Loading from '../components/loading';
import commandJson from "../lib/command.json";
import { useRouter } from 'next/router';

export default function Commands() {

    const { query } = useRouter();
    const emojis = ["😗", "😱", "😃", "😯", "🤩"]
    const [command, setCommand] = useState(<Loading />);
    const [selected, setSelected] = useState();
    const [running, setRunning] = useState(false)
    const [listCommand, setListCommand] = useState([]);
    let renderList = []


    function makeJsx(name, description) {
        return (
            <details key={name} className="bg-[#262b30] cursor-pointer rounded-lg px-3 py-4 text-gray-200" >
                <summary className="font-semibold font-mukta">
                    {(query.prefix ?? "/") + name}
                </summary>
                <p className="mt-3 font-sansPro bg-black px-2 py-1 rounded-md">{description}</p>
            </details>
        )
    }

    if (!running) {
        changeCommand('music')
        setRunning(true)
    }

    function changeCommand(id) {

        if (listCommand.length === 0) {
            axios.get('https://api.overtunes.me/command').then(res => {
                res.data.map(x => {
                    listCommand.push(
                        {
                            name: x.name,
                            description: x.description,
                            category: x.category
                        }
                    )
                }).

                    listCommand.filter(c => c.category === id).map(x => {
                        renderList.push(makeJsx(x.name, x.description))
                    })
                setCommand(renderList)
                setSelected(id)
            }).catch(() => {
                console.log("Failed to request to Api, using old data")
                commandJson.filter(c => c.category === id).map(x => {
                    renderList.push(makeJsx(x.name, x.description))
                })
                setCommand(renderList)
                setSelected(id)
            })
        } else {
            listCommand.filter(c => c.category === id).map(x => {
                renderList.push(makeJsx(x.name, x.description))
            })
            setCommand(renderList)
            setSelected(id)
        }
    }

    function search(e) {
        if (e.target.value === "") {
            changeCommand(selected)
            return
        }
        let search = e.target.value.toLowerCase()
        let filtered = []
        listCommand.map(x => {
            if (x.name.toLowerCase().includes(search)) {
                filtered.push(makeJsx(x.name, x.description))
            }
        })
        setCommand(filtered)
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

            <amp-ad width="100vw" height="320"
                type="adsense"
                data-ad-client="ca-pub-2622884275844647"
                data-ad-slot="1878054264"
                data-auto-format="rspv"
                data-full-width="">
                <div overflow=""></div>
            </amp-ad>

            <script async="async" data-cfasync="false" src="https://pl17086516.effectivecpmcontent.com/6abd714c9de46feb28a0bd2902ef9caf/invoke.js"></script>

            <section className='p-8 md:px-20 lg:px-32 xl:px-48 flex flex-col'>
                <div className='px-2 md:px-40 lg:px-60'>
                    <input onInput={search} type={'text'} placeholder={'🔎 Search Command'} className='bg-[#1b1d22] text-gray-200/90 px-4 py-1 focus:outline-none h-10  md:h-12 w-full rounded-md'></input>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <div className='px-2 mt-4'>
                        <div className='bg-[#1b1d22] md:w-56 px-3 py-5 rounded-lg flex-grow-0 flex gap-3 md:flex-col flex-wrap text-gray-200 font-mukta text-[15px] md:text-lg lg:text-xl'>
                            <button id='music' onClick={(e) => [changeCommand(e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'music') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                MUSIC
                            </button>
                            <button id='filter' onClick={(e) => [changeCommand(e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'filter') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                FILTER
                            </button>
                            <button id='setting' onClick={(e) => [changeCommand(e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'setting') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                SETTINGS
                            </button>
                            <button id='playlist' onClick={(e) => [changeCommand(e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'playlist') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                PLAYLIST
                            </button>
                            <button id='util' onClick={(e) => [changeCommand(e.target.id)]} className={`flex-grow md:flex-grow-0 ${(selected == 'util') ? 'bg-[#4696e6]' : 'bg-[#262b30]'}  px-3 py-1 rounded-md`}>
                                UTILS
                            </button>
                        </div>
                        <div className='flex-col mt-5 hidden md:flex'>
                            <p className='text-center text-gray-200/50'>Advertisement</p>
                            <div className='w-full h-auto' id="container-6abd714c9de46feb28a0bd2902ef9caf"></div>
                        </div>
                    </div>

                    <div id='commands' className='mt-2 w-full font-sansPro'>
                        <div className='bg-[#262b30] rounded-lg p-3 m-2'>
                            <h3 className='font-bold text-2xl text-gray-200'>{emojis[Math.floor(Math.random() * emojis.length)]} Slashies</h3>
                            <p className='font-lato text-gray-200 mt-2 ml-1 md:text-lg lg:text-xl'>Now you can interact with Overtunes using <span className='bg-black px-1 rounded'>/</span> as a universal prefix</p>
                            <p className='font-lato text-gray-200 ml-1 md:text-lg lg:text-xl'>To get started type <span className='bg-black px-1 rounded'>/help</span></p>
                        </div>
                        <div className='p-2 flex flex-col gap-3 md:text-xl lg:text-2xl'>
                            {command}
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}