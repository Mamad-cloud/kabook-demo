export default function page( {searchParams} : {searchParams?: {book?: string} } ) {
    

    return (
        <>
            <p>
                {searchParams?.book}
            </p>
        </>
    )

}