export default function Layout( {children} : Readonly<{children : React.ReactNode}> ) {
    return (
        <div>
            <p>Book Page Layout</p>
            {children}
        </div>
    )
}