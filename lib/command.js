import axios from 'axios';
let data = []

export default async function fetchCommand() {

    if (!data || data.length === 0) {
        console.log('no data')
        console.log(data)
        const fetch = await axios.get("https://spooky-death-production.up.railway.app/command")
        fetch.data.map(x => {
            data.push(
                {
                    name: x.name,
                    description: x.description,
                    category: x.category
                }
            )
        })
        return data
    } else {
        console.log('data')
        return data
    }

}