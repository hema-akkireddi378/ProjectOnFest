import { Link, useLocation } from "react-router-dom";

export function MainHeader() {
    const loc = useLocation();

    switch (loc.pathname) {

        case "/Register":
            return (
                <header className="register-header">

                    <ul className="main-header-list">
                        <li className='main-header'>MRCL</li>

                    </ul>

                </header>
            )
            break;

        case "TermsAndConditions":
            return (
                <header>
                    <nav>
                        <ul>
                            <li className='main-header'>MRCL</li>

                        </ul>
                    </nav>
                </header>
            )
            break;
        case "PrivacyPolicy":
            return (
                <header>
                    <nav>
                        <ul>
                            <li className='main-header'>MRCL</li>

                        </ul>
                    </nav>
                </header>
            )
            break;
        // case "/":
        //     return (
        //         <header>
        //             <nav>
        //                 <ul>
        //                     <li className='main-header'>MRCL</li>

        //                 </ul>
        //             </nav>
        //         </header>
        //     )
        //     break;
        case "SignUp":
            return (
                <header>
                    <nav>
                        <ul>
                            <li className='main-header'>MRCL</li>

                        </ul>
                    </nav>
                </header>
            )
            break;

        default:
            return (
                <div className='header'>

                  <h1 className='main-header'>MRCL</h1>

                <nav className="nav-elements">
                    
                    <Link to="/Home" className="header-links">Home</Link>
                    <Link to="/Events" className="header-links">Events</Link>
                    <Link to="/Register" className="header-links">Register</Link>
                    <Link to="/MyProfile" className="header-profile"><img src="https://img.icons8.com/?size=100&id=85050&format=png&color=FFFFFF" alt="Profile" height="13px" width="13px"></img></Link>

                </nav>
                </div>
            )
    }
}