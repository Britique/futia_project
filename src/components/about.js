import React from 'react';
import '../assets/css/AboutPage.css';


const AboutPage = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Britique</h1>
                    <p>Your success is our priority. Discover what we can do for you.</p>
                </div>
            </section>
            <div className="about-page">
                <section className="about-us">
                    <section className='about-image'>
                        <img src='./images/logo.png' alt='logo' />
                    </section>
                    <h2>About Us</h2>
                    <p>
                        We are a forward-thinking company dedicated to providing innovative solutions that help businesses and individuals reach their full potential. Our team of experts is passionate about delivering exceptional results and exceeding expectations in every project we undertake.
                    </p>
                </section>

                <section className="what-we-offer">
                    <h2>What We Offer</h2>
                    <div className="offerings">
                        <div className="offering">
                            <img src="./images/service.jpg" alt="Service 1" />
                            <h3>Innovative Solutions</h3>
                            <p>
                                We specialize in creating cutting-edge solutions tailored to your specific needs, ensuring you stay ahead in your industry.
                            </p>
                        </div>
                        <div className="offering">
                            <img src="./images/service.jpg" alt="Service 2" />
                            <h3>Expert Consulting</h3>
                            <p>
                                Our team provides expert consulting services to help you make informed decisions and achieve your business goals.
                            </p>
                        </div>
                        <div className="offering">
                            <img src="./images/service.jpg" alt="Service 3" />
                            <h3>Comprehensive Support</h3>
                            <p>
                                We offer comprehensive support services to ensure your projects are successful from start to finish.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="our-team">
                    <h2>Our Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src="./images/person.jpg" alt="Team Member 1" />
                            <h3>John Doe</h3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="team-member">
                            <img src="./images/person.jpg" alt="Team Member 2" />
                            <h3>Jane Smith</h3>
                            <p>Chief Technology Officer</p>
                        </div>
                        <div className="team-member">
                            <img src="./images/person.jpg" alt="Team Member 3" />
                            <h3>Emily Johnson</h3>
                            <p>Lead Developer</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
