"use client"
import { Provider } from "react-redux"
import { store } from './store'
import React from "react"


type ChildrenProps = {
    children: React.ReactNode
}

export function Providers({ children }: ChildrenProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}