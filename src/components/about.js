import React from 'react';
import '../assets/css/AboutPage.css';


const AboutPage = () => {
    return (
        <div className='body'>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Briteque</h1>
                    <p>Your success is our priority. Discover what we can do for you.</p>
                </div>
            </section>
            <div className="about-section">
                <div className="about-header">
                    <div className="profile-image">
                        <img src='./image/image-2.jpeg' alt="Profile" />
                    </div>
                    <div className="about-text">
                        <h2>About Us</h2>
                        <p>At Briteque, our team of education professionals brings over 20 years of expertise in delivering tailored careers advice, guidance, and employability skills. We are dedicated to supporting individuals facing unemployment, redundancy, or barriers to the labor market, including those with disabilities or special educational needs. Our commitment to innovation and excellence ensures that every program we offer is designed to achieve positive outcomes for our customers.</p>
                        <button className="learn-more">EXPLORE MORE </button>

                    </div>
                </div>
                <div className="about-details">
                    <div className="detail-box">
                        <h3>01</h3>
                        <p>We offer dynamic, project-based short courses designed to equip students with practical employability skills. Our courses are tailored to cater to all learning abilities, ensuring that every participant gains the tools needed for sustainable careers.</p>
                    </div>
                    <div className="detail-box">
                        <h3>02</h3>
                        <p>Our team consists of experienced career advisors and training specialists who provide expert guidance and support. They are dedicated to helping individuals navigate their career paths and achieve their professional goals.</p>
                    </div>
                    <div className="detail-box">
                        <h3>03</h3>
                        <p>We collaborate with non-profit, commercial, and public sector organizations, as well as careers hub teams, to offer comprehensive support. These partnerships empower students to pursue higher education, training, and sustainable careers both nationally and internationally.</p>
                    </div>
                </div>
            </div >
            <div className="meet-the-team">
                <h2>Meet The Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <div className="member-image">
                            <img src='./image/ulric1.png' alt="ulric quee" />
                        </div>
                        <h3>ULRIC QUEE</h3>
                        <p className="position">FOUNDER</p>

                    </div>
                    <div className="team-member">
                        <div className="member-image">
                            <img src='./image/linda.png' alt="linda kamara" />
                        </div>
                        <h3>LINDA KAMARA</h3>
                        <p className="position">FOUNDER</p>

                    </div>
                </div>
            </div>
            <footer className="footer">

                <p></p>
                <p>&copy; 2024 Briteque. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;
