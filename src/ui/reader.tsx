'use client'

import { useState } from "react"
import { ReactReader} from "react-reader"

// TODO: make the reader support rtl

export default function Reader( { url }: Readonly<{url: string}> ) {
    const [location, setLocation ] = useState('0')
    return (
        <ReactReader swipeable url={url} location={location} locationChanged={(epubCfi => setLocation(epubCfi))}/>
    )
}