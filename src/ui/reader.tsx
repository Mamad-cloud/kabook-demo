'use client'

import { useState } from "react"
import { ReactReader } from "react-reader"

export default function Reader( { url }: Readonly<{url: string}> ) {
    const [location, setLocation ] = useState('0')
    console.log(url)
    return (
        <ReactReader url={url} location={location} locationChanged={(epubCfi => setLocation(epubCfi))}/>
    )
}