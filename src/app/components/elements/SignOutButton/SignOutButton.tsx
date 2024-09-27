import { handleSignOut } from "@/src/app/actions/auth"

export function SignOut() {
  return (
    <form action={handleSignOut}>
      <button type="submit">Sign Out</button>
    </form>
  )
}