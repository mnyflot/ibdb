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
            <div className="createAdmin">
                <div>
                    <h3 className="signInText">Register new admin user</h3>
                </div>
                <div >
                    <form onSubmit={handleRegisterSubmit} className="newBookRegistration">
                        <div >
                            <input
                                 type ="text" name="newEmail"  value={newEmail}  onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required>
                            </input>
                        </div>
                        <div >
                            <input
                                 type ="text" name="newUsername"  value={newUsername}  onChange={(e) => setUsername(e.target.value)} placeholder="Username" required>
                            </input>
                        </div>
                        <div>
                            <input
                                 type="password" name="newpassword" value={newPassword} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required>
                            </input>
                        </div>
                        <div> 
                            <button type ="submit" className="addBookButton" id="formButton">Sign up</button>
                        </div>            
                    </form>
                </div>
            </div>  
        );
    }