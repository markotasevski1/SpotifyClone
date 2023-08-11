'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { Button } from './Button'
import useAuthModal from '@/hooks/useAuthModel'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@/hooks/useUser'
import { FaUserAlt } from 'react-icons/fa'
interface HeaderProps {
  children: React.ReactNode
  className?: string
}
export function Header({ children, className }: HeaderProps) {
  const router = useRouter()
  const authModal = useAuthModal()
  const superbaseClient = useSupabaseClient()

  const { user, subscription } = useUser()

  const handleLogout = async () => {
    const { error } = await superbaseClient.auth.signOut()
    // TODO: Reset any playing songs
    router.refresh()
    if (error) {
      console.log(error)
    }
  }
  return (
    <div className={twMerge('h-fit bg-gradient-to-b from-emerald-800 p-6')}>
      <div className=" w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back}
            className="align-center justify-center flex rounded-full hover:opacity-75 transition bg-black"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button className="align-center justify-center flex rounded-full hover:opacity-75 transition bg-black">
            <RxCaretRight
              onClick={() => router.forward}
              size={35}
              className="text-white"
            />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="flex bg-white rounded-full p-2 hover:opacity-75 transition items-center justify-center">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="flex bg-white rounded-full p-2 hover:opacity-75 transition items-center justify-center">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className=" bg-white px-4 py-2">
                Logout
              </Button>{' '}
              <Button onClick={() => router.push('/account')}>
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-transparent text-neutra-300 font-medium"
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}
