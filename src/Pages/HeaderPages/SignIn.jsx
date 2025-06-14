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
                    <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" alt="Facebook logo" className="facebook-link" height="30px" width="40%"></img>
                    <img src="https://img.icons8.com/?size=100&id=60984&format=png&color=FFFFFF" alt="Google logo" className="google-link" height="30px" width="40px"></img>
                </div>
            </div>
        </div>
    )
}
