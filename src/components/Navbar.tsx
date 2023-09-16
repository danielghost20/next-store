'use client'

import Link from 'next/link'
import { FiGithub, FiShoppingBag, FiSearch } from 'react-icons/fi'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import { ModeToggle } from './ui/ModeToggle'
import { Input } from './ui/Input'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full h-20 px-3 bordder-b-2">
            <Link className='p-2 border-2 rounded-md' href='/'>
                <FiShoppingBag className="text-xl" />
            </Link>
            <div className='flex items-center gap-3 border-2 rounded-md px-2 pý-5'>
                <Input type='search' placeholder='Buscar' className='border-none outline-none w-96' />
                <FiSearch className="text-xl" />
            </div>
            <div className='flex gap-2'>
                <a className='flex items-center p-2 border-2 rounded-md'>
                    <FiGithub className="text-xl" />
                </a>
                <span className='flex items-center p-1 border-2 rounded-md'>
                    <LiaShoppingCartSolid className="text-3xl" />
                </span>
                <ModeToggle />
            </div>
        </nav>
    )
}