import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './AboutMe.css';





function AboutMe() {
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


            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-img">
                                <img  src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" class="img-fluid w-100 rounded" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0">
                            <div class="about-content">
                                <h3 class="font-weight-bold">Introduction</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam nec tempor
                                    fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum tincidunt magna id
                                    euismod. Nam sollicitudin mi quis orci lobortis feugiat.</p>
                                <h3 class="font-weight-bold">How we can help</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam nec tempor
                                    fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum tincidunt magna id
                                    euismod. Nam sollicitudin mi quis orci lobortis feugiat. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Nunc est justo, aliquam nec tempor fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum
                                    tincidunt magna id euismod. Nam sollicitudin mi quis orci lobortis feugiat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="heading text-center text-capitalize font-weight-bold py-5">
          <h2>our team</h2>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card my-3 my-lg-0">
          <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="Card image cap"/>
          <div class="card-body bg-gray text-center">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">Founder / CEO</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card my-3 my-lg-0">
          <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="Card image cap"/>
          <div class="card-body bg-gray text-center">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">Founder / CEO</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card my-3 my-lg-0">
          <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="Card image cap"/>
          <div class="card-body bg-gray text-center">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">Founder / CEO</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="card my-3 my-lg-0">
          <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="Card image cap"/>
          <div class="card-body bg-gray text-center">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">Founder / CEO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="features">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="feature-block d-lg-flex">
					<div class="feature-item mb-5 mb-lg-0">
						<div class="feature-icon mb-4">
                        <img src="https://img.icons8.com/ios-filled/50/000000/phone-disconnected.png"/>
						</div>
						<span>24 Hours Service</span>
						<h4 class="mb-3">Online Appoinment</h4>
						<p class="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
						<a href="appoinment.html" class="btn btn-main btn-round-full">Make a appoinment</a>
					</div>
				
					<div class="feature-item mb-5 mb-lg-0">
						<div class="feature-icon mb-4">
                        <img src="https://img.icons8.com/ios-filled/50/000000/phone-disconnected.png"/>
						</div>
						<span>Timing schedule</span>
						<h4 class="mb-3">Working Hours</h4>
						<ul class="w-hours list-unstyled">
							<li class="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
							<li class="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
							<li class="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
						</ul>
					</div>
				
					<div class="feature-item mb-5 mb-lg-0">
						<div class="feature-icon mb-4">
                        <img src="https://img.icons8.com/ios-filled/50/000000/phone-disconnected.png"/>
						</div>
						<span>Emegency Cases</span>
						<h4 class="mb-3">1-800-700-6200</h4>
						<p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer/>

        </div>
    )
}

export default AboutMe;
