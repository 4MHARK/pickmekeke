import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
 import { useEffect } from 'react'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Pickmekeke
          </a>
          <div>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#footer">Contact</a>{" "}
          </div>
        </div>
      </nav>
      <section className="hero d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div className="container" data-aos="fade-up">
            <h1>Smart Tricycle Booking in Redemption City</h1>
            <p className="lead mt-3">Book safe, fast and reliable ridesâ€”anywhere, anytime.</p> <a href="#features"
                className="btn-primary">Get Started</a>
        </div>
    </section> 
    <section id="features" className="features text-center">
        <div className="container">
            <h2 className="mb-5" data-aos="fade-up">Why Choose Pickmekeke?</h2>
            <div className="row g-4">
                <div className="col-md-4 div-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="feature-icon mb-3">ðŸš–</div>
                    <h5>Instant Booking</h5>
                    <p>Book a ride in seconds without the wait.</p>
                </div>
                <div className="col-md-4 div-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-icon mb-3">ðŸ“�</div>
                    <h5>Live Tracking</h5>
                    <p>Know exactly when and where your ride is.</p>
                </div>
                <div className="col-md-4 div-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-icon mb-3">ðŸ”�</div>
                    <h5>Safe & Verified</h5>
                    <p>Drivers are verified and monitored for your safety.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="testimonials" className="testimonial text-center">
        <div className="container">
            <h2 className="mb-5" data-aos="fade-up">What Riders Say</h2>
            <div className="row g-4">
                <div className="col-md-4" data-aos="fade-right">
                    <blockquote className="blockquote">
                        <p>"No more waiting. I just book and go!"</p>
                        <footer className="blockquote-footer">Tolu A.</footer>
                    </blockquote>
                </div>
                <div className="col-md-4" data-aos="fade-up">
                    <blockquote className="blockquote">
                        <p>"The best way to move around the city."</p>
                        <footer className="blockquote-footer">Emeka D.</footer>
                    </blockquote>
                </div>
                <div className="col-md-4" data-aos="fade-left">
                    <blockquote className="blockquote">
                        <p>"Secure, simple and super fast."</p>
                        <footer className="blockquote-footer">Mary O.</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
    <footer id="footer" className="footer">
        <div className="container">
            <p>&copy; 2025 Pickmekeke.
                All rights reserved.</p>
            <p> <a href="#" className="text-light">Privacy</a> | <a href="#" className="text-light">Terms</a> | <a
                    href="mailto:support@pickmekeke.com" className="text-light">Email Us</a> </p>
        </div>
    </footer>
    </>
  );
}

export default App;
