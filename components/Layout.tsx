import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

interface LayoutProps {
    children: any
}

const Layout = ({ children }: any) => {
    return (
        <>
        <div>
            {children}
        </div>
        </>
    )
} 