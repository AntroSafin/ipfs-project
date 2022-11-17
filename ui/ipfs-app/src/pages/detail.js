import { useEffect, useState } from "react"
import { useGlobalState } from "../App";

export default function Detail() {
    const [isAdmin, setIsAdmin] = useState(false)
    const inputurl = new URL(window.location.href)
    const [id, setId] = useGlobalState('username');
    const imgid = inputurl.searchParams.get('imgId')
    useEffect(() => {
        let url = new URL("http://localhost/loadData")
        url.searchParams.set('imgId', imgid)
        url.searchParams.set('username', id)
        fetch(url).then((res) => {
            res.json().then((data) => {
                if (data.value == true)
                    setIsAdmin(true)
                else
                    setIsAdmin(false)
            })
        })
    }, [])
    return (
        <>
            {isAdmin?(<>
            <p id={data.id}> </p>
            </>
            ):(
            <p>hello</p>            
            )}

        </>
    )
}