import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
    // 管理表单数据的 state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });


    // 处理输入变化
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // 提交表单
    const handleSubmit = async (e) => {
        e.preventDefault(); 
    
        try {
            const response = await axios.post('http://localhost:8222/api/v1/identity/register', formData);           
            alert('Sign up successfully');
            window.location.href = '/'; 
        } catch (error) {
            console.error('Signup failed:', error.response ? error.response.data : error.message);
            console.log(formData);
            
        }
    };

    return (
        <>
            <main id="main" className="site-main main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f9fa' }}>
                <section className="section" style={{ width: '100%', maxWidth: '300px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="container container--xs">
                                <div className="woocommerce">
                                    <div id="signup_div_wrapper">
                                        <img
                                            className="img-fluid mx-auto d-block mb-1"
                                            src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-logo.svg"
                                            alt="Bootstrap logo"
                                            style={{ width: '30px', height: '30px' }}
                                        />
                                        <h1 className="mb-1 text-center" style={{ fontSize: '16px', lineHeight: '1.1' }}>Sign up</h1>
                                        <p className="fs-14 text-gray text-center mb-2" style={{ fontSize: '9px', lineHeight: '1.2' }}>Redownload themes, get support, and review themes.</p>

                                        <form onSubmit={handleSubmit} className="register">
                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="name" style={{ fontSize: '9px' }}>Name <span className="required">*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control mb-1"
                                                        name="name"
                                                        id="name"
                                                        required
                                                        style={{ fontSize: '9px' }}
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-1">
                                                <label htmlFor="email" style={{ fontSize: '9px' }}>Email address <span className="required">*</span></label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    style={{ fontSize: '9px' }}
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="mb-1">
                                                <label htmlFor="password" style={{ fontSize: '9px' }}>Password <span className="required">*</span></label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="password"
                                                    required
                                                    style={{ fontSize: '9px' }}
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary btn-lg btn-block mb-1"
                                                    name="register"
                                                    value="Sign Up"
                                                    style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1', fontSize: '10px', padding: '5px 10px' }}
                                                />
                                            </div>
                                        </form>

                                        <p className="text-gray-soft text-center small mb-1" style={{ fontSize: '8px', lineHeight: '1.2' }}>
                                            Already have an account?
                                            <a href="https://themes.getbootstrap.com/signin/" style={{ fontSize: '8px' }}>Sign in</a>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
