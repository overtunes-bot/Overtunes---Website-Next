import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '../loading';

export default function Playlist() {
    const { query } = useRouter();
    const command = [];
    const [commands, setCommands] = useState(<Loading />);

    async function getCommand() {
        const data = await axios.get('https://api.overtunes.me/command')
        data.data.filter(c => c.category === 'filter').map(x => {
            command.push(
                <details key={x.name} className="bg-[#262b30] cursor-pointer rounded-lg px-3 py-4 text-gray-200" >
                    <summary className="font-semibold font-mukta">
                        {(query.prefix ?? "/") + x.name}
                    </summary>
                    <p className="mt-3 font-sansPro bg-black px-2 py-1 rounded-md">{x.description}</p>
                </details>
            )
        })
        setCommands(command)
    }

    return (
        <section onLoadStart={getCommand()}>
            <div className="p-2 flex flex-col gap-3 md:text-xl lg:text-2xl">
                {commands}
            </div>
        </section>
    )
}