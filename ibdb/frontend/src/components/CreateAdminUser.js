import React, { Component, useState } from "react";

export default function CreateAdminUser() {
    
    const [newUsername, setUsername] = useState("")
    const [newPassword, setPassword] = useState("")
    const [newEmail, setEmail] = useState("")
    const newAdmin = new Boolean(true);

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
        }
         
    }


        return (
            <div className="newBookRegistration">
                <div>
                    <h3 className="categoryFrontpage">Register new admin user</h3>
                    <hr className="underlineMakeNewBook"></hr>
                </div>
                    <form onSubmit={handleRegisterSubmit}>
                        
                            <input
                                className="newAdminInputField" type ="text" name="newEmail"  value={newEmail}  onChange={(e) => setEmail(e.target.value)} placeholder="Epost" required>
                            </input>
                        
                            <input
                                className="newAdminInputField" type ="text" name="newUsername"  value={newUsername}  onChange={(e) => setUsername(e.target.value)} placeholder="Brukernavn" required>
                            </input>
                        
                        
                        <input
                            className="newAdminInputField" type="password" name="newpassword" value={newPassword} onChange={(e) => setPassword(e.target.value)} placeholder="Passord" required>
                        </input>
                        
                       
                         <button type ="submit" className="addBookButton">Registrer admin</button>
                                
                    </form>
            </div>  
        );
    }