import { useNavigate } from "react-router-dom"
import { useGlobalState } from "../App"
export default function Login (){
  
    const [id, setId] = useGlobalState('username');
    const navigation = useNavigate()
    const login = () =>{
        const username = document.getElementById('inputUsername').value
        const password = document.getElementById('inputPassword').value
        let url = new URL("http://localhost:5000/login")
        url.searchParams.set('username',username)
        url.searchParams.set('password',password)
        fetch(url).then((res)=>{
            res.json().then((data)=>{
                if (data.value === 0){
                    setId(username)
                    navigation("/home")
                }
            })
        })
    }
    
    const register = () =>{
        navigation('/reg')
    }
    return(
        <>
        <input type="text"  id="inputUsername"/>
        <input type="password" id="inputPassword"/>
        <input type="button" value="Login" onClick={login}/>
        <input type="button" value="Register" onClick={register}/>
        </>
    )
}