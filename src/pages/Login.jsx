import './Login.css';
import { useState } from 'react';
import loginIllustration from '../assets/login-illustration.svg'; // your SVG path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.password) newErrors.password = 'Password is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Login successful! 🎉');
      // Later you can redirect or call backend API here
    }
  };

  return (
    <div className="login-container">
      <div className="phone-mockup">
        <img src={loginIllustration} alt="Login" className="login-illustration" />

        <h2>Welcome Back</h2>
        <p>Login to your account to continue</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
          />
          {errors.password && <p className="error-msg">{errors.password}</p>}

          <div className="login-remember">
            <input type="checkbox" /> Remember me
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <div className="auth-buttons">
          <button className="google-btn">
            <FontAwesomeIcon icon={faGoogle} className="auth-icon" />
            Continue with Google
          </button>
          <button className="apple-btn">
            <FontAwesomeIcon icon={faApple} className="auth-icon" />
            Continue with Apple
          </button>
        </div>

        <p className="login-footer">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
