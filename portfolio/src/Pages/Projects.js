import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios"


function Projects() {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5002/coaching")
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return <div>
    <Header></Header>
    adwdad
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
            <div class="container">
      <div class="row">
        {posts.map(post => (
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
              <img key={post.id} src={post.projectimage} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 key={post.id} class="card-title mb-0">{post.projectname}</h5>
                <div key={post.id} class="card-text text-black-50">{post.projectdesc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     <Footer/>       
  </div>
}

export default Projects;
