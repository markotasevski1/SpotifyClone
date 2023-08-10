'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { Button } from './Button'
interface HeaderProps {
  children: React.ReactNode
  className?: string
}
export function Header({ children, className }: HeaderProps) {
  const router = useRouter()
  const handleLogout = () => {
    //handle logout
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
          <>
            <div>
              <Button className="bg-transparent text-neutra-300 font-medium">
                Sign up
              </Button>
            </div>
            <div>
              <Button className="bg-white px-6 py-2">Sign up</Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  )
}
