import React from "react";
import './components.css';

function Cardgroup(props) {
    return (
        <div>
            <div class=" adad row featurette">
                <div class="col-md-7">
                    <h6 class="featurette-heading">Best Practice Learning</h6>
                    <p class="lead homepage-paragraph-left mt-0">The best way to learn is to practice. Practices should go from easy to hard.
                        I give my students simple tasks to build from scratch. Ready information is not permanent. Therefore, I tire my students in small projects. When my students get answers to their questions, they learn.</p>
                </div>
                <div class="col-md-5">
                    <img className="homepage-graphic" src="https://cdn.pixabay.com/photo/2015/06/05/07/11/road-sign-798175_960_720.jpg" alt="Logo" />
                </div>
            </div>
            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Web  <span class="text-muted">Solution</span></h2>
                    <p class="lead homepage-paragraph-right">I produce fast and affordable solutions for your applications. I can advise and manage your projects. I have many high quality friends in my big circle with whom I can do your projects together.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img className="homepage-graphic" style={{ width: 400, height: 400 }} src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg" alt="Logo" />
                </div>
            </div>
            <hr class="featurette-divider" />
            <div class="card-group">
                <div class="card">
                    <img class="card-img-top" src="https://www.mqvl.com/wp-content/uploads/2018/10/Custom-Website-Development-The-Samurai-Way.jpg" alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Custom Web Design</h5>
                        <p class="card-text">Customers should not return when they enter the website.
                            In order not to upset the customer and not to limit him, I convert customer-compatible designs into codes.
                            For this reason, it is necessary to know all the stages of web design very well.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZ8_Lqcr8rW35uZtLBIgSlLdNr88giQO8Om3nmwWISVU0FVENTClQmfWzGZ_2ToFzKLs&usqp=CAU" alt="Cardcap" />
                    <div class="card-body">
                        <h5 class="card-title">Best Practice Learning</h5>
                        <p class="card-text">The best learning method is to learn by doing.
                            After taking a quick glance at the theory, it is necessary to immediately go into practice.
                            Remember, we are alone while writing the codes. Just build together with your teammates.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/Web-design-vs-web-de.jpg?auto=format&q=60&fit=max&w=930" alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">UI & UX Design</h5>
                        <p class="card-text"> The first purpose of business life is to make sales. It is necessary to know customer behavior very well in order to make sales.
                            That's why customers need to be satisfied with everything from design to functionality.
                            Therefore, it is necessary to do very good research.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default Cardgroup;











