"use client"
import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
import { Avatar, AvatarImage, AvatarFallback, } from '@/components/ui/avatar'
import { handleSignOut } from '@/src/app/actions/auth'
import { useRouter } from 'next/navigation'

interface AvatarMenuProps {
  userImage: string | null | undefined
  userName: string | null | undefined
}

const AvatarMenu = ({ userImage, userName }: AvatarMenuProps) => {
  const router = useRouter()

  const onSignOut = async () => {
    await handleSignOut()
    router.refresh()
  }
  return (
    <>
      <MenuTrigger>
        <Button aria-label="Menu" className="outline-none">
          <Avatar className='hidden md:block w-11 h-11 mr-4 outline-none'>
            <AvatarImage src={userImage || ""} alt="ユーザーアバター" className='rounded-full' />
            <AvatarFallback className='bg-slate-300'>{userName?.[0] || 'U'}</AvatarFallback>
          </Avatar>
        </Button>
        <Popover>
          <Menu className='bg-white px-4 py-2 shadow-custom outline-none'>
            <MenuItem className="border-b border-slate-200 p-2 outline-none">My Account</MenuItem>
            <MenuItem className="p-2 outline-none cursor-pointer" onAction={onSignOut}>
              Sign Out
            </MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    </>
  )
}

export default AvatarMenu