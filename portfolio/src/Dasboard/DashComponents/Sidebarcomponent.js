import React from "react";
import { Link } from 'react-router-dom';
import '../Admin.css';

function Sidebarcomponent() {

    return <div>
        <div class="sidebar">
            <Link className="texttt" to='/AddProject.js'>
                <a class="active" href="/"><img className="navbaricon" src="https://img.icons8.com/color/30/000000/add--v1.png" />Add Project</a>
            </Link>
            <Link className="texttt" to='/AdminShopify.js'>
                <a href="/"><img className="navbaricon" src="https://img.icons8.com/color/30/000000/shopify.png" />Shopify Projects</a>
            </Link>
            <Link className="texttt" to='/AdminMERN.js'>

                <a href="/"><img className="navbaricon" src="https://img.icons8.com/dusk/30/000000/react.png" />MERN Projects</a>
            </Link>
            <Link className="texttt" to='/AdminMentoring.js'>
                <a href="/"><img className="navbaricon" src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/30/000000/external-mentorship-professional-mentorship-inipagistudio-mixed-inipagistudio.png" />Mentoring Projects</a>
            </Link>
            <a href="#contact"><img className="navbaricon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/30/000000/external-student-online-learning-kiranshastry-lineal-color-kiranshastry-1.png" />Students</a>
            <a href="#about"><img className="navbaricon" src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/30/000000/external-payment-money-and-economy-itim2101-lineal-color-itim2101-1.png" />Payment</a>
            <a href="#about"><img className="navbaricon" src="https://img.icons8.com/ios-filled/30/000000/circled-left-2.png" />Back</a>
        </div>
    </div>



}

export default Sidebarcomponent;


