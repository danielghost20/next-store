"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Category } from "@/interfaces/product.interface"

  import Link from "next/link"
   
  export default function SelectDemo({categories, setCategory}: {categories: Category[], setCategory: any}) {

    const handleSelectItemId = (id: number) => {
        console.log(id)
        setCategory(id)
    }

    return (
        <DropdownMenu>
        <DropdownMenuTrigger className="p-2 rounded-md border-2 outline-none">Categorias</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="cursor-pointer" onClick={() => handleSelectItemId(0)}>Todas</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {
            categories.map(item => (
                <DropdownMenuItem key={item.id} onClick={() => handleSelectItemId(item.id)}>{item.name}</DropdownMenuItem>
            ))
          }
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }