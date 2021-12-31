import React from "react";
import Header from "../components/Header";
import './ContactUs.css';
import Footer from "../components/Footer";

function ContactUs() {

    return (
      <div>
            <div> <Header></Header></div>
            <section class="page-banner-area page-contact">
                <div class="overlay"></div>

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-9 col-md-12 col-12 text-center">
                            <div class="page-banner-content">
                                <h1 class="display-4 font-weight-bold">Got a question?</h1>
                                <p>We'd love to talk about how we can help you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section contact-info pb-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="contact-block mb-4 mb-lg-0">
                                <img src="https://img.icons8.com/ios/50/4a90e2/phone-disconnected.png" />
                                <h5>Call Us</h5>
                                +823-4565-13456
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="contact-block mb-4 mb-lg-0">
                                <img src="https://img.icons8.com/ios/50/4a90e2/email-open.png" />
                                <h5>Email Us</h5>
                                contact@mail.com
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="contact-block mb-4 mb-lg-0">
                                <img src="https://img.icons8.com/ios-filled/50/4a90e2/marker.png" />
                                <h5>Location</h5>
                                North Main Street,Brooklyn Australia
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-form-wrap section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center">
                                <h2 class="text-md mb-2">Contact us</h2>
                                <div class="divider mx-auto my-4"></div>
                                <p class="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit
                                    perferendis maiores ratione aliquam?</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <form id="contact-form" class="contact__form " method="post" action="mail.php">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="alert alert-success contact__msg" role="alert">
                                            Your message was sent successfully.
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="name" id="name" type="text" class="form-control" placeholder="Your Full Name" />
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="email" id="email" type="email" class="form-control" placeholder="Your Email Address" required="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="subject" id="subject" type="text" class="form-control" placeholder="Your Query Topic" required="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="phone" id="phone" type="text" class="form-control" placeholder="Your Phone Number" required="" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group-2 mb-4">
                                    <textarea name="message" id="message" class="form-control" rows="8" placeholder="Your Message" required=""></textarea>
                                </div>

                                <div>
                                    <input class="btn btn-main btn-round-full" name="submit" type="submit" value="Send Messege" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default ContactUs;
