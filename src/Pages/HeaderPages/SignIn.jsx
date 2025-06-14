import { Link } from "react-router-dom"
export default function SignIn() {
    return (
        <div className="main-SignIn">
            <div className="registe">
                {/* <p className='sign'>Sign In</p> */}
                <div className="register-elements">
                    <input type="text" placeholder="UserName" name="username" id="username" className="login-details">
                    </input>
                    <input type="password" placeholder="Password" name="password" id="password" className="login-details">
                    </input>
                    <Link to="/ForgotPassword" className="forgot-link">Forgot Password?</Link>
                    <button type="submit" className="sign-up"><span>Sign In</span></button>
                </div>
                <div className="signin">
                    <p className="signup">
                    </p>
                    <p className="other">or you can sign in with,</p>
                </div>
                <div className="social-media">
                    <img src="https://img.icons8.com/?size=100&id=kQzCK4emnaD2&format=png&color=1A1A1A" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div>
            </div>
        </div>
    )
}
