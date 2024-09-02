// src/components/Careers/CareersPage.js

import React from 'react';
import '../assets/css/career.css';

const CareersPage = () => {
    return (
        <div className="careers-container">
            <header className="careers-header">
                <h1>Career Opportunities & Resources</h1>
                <p>Your pathway to a successful career</p>
            </header>
            <section className="careers-section">
                <div className="card">
                    <h2>Our Ask the Adviser Appointments</h2>
                    <p>
                        15-minute career discussions with potential referrals to additional resources, longer
                        appointments, or workshops.
                    </p>
                </div>
                <div className="card">
                    <h2>Plan Your Future Workshops</h2>
                    <ul>
                        <li>Using ICT Effectively for Employment: Leveraging technology for job searches and career development.</li>
                        <li>Understanding Mindsets: Enhancing career prospects through mindset shifts.</li>
                        <li>Neuro-Linguistics Programming (NLP): Techniques for better communication and personal goals.</li>
                        <li>CV Writing and Interview Skills: Tips for creating effective CVs and acing interviews.</li>
                        <li>Social Media and LinkedIn Labs: Optimizing online presence for professional networking.</li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Finding and Securing Work Experience</h2>
                    <p>
                        Students or recent graduates seeking valuable work experience can join our sessions on “Finding and Securing Work Experience”.
                        These sessions provide a clear overview of our opportunities and address any questions individuals may have.
                    </p>
                </div>
                <div className="card">
                    <h2>Faculty-Specific Events</h2>
                    <p>
                        We will organise faculty-specific events throughout the year to assist students and graduates with career planning.
                        These events will be delivered by the careers team in collaboration with faculty and Heads of Departments.
                    </p>
                </div>
                <div className="card download-section">
                    <h2>CV Writing and Interview Skills</h2>
                    <p>Tips for creating effective CVs and acing interviews.</p>
                    <a href="/path/to/cv-template.pdf" download className="download-btn">Download CV Template</a>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
