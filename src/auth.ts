import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                // Mock logic for now until DB is connected
                if (credentials.email === "admin@nuqwa.com" && credentials.password === "admin") {
                    return { id: "1", name: "Admin User", email: "admin@nuqwa.com", role: "ADMIN" }
                }
                return null
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (token?.sub) {
                session.user.id = token.sub;
                // session.user.role = token.role; // Add role to session
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                // token.role = user.role;
            }
            return token;
        }
    },
    pages: {
        signIn: '/login',
    }
})
