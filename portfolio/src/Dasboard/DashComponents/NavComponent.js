import React from "react";
import '../Admin.css';

function NavComponent() {

    return <div>
        <nav class="navbar navbar-light">
            <div>
                <a class="navbar-brand" href="/">Portfolio`s Dashboard</a>
            </div>
            <div className="logout">
                <img src="https://img.icons8.com/plasticine/30/000000/logout-rounded-left.png" />
                Logout
            </div>
        </nav>
    </div>



}

export default NavComponent;


