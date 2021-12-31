import React from "react";
import './components.css';

function Cardgroup(props) {
    return (
        <div>
            <div>
                <div class="row">
                    <div class="aboutimage col-lg-6">
                        <div class="about-img">
                            <img src="https://source.unsplash.com/7u5mwbu7qLg/500x350" class="img-fluid w-100 rounded" alt="" />
                        </div>
                    </div>
                    <div class="about-content-backround col-lg-6 pt-5 pt-lg-0">
                        <div class="about-content">
                            <h3 class="font-weight-bold">Best Practice Learning</h3>
                            <p>The best way to learn is to practice. Practices should go from easy to hard.
                        I give my students simple tasks to build from scratch. Ready information is not permanent. Therefore, I tire my students in small projects. 
                        When my students get answers to their questions, they learn.</p>
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
            <hr class="featurette-divider" />
            <div>
                <div class="row">
                    <div class="about-content-backround col-lg-6 pt-5 pt-lg-0">
                        <div class="about-content">
                            <h3 class="font-weight-bold">Web Solution</h3>
                            <p>I produce fast and affordable solutions for your applications. I can advise and manage your projects. 
                                I have many high quality friends in my big circle with whom I can do your projects together.</p>
                            <h3 class="font-weight-bold">How we can help</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam nec tempor
                                fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum tincidunt magna id
                                euismod. Nam sollicitudin mi quis orci lobortis feugiat. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Nunc est justo, aliquam nec tempor fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum
                                tincidunt magna id euismod. Nam sollicitudin mi quis orci lobortis feugiat.</p>
                        </div>
                    </div>
                    <div class="aboutimage col-lg-6">
                        <div class="about-img">
                            <img src="https://source.unsplash.com/7u5mwbu7qLg/500x350" class="img-fluid w-100 rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <hr class="featurette-divider" />
            <div className="container">
                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button class="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-light border rounded-3">
                            <h2>Add borders</h2>
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                            <button class="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary">World</strong>
                                <h3 class="mb-0">Featured post</h3>
                                <div class="mb-1 text-muted">Nov 12</div>
                                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="stretched-link">Continue reading</a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success">Design</strong>
                                <h3 class="mb-0">Post title</h3>
                                <div class="mb-1 text-muted">Nov 11</div>
                                <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="stretched-link">Continue reading</a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-0 shadow">
                                    <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img-top" alt="..." />
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-0">Team Member</h5>
                                        <div class="card-text text-black-50">Web Developer</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-0 shadow">
                                    <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" class="card-img-top" alt="..." />
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-0">Team Member</h5>
                                        <div class="card-text text-black-50">Web Developer</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-0 shadow">
                                    <img src="https://source.unsplash.com/sNut2MqSmds/500x350" class="card-img-top" alt="..." />
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-0">Team Member</h5>
                                        <div class="card-text text-black-50">Web Developer</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-0 shadow">
                                    <img src="https://source.unsplash.com/7u5mwbu7qLg/500x350" class="card-img-top" alt="..." />
                                    <div class="card-body text-center">
                                        <h5 class="card-title mb-0">Team Member</h5>
                                        <div class="card-text text-black-50">Web Developer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <img class="img-fluid" src="https://via.placeholder.com/750x500" alt="" />
                            </div>
                            <div class="col-md-4">
                                <h3 class="my-3">Project Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                                <h3 class="my-3">Project Details</h3>
                                <ul>
                                    <li>Lorem Ipsum</li>
                                    <li>Dolor Sit Amet</li>
                                    <li>Consectetur</li>
                                    <li>Adipiscing Elit</li>
                                </ul>
                            </div>
                        </div>


                        <div class="row  align-items-center">
                            <div class="col-md-12 col-lg-7 text-center text-lg-left">
                                <div class="main-banner">
                                    <h1 class="display-4 mb-4 font-weight-normal">
                                        Industry Leading Managed Services Solutions
                                    </h1>
                                    <p class="lead mb-4">
                                        Rapoo is set of landing and support pages aimed at helping companies promote new products and business launches.
                                    </p>
                                    <p class="mb-0">
                                        <a href="#" target="_blank" class="btn btn-primary btn-circled">
                                            Purchase now
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-5 d-none d-lg-block">
                                <div class="banner-img-block">
                                    <img src="assets/img/banner-img-5.png" alt="banner-img" class="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <section class="section bg-gray">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3 col-sm-6 my-lg-0 my-3">
                                        <div class="counter-content text-center bg-light py-4 rounded">
                                            <i class="fa fa-smile-o d-block"></i>
                                            <span class="counter my-2 d-block" data-count="2314">0</span>
                                            <h5>Happy Customers</h5>

                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 my-lg-0 my-3">
                                        <div class="counter-content text-center bg-light py-4 rounded">
                                            <i class="fa fa-user-o d-block"></i>
                                            <span class="counter my-2 d-block" data-count="1013">0</span>
                                            <h5>Active Members</h5>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 my-lg-0 my-3">
                                        <div class="counter-content text-center bg-light py-4 rounded">
                                            <i class="fa fa-bookmark-o d-block"></i>
                                            <span class="counter my-2 d-block" data-count="2413">0</span>
                                            <h5>Verified Ads</h5>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 my-lg-0 my-3">
                                        <div class="counter-content text-center bg-light py-4 rounded">
                                            <i class="fa fa-smile-o d-block"></i>
                                            <span class="counter my-2 d-block" data-count="200">0</span>
                                            <h5>Happy Customers</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardgroup;











