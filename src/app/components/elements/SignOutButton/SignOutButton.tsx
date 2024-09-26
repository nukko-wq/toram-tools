"use client"
import { signOut } from '@/src/app/actions/auth'

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSignOut()
    }}>
      <button
        type="submit"
        className="py-1.5 px-3 bg-gray-500 hover:bg-gray-600 focus:bg-gray-600 focus:shadow-none active:bg-gray-600 active:shadow-none text-white font-bold rounded border border-transparent text-xs md:text-sm transition-all shadow-md hover:shadow-lg"
      >
        Sign Out
      </button>
    </form>
  )
}