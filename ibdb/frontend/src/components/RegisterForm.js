import React, { useState } from "react";

export default function RegisterForm() {
    
    const [newUsername, setUsername] = useState("")
    const [newPassword, setPassword] = useState("")
    const [newEmail, setEmail] = useState("")
    const newAdmin = new Boolean(false);
    

    async function handleRegisterSubmit(event) {
        event.preventDefault();
        var storedInfo;
        var hit = false;
        await fetch("http://127.0.0.1:8000/users")
        .then((response) => response.json())
        .then(data =>  {
          storedInfo = data;
        })
        for (let i = 0; i < storedInfo.length; i++) {
          if (storedInfo[i].username == newUsername) {
            hit = true;
          }
        }
        if (hit == true) {
            alert("This username already exists.")
        }
        else {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: newUsername,
                    password: newPassword,
                    email: newEmail,
                    admin: newAdmin,
                }),
            };
            fetch("/register", requestOptions)
                .then((response) => response.json())
                .then((data) => window.location.href="/log-in");
        }
         
    }


        return (
            <div className="loginForm">
                <div>
                    <h3 className="signInText">Registrer ny bruker</h3>
                </div>
                <div >
                    <form onSubmit={handleRegisterSubmit} >
                        <div className="input-container">
                            <input
                                className = "loginInputField" type ="text" name="newEmail"  value={newEmail}  onChange={(e) => setEmail(e.target.value)} placeholder="E-post" required>
                            </input>
                        </div>
                        <div className="input-container">
                            <input
                                className = "loginInputField" type ="text" name="newUsername"  value={newUsername}  onChange={(e) => setUsername(e.target.value)} placeholder="Brukernavn" required>
                            </input>
                        </div>
                        <div>
                            <input
                                className = "loginInputField" type="password" name="newpassword" value={newPassword} onChange={(e) => setPassword(e.target.value)} placeholder="Passord" required>
                            </input>
                        </div>
                        <div> 
                            <button type ="submit" className="buttonDefault" id="formButton">Registrer bruker</button>
                        </div>            
                    </form>
                </div>
            </div>  
        );
    }