import React from "react";
import CreateAdminUser from "./CreateAdminUser";
import NewBookPage from "./NewBookPage";

export default function AdminPage() {

    return(
        <div>
            <div>
                <NewBookPage></NewBookPage>
            </div>
            <div >
                <CreateAdminUser></CreateAdminUser>
            </div>
            <div>
                <hr className="underlineMakeNewBook"></hr>
            </div>
        </div>

    )


}   