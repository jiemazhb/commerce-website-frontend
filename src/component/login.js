import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './userContext';

export default function Login() {

    const { login } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const userInfo = {
            email: email,  
            password: password   
        }
        
        try {
            const response = await axios.post('http://localhost:8222/api/v1/identity/login', userInfo);

            const { token, refreshToken } = response.data;
            
            login(token, refreshToken);
            
            navigate('/'); 
        } catch (error) {
            alert(error.response.data);
        }
    }


  return (
    <>
    <main id="main" className="site-main main mt-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f9fa' }}>
        <section className="section" style={{ width: '100%', maxWidth: '500px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="container">
                <div className="row">
                    <div className="container container--xs">
                        <div className="woocommerce">
                        <form>
                            <h3>Please Sign in</h3>
							<div className="input-floating-label form-floating mb-4">
								<input type="email" className="form-control" id="floatingInput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com"/>
								<label htmlFor="floatingInput">Email address</label>
							</div>


							<div className="input-floating-label form-floating mb-4 position-relative">
								<input type="password" className="form-control fakepassword pe-6" value={password} onChange={(e) => setPassword(e.target.value)} id="psw-input" placeholder="Enter your password"/>
								<label htmlFor="floatingInput">Password</label>
								<span className="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
									<i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
								</span>
							</div>


							<div className="mb-4 d-flex justify-content-between">
								<div className="form-check">
									<input type="checkbox" className="form-check-input" id="checkbox-1"/>
									<label className="form-check-label" htmlFor="checkbox-1">Remember me</label>
								</div>

								<a href="forgot-password.html" className="link-underline-primary"> Forgot password?</a>
							</div>


							<div className="align-items-center mt-0">
								<div className="d-grid">
									<button className="btn btn-dark mb-0" type="button" onClick={handleSubmit}>Login</button>
								</div>
							</div>
						</form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</>
  )
}
