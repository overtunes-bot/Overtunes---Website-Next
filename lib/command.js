import { createClient } from 'redis';
import axios from 'axios';

const client = createClient({ url: "redis://default:uBYPNSJd8jN2LxbQpZrf@containers-us-west-27.railway.app:5897" });

client.connect()

export default async function fetchCommand() {

    const command = await client.get('webCommand');
    if (!command) {
        let dataArray = [];
        const data = await axios.get('http://api.overtunes.me:3009/command')
        data.data.map(x => {
            dataArray.push({
                name: x.name,
                description: x.description,
                category: x.category
            })
            client.setEx('webCommand', 3600, JSON.stringify(dataArray));
            console.log('fetched from api');
            return dataArray;
        })
    } else {
        console.log("no api call");
        return JSON.parse(command);
    }

}