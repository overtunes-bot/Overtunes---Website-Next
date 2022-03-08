import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: `https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=https%3A%2F%2Fovertunes.me%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=guilds%20email%20identify`
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET,
})