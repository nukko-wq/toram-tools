import { auth, signIn, signOut } from '@/auth'
import { redirect } from 'next/navigation'

export default async function SignInForm() {
	const session = await auth()
	const user = session?.user

	if (user) {
		redirect('/monster')
	}

	return (
		<form
			action={async () => {
				'use server'
				await signIn('google')
			}}
		>
			<button type="submit">Sign in with Google</button>
		</form>
	)
}
