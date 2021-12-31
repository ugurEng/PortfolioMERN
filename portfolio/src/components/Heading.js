import React from "react";
import {Link} from 'react-router-dom';
import './components.css';



function Heading(props) {
    return <section className="homepage-projectsection">
    <div class="container marketing">
    <div class="row ddd" >
      <div class="mentoring col-lg-4 mt-5">
      <Link className="texttt" to='/Coaching.js'>
      <img className="homepage-graphic" style={{ width: 140, height: 140, borderRadius: 400/ 2 }} src="https://cdn.pixabay.com/photo/2017/09/11/11/02/mentoring-2738524_960_720.jpg" alt="Logo" />
        <h2 class="text-dark">Coaching</h2>
        <h2 class="text-dark">Projects</h2>
        <p class="text-dark">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="/">View details &raquo;</a></p>
      </Link>  
      </div>
      <div class="commercial col-lg-4 mt-5">
      <Link className="texttt" to='/Commercial.js'>
      <img className="homepage-graphic" style={{ width: 140, height: 140, borderRadius: 400/ 2 }} src="https://broadwayinfosys.com/blog/wp-content/uploads/2019/07/Mern-Stack-Development-Training-in-Nepal.jpg" alt="Logo" />        
      <h2 class="text-dark">Commercial</h2>
      <h2 class="text-dark">Projects</h2>
        <p class="text-dark">Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="/">View details &raquo;</a></p>
      </Link> 
      </div>
    </div>
    </div>
  </section>;
  }

  export default Heading;