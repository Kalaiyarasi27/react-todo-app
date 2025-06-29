import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import signupIllustration from '../assets/signup-illustration.svg';
import { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password';
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    if (!formData.agreed) newErrors.agreed = 'You must agree to the terms';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Signup successful!');
      // Later: send data to backend API
    }
  };

  return (
    <div className="signup-container">
      {/* Left Side: Image */}
      <div className="signup-left">
        <img
          src={signupIllustration}
          alt="Sign Up"
          className="signup-image"
        />
      </div>

      {/* Right Side: Form */}
      <div className="signup-right">
        <h2>Create Your Account</h2>
        <p>Let’s get started with 30 days free trial</p>

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

        <div className="or">or</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-msg">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}

          <div className="password-fields">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {errors.password && <p className="error-msg">{errors.password}</p>}
          {errors.confirmPassword && (
            <p className="error-msg">{errors.confirmPassword}</p>
          )}

          <label className="terms">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
            />{' '}
            I agree to the <a href="/">Terms & Conditions</a>
          </label>
          {errors.agreed && <p className="error-msg">{errors.agreed}</p>}

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="signin-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
