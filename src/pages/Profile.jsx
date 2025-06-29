import './Login.css';
import loginIllustration from '../assets/phone-login.svg'; // Replace with your image path

function Login() {
  return (
    <div className="login-container">
      <div className="phone-mockup">
        <img src={loginIllustration} alt="Login" className="login-illustration" />

        <h2>Login</h2>
        <p>Please sign in to continue.</p>

        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />

        <div className="login-remember">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <button className="login-btn">Sign In</button>

        <p className="login-footer">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
