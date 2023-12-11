import Dashboard from "@/components/Dashboard"


export default function DashboardLayout ({children}: {children: React.ReactNode}) {
    return (
        <>
        <div className="w-full flex">
            <Dashboard />
            <div className="w-full h-screen overflow-y-scroll">
            {children}
            </div>
        </div>
        </>
    )
}