"use client"
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Profile() {

    const {data} = useSession()


    return (
        <>
            <header className="flex items-center justify-end w-full gap-2 border-b-2 h-14">
                <Link href='/'>Inicio</Link>
                <ModeToggle />
            </header>
            <main className="w-full">
                <div className="relative w-full border-b-2">
                    <div className="w-full border-b-2 h-52">
                        <Image
                            className="object-cover w-full h-full"
                            src="/images/wallpeper.webp"
                            width={1200}
                            height={500}
                            alt="wallpeper_image"
                        />
                    </div>
                    <Image width={600} height={600} src={data?.user?.image as string} alt="user_profile" className="absolute object-cover rounded-full w-44 h-44 bottom-5 left-10" />
                    <div className="h-24 ml-64 ">
                        <h2 className="text-xl font-semibold">{data?.user?.name}</h2>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Necessitatibus quaerat duc
                        </span>
                    </div>
                </div>
                <section className="w-full px-3 m-auto mt-10 max-w-screen-2xl">
                    <h2 className="my-5 text-4xl font-bold">Registro de ordenes</h2>
                    <Table className="w-full max-w-screen-lg m-auto">
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </section>
            </main>
        </>
    );
}
