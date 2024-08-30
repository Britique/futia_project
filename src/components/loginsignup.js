import React, { useState } from 'react';
import './Auth.css';

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Call API to login
        console.log('Login:', username, password);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // Call API to signup
        console.log('Signup:', username, email, password, confirmPassword);
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-page">
            <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            <form onSubmit={isLogin ? handleLogin : handleSignup}>
                {isLogin ? (
                    <div>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <br />
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                ) : (
                    <div>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <br />
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <label>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                )}
                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
            <p>
                {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                <span onClick={toggleAuthMode}>{isLogin ? 'Signup' : 'Login'}</span>
            </p>
        </div>
    );
}

export default Auth;
