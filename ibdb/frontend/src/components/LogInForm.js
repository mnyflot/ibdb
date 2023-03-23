import React, { useState } from "react";



export default function LogInForm () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState()
      
    async function handleSubmit(event) {
        event.preventDefault();
        var storedInfo;
        var hit = false;
        await fetch("http://127.0.0.1:8000/users")
        .then((response) => response.json())
        .then(data =>  {
          storedInfo = data;
        })

        for (let i = 0; i < storedInfo.length; i++) {
          if (storedInfo[i].username == username && storedInfo[i].password == password) {
            hit = true;
            setUser(storedInfo[i])
            sessionStorage.setItem("user", storedInfo?.[i]?.username)
            sessionStorage.setItem("email", storedInfo?.[i]?.email)

            console.log("loginform" , storedInfo[i].admin)
            if (storedInfo[i].admin === true){
                sessionStorage.setItem("admin", storedInfo?.[i]?.admin)
                console.log("admin!!")
            }
            window.location.href="/user/"+username
          }
        }
        if (hit == false) {
          alert("Feil brukernavn eller passord")

        }

       
    }

  

    

    return (
        <div className = "loginForm">
            <div>
                <h3 className="signInText">Sign in</h3>
            </div>
            <div >
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className = "loginInputField" type ="text" name="username"  value={username}  onChange={(e) => setUsername(e.target.value)} placeholder="Username" required>
                        </input>
                    </div>
                    <div>
                        <input
                            className = "loginInputField" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required>
                        </input>
                    </div>
                    <div> 
                        <button className="buttonDefault" id="formButton" type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>  
    );
}
