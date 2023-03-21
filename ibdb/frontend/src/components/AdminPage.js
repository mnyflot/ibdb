import React from "react";
import CreateAdminUser from "./CreateAdminUser";
import NewBookPage from "./NewBookPage";

export default function AdminPage() {

    return(
        <div>
            <h3 className="categoryFrontpage">Administrator</h3>
            <hr className="underlineFrontpage"></hr>
            <div className="adminFeatures">
                <div>
                    <NewBookPage></NewBookPage>
                </div>
                <div >
                    <CreateAdminUser></CreateAdminUser>
                </div>
            </div>
           
            <div>
                <hr className="underlineMakeNewBook"></hr>
            </div>
        </div>

    )


}   