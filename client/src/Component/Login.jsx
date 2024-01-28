import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = showLogin ? 'http://localhost:4000/api/auth/login' : 'http://localhost:4000/api/auth/register';

    try {
      const response = await axios.post(url, formData);

      console.log('Response Status:', response.status);

      if (response.data) {
        const data = response.data;
        console.log('Server Response:', data);

        if (data.message === 'Registration Successful' || data.message === 'Login Successful') {
          // Save the authentication token to storage on successful login
          localStorage.setItem('authToken', data.token);
          login();
          navigate('/home');
        }
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <div id="authForms" className="row p-lg-5 p-1 pb-5 w-100">
        <div className="col-md-6">
          {showLogin ? (
            <form className="needs-validation p-5" noValidate onSubmit={handleSubmit}>
              <h2 className="mb-3 text-center">Login</h2>
              <div className="col-md-12">
                <label htmlFor="validationCustom02" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom02"
                  name="email"
                  onChange={handleChange}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-12">
                <label htmlFor="validationCustom02" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationCustom00"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-12">
                {/* <div className="form-check mt-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Remember Me
                  </label>
                </div> */}
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-primary mt-3" type="submit">
                  Login
                </button>
              </div>
            </form>
          ) : (
            <form className="needs-validation p-5" noValidate onSubmit={handleSubmit}>
              <h2 className="mb-3 text-center">Sign Up</h2>
              <div className="col-md-12">
                <label htmlFor="validationCustom01" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  name="name"
                  placeholder="Company or Full Name"
                  onChange={handleChange}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-12">
                <label htmlFor="validationCustom02" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom02"
                  name="email"
                  onChange={handleChange}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-12">
                <label htmlFor="validationCustom02" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationCustom00"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-12">
                <div className="form-check mt-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-primary mt-3" type="submit">
                  Register
                </button>
              </div>
            </form>
          )}
          <p className="text-center ">
            {showLogin ? 'New Here? ' : 'Already has an Account? '}
            <span className="link" onClick={toggleForm}>
              {showLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>

        <div className="col-md-6 d-flex flex-column pt-5 align-items-center">
          <h3 className="text-center p-3">OR</h3>
          <div className=" btn btn-lg btn-warning mb-2  ">
            Continue with Google
          </div>
          <div className=" btn btn-lg btn-primary mb-2 ">
            Continue with Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
