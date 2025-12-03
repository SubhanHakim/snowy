import React from 'react'

export default function Header({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-transparent">
            <header className="absolute inset-x-0 top-0 z-50">{children}</header>
        </div>
    )
}
