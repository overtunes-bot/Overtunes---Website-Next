import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: '862875722339319828',
            clientSecret: '9Dr7Ct2zwOVtWTZo_U0T128KwOOXCw7g',
        })
    ],
})