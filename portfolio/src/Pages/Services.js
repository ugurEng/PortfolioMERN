import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Services.css';




function Services() {
    return (
        <div>
            <div> <Header></Header></div>
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

            <section id="service-2" class="section-padding pb-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="service-box-2 mb-5">
          <span>01</span>
          <h4>Best <br/>Analytics Audits</h4>
          <p class="mb-0">We have had the pleasure of partnering with a wide array of brands ranging from tech startups to Fortune 500 enterprises.</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-box-2 mb-5">
          <span>02</span>
          <h4>Deep <br/>Technical SEO</h4>
          <p class="mb-0">Over the last decade, we have had the pleasure of partnering with a wide array of brands ranging
            enterprises.</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-box-2 mb-5">
          <span>03</span>
          <h4>Modern <br/>Keyword Analysis</h4>
          <p class="mb-0">Over the last decade a wide array of brands ranging from tech startups to Fortune 500 enterprises.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section pt-0">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-5 col-sm-12 col-md-6 mb-5 mb-lg-0">
        <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="feature bg" class="img-fluid"/>
      </div>

      <div class="col-lg-7 pl-4">
        <div class="mb-5">
          <h3 class="mb-4">We are making beautiful <br/>design layout business site</h3>
          <p>We craft beautiful website layout from scratch.You need not to worry about site design and other technial issue.We provide these attractive service as a bonus.Let's have atalk together for your next project.</p>
        </div>

        <ul class="about-list">
          <li>
            <h5 class="mb-2"><i class="icofont icofont-check-circled"></i>Responsive site</h5>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
          </li>

          <li>
            <h5 class="mb-2"><i class="icofont icofont-check-circled"> </i> Latest bootstrap 4</h5>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
          </li>

          <li>
            <h5 class="mb-2"><i class="icofont icofont-check-circled"> </i>Modern design</h5>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
          </li>
          <li>
            <h5 class="mb-2"> <i class="icofont icofont-check-circled"> </i>Working contact form</h5>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
            
<Footer/>

        </div>
    )
}

export default Services;

