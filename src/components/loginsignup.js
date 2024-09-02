

import React, { useState } from 'react';
import '../assets/css/Auth.css';

const LoginRegisterForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="form-container">
            <div className={`form-content ${isLogin ? 'login' : 'register'}`}>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form>
                    {!isLogin && (
                        <div className="input-group">
                            <label>Username</label>
                            <input type="text" required />
                        </div>
                    )}
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    {!isLogin && (
                        <div className="input-group">
                            <label>Confirm Password</label>
                            <input type="password" required />
                        </div>
                    )}
                    <button type="submit" className="btn">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p onClick={toggleForm} className="toggle-link">
                    {isLogin
                        ? "Don't have an account? Sign Up"
                        : 'Already have an account? Login'}
                </p>
            </div>
        </div>
    );
};

export default LoginRegisterForm;
