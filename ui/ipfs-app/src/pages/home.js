import { useNavigate } from "react-router-dom"
import { createSearchParams } from "react-router-dom";

export default function Home (){
    const navigation = useNavigate()
    const openPage = () =>{
        navigation({pathname :'/detail',search:createSearchParams({imgId:'1'}).toString()})
    }
    return(
        <>
            <p onClick={openPage}>Hiii</p>        
        </>
    )
}