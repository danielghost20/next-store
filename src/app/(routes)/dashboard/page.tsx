import { getServerSession } from "next-auth"


export default async function Dashboard () {
    const session = await getServerSession()
    console.log(session?.user)
    return (
        <>
            <header className="w-full h-16 border-b-2">

            </header>
            <main className="w-full p-3">
                <h1 className="text-3xl font-semibold my-3">Bienvenido {session?.user.name}</h1>
            </main>
        </>
    )
}