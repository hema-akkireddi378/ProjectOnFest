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
                    <Link className='facebook' ><img src="https://img.icons8.com/?size=100&id=kQzCK4emnaD2&format=png&color=1A1A1A" alt="Facebook logo" className="facebook-link" ></img></Link>
                    <img src="https://img.icons8.com/?size=100&id=85795&format=png&color=1A1A1A" alt="Google logo" className="google-link"></img>
                </div>

            </div>
        </div>
    )
}