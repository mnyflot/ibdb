import React from "react";
import CreateAdminUser from "./CreateAdminUser";
import NewBookPage from "./NewBookPage";

export default function AdminPage() {

    return(
        <div>
            <NewBookPage></NewBookPage>

            <div >
                <CreateAdminUser></CreateAdminUser>
            </div>
        </div>

    )


}   