import { useNavigate } from "react-router-dom"
export default function Reg() {
    const navigation = useNavigate()
    const register = () =>{
        const username = document.getElementById('usernameReg').value
        const password = document.getElementById('passwordReg').value
        const cpassword = document.getElementById('passwordReg').value
        const role = document.getElementByName('role').value
        let url = new URL("http://localhost:5000/reg")
        let reg = {
            username :username,
            password:password,
            cpassword:cpassword,
            role:role
        }
        fetch(url,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reg)
        }).then((res)=>{
            res.json().then((data)=>{
                if (data.log === 0)
                    navigation("/")
            })
        })
    }
    return (
        <>
            <input type="text" id="usernameReg" />
            <input type="password" id="passwordReg" />
            <input type="password" id="cpasswordReg" />
            <input type="radio" name="role" value="admin" />admin
            <input type="radio" name="role" value="user" />user
            <input type="button" value="register" onClick={register}/>
        </>
    )
}