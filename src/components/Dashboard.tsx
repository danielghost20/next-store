"use client"

import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import {BiGhost, BiSitemap} from 'react-icons/bi'
import { FiHome } from "react-icons/fi";
import {GiSettingsKnobs} from 'react-icons/gi'
import {IconType} from 'react-icons'
import { usePathname } from "next/navigation";

type LinksProps = {
    name: string,
    href: string,
    icon: IconType
}

const links: LinksProps[] = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: FiHome
    },
    {
        name: 'Perfil',
        href: '/dashboard/profile',
        icon: AiOutlineUser
    },
    {
        name: 'Ajustes',
        href: '/dashboard/settings',
        icon: GiSettingsKnobs
    },
    {
        name: 'Registro de compras',
        href:  '/dashboard/purchases',
        icon: BiSitemap
    }
]

export default function Dashboard () {
    const path = usePathname()
    return (
        <div className="max-w-xs w-full h-screen flex flex-col p-3 border-r-2">
        <div className="flex w-full items-center mt-2 mb-5 justify-start gap-2">
            <BiGhost className="text-xl" />
            <span className="text-lg font-semibold">next-store</span>
        </div>
        {
            links.map(link => (
        <Link key={link.href} className={`text-base font-medium flex items-center mb-3 p-3 rounded-md gap-3 ${link.href === path ? 'bg-foreground text-background': ''}`} href={link.href}>{<link.icon />} {link.name}</Link>
            ))
        }

    </div>
    )
}