import { signOut} from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <div className=' border-r p-5 text-white h-screen flex flex-col'>
        <h1 className='text-xl'>NEXTJS</h1>
       <ul className=" flex-grow flex transition-all duration-200  flex-col gap-y-9 mt-6">
        <li className="hover:border-r cursor-pointer">Charts</li>
        <li className="hover:border-r cursor-pointer">Services</li>
        <li className="hover:border-r cursor-pointer">About</li>
        <li className="hover:border-r cursor-pointer"><Link href="/dashboard/products">
        Update Products</Link></li>
       </ul>
      <div className='flex flex-col gap-3'> <Link href={""} className='hover:border-r cursor-pointer'>settings</Link>
              <button
                onClick={() => signOut()}
                className="bg-white  rounded py-1 px-3 hover:bg-opacity-85 text-black"
              >
                Logout
              </button></div>
    </div>
  )
}

export default Sidebar