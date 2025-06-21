import { Link, useLocation } from "react-router-dom";

export function MainHeader() {
    const loc = useLocation();

    switch (loc.pathname) {

        case "/Register":
            return (
                <header className="RegisterMainHeader">
                    <h1 className='RegisterHeader'>MIRACLE</h1>
                </header>
            )
            break;

        case "/AboutFest":
            return (
                <header className="AboutFestMainHeader">
                    <Link  to="/Home" className="backToHome">
                    <h1 className='AboutFestHeader'>MIRACLE</h1>
                    </Link>
                </header>
            )
            break;

        case "/TermsAndConditions":
            return (
                <header className="TermsAndConditionsMainHeader">
                    <h1 className='TermsAndConditionsHeader'>MIRACLE</h1>
                </header>
            )
            break;
        case "/PrivacyPolicy":
            return (
                 <header className="MainPrivacyHeader">
                    <h1 className='PrivacyHeader'>MIRACLE</h1>
                </header>
            )
            break;

        case "/SignIn":
            return (
                  <header className="LoginMainHeader">
                    <h1 className='LoginHeader'>MIRACLE</h1>
                </header>
            )
            break;
        case "/":
            return (
                <div className='header'>
                    <h1 className='main-header'>MIRACLE</h1>
                    <nav className="mainHeader-nav-elements">
                        <Link to="/AboutFest" className="header-link-aboutfest">About Fest</Link>
                        <Link to="/Register" className="header-links-register">Register</Link>
                    </nav>
                </div>
            )

            break;
        default:
            return (
                <div className='header'>
                    <h1 className='main-header'>MIRACLE</h1>
                    <nav className="nav-elements">
                        <Link to="/Home" className="header-links">Home</Link>
                        <Link to="/Events" className="header-links">Events</Link>
                        {/* <Link to="/Register" className="header-links">Register</Link> */}
                        <Link to="/AboutUs" className="header-links">About Us</Link>
                        <Link to="/MyProfile" className="header-profile"><img src="https://img.icons8.com/?size=100&id=85050&format=png&color=FFFFFF" alt="Profile" height="20px" width="20px"></img></Link>
                    </nav>
                </div>
            )
    }
}