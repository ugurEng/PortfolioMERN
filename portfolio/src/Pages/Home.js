import React from "react";
import Cardgroup from "../components/Cardgroup";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <section class="bg-primary homepage-firstsection">
          <div class="container">
            <div class="row featurette home-content">
              <div class="col-md-7">
                <h2 style={{ color: 'white' }} class="home-text">Easy Web Application Solution</h2>
                <h2 style={{ color: 'white' }}>Mentoring&Coaching</h2>
                <p style={{ color: 'white', marginTop: "50px" }} class="lead">Hi there, I am Ugur (Full Stack Front-End Web Developer.
                  I am here to help you
                  I solve web application works of companies with my teammates.
                  I also give private lessons from time to time and solve students' questions.
                  I help them implement it. You can always reach me.</p>
              </div>
              <div class="col-md-5">
                <img className="homepage-graphic" style={{ width: 230, height: 230 }} src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="Logo" />
              </div>
            </div>
          </div>
        </section>
        <Heading />
        <Cardgroup />
      </main>
      <Footer/>
    </div>
  )
}

export default Home;