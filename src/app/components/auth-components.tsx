import React from 'react'
import { signIn as authSignIn, signOut } from '@/auth'

export function signIn({ provider, ...props }: { provider?: string }) {
	return (
		<form
			action={async () => {
				'use server'
				await authSignIn(provider as string)
			}}
		>
			<div {...props}>サインイン</div>
		</form>
	)
}
