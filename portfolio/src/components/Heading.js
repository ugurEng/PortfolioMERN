import React from "react";
import {Link} from 'react-router-dom';
import '../price.css';



function Heading(props) {
    return <section className="homepage-projectsection">
    <div class="container marketing">
  
    <div class="row">
    
      <div class="col-lg-4 mt-5">
      <Link className="texttt" to='/Mentoring.js'>
      <img className="homepage-graphic" style={{ width: 140, height: 140, borderRadius: 400/ 2 }} src="https://cdn.pixabay.com/photo/2017/09/11/11/02/mentoring-2738524_960_720.jpg" alt="Logo" />
        <h2 class="text-dark">Mentoring</h2>
        <h2 class="text-dark">Projects</h2>
        <p class="text-dark">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="/">View details &raquo;</a></p>
      </Link>  
      </div>

      <div class="col-lg-4 mt-5">
      <Link className="texttt" to='/Mernstack.js'>
      <img className="homepage-graphic" style={{ width: 140, height: 140, borderRadius: 400/ 2 }} src="https://broadwayinfosys.com/blog/wp-content/uploads/2019/07/Mern-Stack-Development-Training-in-Nepal.jpg" alt="Logo" />        
      <h2 class="text-dark">MERN Stack</h2>
      <h2 class="text-dark">Projects</h2>
        <p class="text-dark">Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="/">View details &raquo;</a></p>
      </Link> 
      </div>
      <div class="col-lg-4 mt-5">
      <Link className="texttt" to='/Shopify.js'>
      <img className="homepage-graphic" style={{ width: 140, height: 140, borderRadius: 400/ 2 }} src="https://sm.pcmag.com/pcmag_uk/review/s/shopify/shopify_mn3c.jpg" alt="Logo" />       
       <h2 class="text-dark">Shopify Full Stack</h2>
       <h2 class="text-dark">Projects</h2>
        <p class="text-dark">And lastly this, the thgtgrthrthrthrthrthrthrthrthrthrthird column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="/">View details &raquo;</a></p>
     </Link> 
      </div>
    </div>
    </div>
  </section>;
  }

  export default Heading;