import React from 'react';
import './landingpage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">

            <section className="hero">
                <h1>Your Next Big Step Starts Here</h1>
                <p>Empowering sustainable careers and education through impactful partnerships and personalized guidance.</p>
                <button className="cta-button">Get Started</button>
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>To empower individuals and organizations by providing the tools and resources needed to achieve their goals.</p>
                <div className="mission-cards">
                    <div className="card">
                        <img src="path/to/your/image1.png" alt="Illustration 1" />
                        <h3>Empowering Sustainable Careers and Education</h3>
                        <p>Our mission is to guide individuals toward careers that not only fulfill them but also contribute to a more sustainable future.</p>
                    </div>
                    <div className="card">
                        <img src="path/to/your/image2.png" alt="Illustration 2" />
                        <h3>Building Collaborative Partnerships for Global Impact</h3>
                        <p>We work with partners around the world to create opportunities that have a lasting impact on communities and the environment.</p>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>Testimonials</h2>
                <p>See what our clients are saying about our services and the impact we've made on their careers and businesses.</p>
            </section>

            <section className="clients">
                <h2>Previous Clients</h2>
                <p>We've had the pleasure of working with a diverse range of clients, from startups to established organizations.</p>
                <ul>
                    <li>Client 1</li>
                    <li>Client 2</li>
                    <li>Client 3</li>
                </ul>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
