import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Music(req, res) {

    const { query } = useRouter();
    const command = [];
    const [commands, setCommands] = useState();

    async function getCommand() {
        const data = await axios.get('http://api.overtunes.me:3009/command')
        data.data.filter(c => c.category === 'music').map(x => {
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
        <section onLoad={getCommand()}>
            <div className="p-2 flex flex-col gap-3 md:text-xl lg:text-2xl">
                {commands}
            </div>
        </section>
    )
}