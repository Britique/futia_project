import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/Auth.css';

const LoginRegisterForm = () => {
    const [activePanel, setActivePanel] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        const panelOneHeight = formRef.current.querySelector('.form-panel.one').scrollHeight;
        const panelTwoHeight = formRef.current.querySelector('.form-panel.two').scrollHeight;

        if (activePanel) {
            formRef.current.style.height = `${panelTwoHeight}px`;
        } else {
            formRef.current.style.height = `${panelOneHeight}px`;
        }
    }, [activePanel]);

    const togglePanel = () => {
        setActivePanel(!activePanel);
    };

    return (
        <div className="form" ref={formRef}>
            <div className="form-toggle" onClick={togglePanel}></div>

            <div className={`form-panel one ${!activePanel ? '' : 'hidden'}`}>
                <div className="form-header">
                    <h1>Account Login</h1>
                </div>
                <div className="form-content">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="form-group">
                            <label className="form-remember">
                                <input type="checkbox" />
                                Remember Me
                            </label>
                            <a className="form-recovery" href="#">Forgot Password?</a>
                        </div>
                        <div className="form-group">
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className={`form-panel two ${activePanel ? 'active' : ''}`} onClick={togglePanel}>
                <div className="form-header">
                    <h1>Register Account</h1>
                </div>
                <div className="form-content">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" id="cpassword" name="cpassword" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterForm;
