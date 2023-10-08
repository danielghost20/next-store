import { createContext, useContext } from "react";

const userContext = createContext({})

export function UserProvider({ children }: { children: React.ReactNode }) {
    const userData = {}

    return (
        <userContext.Provider value={userData}>
            {children}
        </userContext.Provider>
    )
}