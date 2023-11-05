"use client"
import { useSession } from "next-auth/react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"
import Link from "next/link"
  import {AiOutlineUser} from 'react-icons/ai'

  export default function Dropdown () {

    const {data: session} = useSession()

    return (
    <DropdownMenu>
  <DropdownMenuTrigger className="p-2 rounded-md border-2 outline-none"><AiOutlineUser className="text-2xl"/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>ghost ?</DropdownMenuItem>
    {
      session?.user ? 
      <>
      <DropdownMenuItem><Link className="w-full" href='/dashboard'>Dahboard</Link></DropdownMenuItem>
      <DropdownMenuItem onClick={() => signOut()}>Cerrar Sesión</DropdownMenuItem>
      </>
      :
      <DropdownMenuItem><Link className="w-full" href='/auth/login'>Iniciar Sesión</Link></DropdownMenuItem>
      
    }
  </DropdownMenuContent>
</DropdownMenu>
    )
  }