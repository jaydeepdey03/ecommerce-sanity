import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div className='layout'>
            <Head><title>Ecommerce-Sanity</title></Head>
            <header><Navbar /></header>
        </div>

    )
}

export default Layout
