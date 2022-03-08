import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            scope: ["identify", "email", "guilds"],
            authorizationEndpoint: "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds",
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET,
})