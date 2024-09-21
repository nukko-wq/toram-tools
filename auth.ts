import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const allowedEmails = process.env.ALLOWED_EMAILS?.split(',') || []

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],
	basePath: '/api/auth',
	callbacks: {
		authorized({ request, auth }) {
			try {
				const { pathname } = request.nextUrl
				if (pathname === '/monster') return !!auth
				return true
			} catch (err) {
				console.log(err)
			}
		},
		async signIn({ user }) {
			return allowedEmails.includes(user.email ?? '')
		},
	},
})
