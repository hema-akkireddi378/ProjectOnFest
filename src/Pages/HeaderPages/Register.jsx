import { Link } from "react-router-dom"
export default function Register() {
    return (
        <div className="main-register">
            <div className="registe">
                <p className='register'>Register</p>
                <div className="register-elements">
                    <input type="text" placeholder="UserName" name="username" id="username" className="username">
                    </input>
                    <input type="password" placeholder="Password" name="password" id="password" className="password">
                    </input>
                    <input type="password" placeholder="Confirm password" name="confirm password" id="confirm password" className="confirm-password">
                    </input>
                    <input type="email" placeholder="E-mail address" name="email" id="email" className="email">
                    </input>
                    <div className="verification">
                        <input type="checkbox" ></input>
                        <label>Verify you are human</label>
                    </div>
                    <button type="submit" className="sign-up"><Link to="/Home" className="SignUp">Sign Up</Link></button>
                </div>
                <div className="signin">
                    <p className="sign-in">Have an account
                        <Link to="/SignIn" className="sign-in-link">Sign in</Link>
                    </p>
                    <p className="other">or you can sign in with,</p>
                </div>
                <div className="social-media">
                    <Link className='facebook' ><img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img></Link>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div>

            </div>
        </div>
    )
}