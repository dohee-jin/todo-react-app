import React from "react";
import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="mx-auto max-w-3xl p-6">
                <Outlet />
            </main>
        </div>
    )
}