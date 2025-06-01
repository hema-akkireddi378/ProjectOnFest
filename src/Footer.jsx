import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import { useLocation } from 'react-router-dom';



export function Footer() {
    return (
        <div className="footer">
            <footer className="footer-elements">
                <AdminPanel></AdminPanel>
                <Gamification></Gamification>
                <GallerySponser></GallerySponser>
                <Support></Support>
                <PostFest></PostFest>

                

            </footer>

        </div>
    )
}

export function AdminPanel() {
    return (
        <div className="subClass">
            <nav className="admin-list-main">
                <ul className="unorder">
                    <li className="admin-list"><h2>Admin Panel</h2></li>

                    <li className="admin-list"><Link to="/FacultyDashboard" className="admin-links">Faculty Dashboard</Link></li>
                    <li className="admin-list"><Link to="/StudentDashboard" className="admin-links">Student Dashboard</Link></li>
                    <li className="admin-list"><Link to="/EventCoordinatorDB" className="admin-links">Event Coordinator Dashboard</Link></li>
                    <li className="admin-list"><Link to="/Assignment" className="admin-links">Voolenter's Assignment</Link></li>
                    <li className="admin-list"><Link to="/Support" className="admin-links">Support & QA</Link></li>
                    <li className="admin-list"><Link to="/Certificate" className="admin-links">Certificate Download</Link></li>

                </ul>
            </nav>



        </div>
    )
}

// components/Footer.js
//import React from 'react';





export function FacultyDashboard() {
    return (
        <div>Hema</div>
    )
}
export function StudentDashboard() {
    return (
        <div className='student-dashboard'>
            <div className='student-profile'>
                <div className='student-profile-details'>

                    <img src="https://static.thenounproject.com/png/3918329-200.png" alt="Profile" className="profile-image"></img>

                </div>

                <p className='student-header'>Hema Akkiredi</p>
                <p className='student-details'>Student ID :</p>
                <p className='student-details'>Branch :</p>
                <p className='student-details'>Year :</p>
                <p className='student-details'>Fest Id :</p>

                <div className="social-media1">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt='Linkdin' height="20px" width="20px" className='linkdin'></img>
                    <img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" className='instagram' alt='Instagram' height="30px" width="30px"></img>
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='github' alt='GitHub' height="20px" width="20px"></img>
                    <img src='https://cdn-icons-png.flaticon.com/512/20/20673.png' className='facebook' alt='FaceBook' height="20px" width="20px"></img>
                </div>

            </div>
        </div>
    )
}
export function Assignment() {
    return (
        <div></div>
    )
}

export function Accessibility() {
    return (
        <div></div>
    )
}
export function Certificate() {
    return (
        <div>
            <p className='holder'>HemaVinayKumar</p>
            <div className='outer-certificate'>
                <div className='certificate'>
                    <p className='down'>Download the Certificate</p>
                </div>
            </div>
        </div>
    )
}
export function Gamification() {
    return (
        <div className="subClass">
            <ul className="unorder">
                <li className="gamification"><h2>Gamification</h2></li>
                <li className="gamification"><Link to="/ClassicalEvents" className="gamification-links">Classical Events</Link></li>
                <li className="gamification"><Link to="/TechnicalEvents" className="gamification-links">Technical Events</Link></li>
                <li className="gamification"><Link to="/CulturalEvents" className="gamification-links">Cultural Events</Link></li>

            </ul>
            {/* <Routes>
                <Route path="/ClassicalEvents" element={<ClassicalEvents></ClassicalEvents>}></Route>
                <Route path="/TechnicalEvents" element={<TechnicalEvents></TechnicalEvents>}></Route>
                <Route path="/CulturalEvents" element={<CulturalEvents></CulturalEvents>}></Route>

            </Routes> */}
        </div>
    )
}

export function ClassicalEvents() {
    return (
        <div>

        </div>
    )
}
export function TechnicalEvents() {
    return (
        <div></div>
    )
}
export function CulturalEvents() {
    return (
        <div></div>
    )
}

export function GallerySponser() {
    return (
        <div className="subClass">


            <ul className="unorder">
                <li className="gallery"><h2>Gallery & Sponsers</h2></li>
                <li className="gallery"><Link to="/StallsInfo" className="gallery-links">Stalls Info</Link></li>
                <li className="gallery"><Link to="LiveEvent" className="gallery-links">Live Event Tracker</Link></li>
                <li className="gallery"><Link to="/PreviousFest" className="gallery-links">Previous Fest Info</Link></li>
                <li className="gallery"><Link to="/Sponser" className="gallery-links">Sponser Logos and Offers</Link></li>
                <li className="gallery"><Link to="/About" className="gallery-links">About Fest</Link></li>

            </ul>
            {/* <Routes>
                <Route path="/StallsInfo" element={<StallsInfo></StallsInfo>}></Route>
                <Route path="/LiveEvent" element={<LiveEvent></LiveEvent>}></Route>
                <Route path="/PreviousFest" element={<PreviousFest></PreviousFest>}></Route>

            </Routes> */}
        </div>
    )
}
export function StallsInfo() {
    return (
        <div></div>
    )
}
export function LiveEvent() {
    return (
        <div></div>
    )
}
export function PreviousFest() {
    return (
        <div></div>
    )
}
export function Sponser() {
    return (
        <div></div>
    )
}
export function About() {
    return (
        <div></div>
    )
}
export function Support() {
    return (
        <div className="subClass">
            <ul className="unorder">
                <li className="support"><h2>Support & Accessibility</h2></li>
                <li className="support"><Link to="/Support" className="support-links">Support And Accessibility</Link></li>
                <li className="support"><Link to="/faq" className="support-links">FAQ</Link></li>
                <li className="support"><Link to="/contact" className="support-links">Contact Form</Link></li>
                <li className="support"><Link to="/Emergency" className="support-links">Emergency Numbers</Link></li>


            </ul>
            {/* <Routes>
                <Route path="/Support" element={<Support></Support>}></Route>
                <Route path ="/Faq" element={<Faq></Faq>}></Route>
                <Route path= "/Contact" element= {<Contact></Contact>}></Route>
                <Route path="/Emergency" element= {<Emergency></Emergency>}></Route>
            </Routes> */}


        </div>
    )
}


// FAQ
// ==============================================================================================================================================

export function FAQ() {
    return (
        <div></div>
    )
}

// Emergency Numbers
// ==============================================================================================================================================

export function Emergency() {
    return (
        <div></div>
    )
}



export function PostFest() {
    return (
        <div className="subClass">
            <ul className="unorder">
                <li className="post-fest"><h2>Post-Fest</h2></li>
                <li className="post-fest"><Link to="FeedbackForm" className="post-fest-links">FeedBack Form</Link></li>
                <li className="post-fest"><Link to="/Results" className="post-fest-links">Results and Winner Display</Link></li>
                <li className="post-fest"><Link to="/TermsAndConditions" className="post-fest-links">Terms and Conditions</Link></li>
                <li className="post-fest"><Link to="/Privacy" className="post-fest-links">Privacy Policy</Link></li>
                <li className="post-fest"><Link to="/AboutUs" className="post-fest-links">About Us</Link></li>
                <li className="post-fest"><Link to="/ContactUs" className="post-fest-links">Contact Us</Link></li>
                <li className="post-fest"><Link to="/archive" className="post-fest-links">Archive of past Events</Link></li>
            </ul>
            {/* <Routes>
                <Route path="/About" element={<About></About>}>

                </Route>
            </Routes> */}
        </div>
    )
}
//Feed Back Form
// ==============================================================================================================================================

export function FeedbackForm() {
    return (
        <div className='feedbackform'>
            <div className="elements">
                <p>Name: </p>
                <p>Email :</p>
                <p>How was your experience?</p>

                <label>
                    <input type="checkbox" name="experience" value="Excellent" />
                    Excellent
                </label><br />

                <label>
                    <input type="checkbox" name="experience" value="Good" />
                    Good
                </label><br />

                <label>
                    <input type="checkbox" name="experience" value="Average" />
                    Average
                </label><br />

                <label>
                    <input type="checkbox" name="experience" value="Poor" />
                    Poor
                </label>
            </div>
        </div>
    )
}

// Results And Winner Display
// ==============================================================================================================================================

export function ResultsAndWinners() {
    return (
        <div></div>
    )
}


//Terms And Conditions
// ==============================================================================================================================================

export function TermsAndConditions() {
    return (
        <div className='termsandconditions'>
            <p className='terms'>Terms Of Use</p>
            <ul className='list-of-terms'>
                <li>Eligibility</li>
                <li>rticipation is open to students of recognized institutions unless stated otherwise for specific events.

                </li>
                <li>Registration</li>
                <li>All participants must complete the registration process through the official website or authorized coordinators.

                </li>
            </ul>
        </div>
    )
}



// About Us
// ==============================================================================================================================================

export function AboutUs() {
    return (
        // <div className='aboutUs'>
        //     <p className='fest-name'>MILAN</p>
        //     <p className='clg-name'>Miracle Educational Society Group Of Institutions</p>
        //     <p className='clg-content'>Welcome to [Fest Name], the flagship cultural and technical fest of [Your Institution Name]. We are a student-driven celebration of innovation, creativity, and tradition, bringing together talents from across the region.

        //         From electrifying competitions to insightful workshops and mesmerizing performances, [Fest Name] is more than just an event — it’s an experience. Every year, we strive to create a platform where passion meets purpose, and ideas turn into action.

        //         Join us as we celebrate the spirit of youth, talent, and unity through this vibrant fest!

        //     </p>
        //     <div className="social-media1">

        //         <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt='Linkdin' height="20px" width="20px" className='linkdin'></img>
        //         <img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" className='instagram' alt='Instagram' height="30px" width="30px"></img>
        //         <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='github' alt='GitHub' height="20px" width="20px"></img>
        //         <img src='https://cdn-icons-png.flaticon.com/512/20/20673.png' className='facebook' alt='FaceBook' height="20px" width="20px"></img>
        //     </div>

        // </div>
        <div className='aboutUs'>
            <div className='aboutUs1'>
            <img src='https://i.pinimg.com/736x/30/5f/1d/305f1d927e89b6c3ba61d2127fbcc0de.jpg' alt='We Both' height="100px" width="100px" className='weBoth'></img></div>
            <p className='aboutContent'>Hello there, I am J HemaVinayKumar Author of this Application</p>

            <div className='moreAboutUs'>
                <p className='aboutus'>Name :</p>
                <p className='aboutus'>Year :</p>
                <p className='aboutus'>Branch :</p>
                <p className='aboutus'>Section :</p>
                <p className='aboutus'>Mobile no :</p>
                <p className='aboutus'>Village :</p>
                <p className='aboutus'>District :</p>
                <p className='aboutus'>State :</p>
                <p className='reach'>you can also reach me at,</p>
                 <div className="author-socialmedia">
                    <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://img.icons8.com/?size=100&id=GNvM541FBQu7&format=png&color=000000" alt="Google logo" className="google-link"></img>
                    <img src="https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://img.icons8.com/?size=100&id=CtrV2SV33rD9&format=png&color=000000" alt="Google logo" className="google-link"></img>
                </div>
            </div>
        </div>
    )
}

// Contact Us
// ==============================================================================================================================================

export function ContactUs() {
    return (
        <div className='contact'>
           <p className='contact-us'>Contact Us</p>
           {/* <p className='contact-content'>We are here to help! For any queries, suggestions, or support related to MILAN, feel free to reach out to us</p> */}
                {/* <p>Email : </p>
                <p>Phone</p>
                <p>Address</p>
                <p>Social Media</p> */}
                <div className='contactUs'>
                <div className='phone'>
                    <img src='https://img.icons8.com/?size=100&id=9730&format=png&color=000000' alt='phone' height="20px" width="20px"></img>
                    <p>6303675308</p>
                </div>
                 <div className='protofolio'>
                    <img src='https://img.icons8.com/?size=100&id=i4g6BmsilKFZ&format=png&color=000000' alt='phone' height="20px" width="20px"></img>
                    <p>Protofolio</p>
                </div>
                <div className='Email'>
                    <img src='https://img.icons8.com/?size=100&id=Ww1lcGqgduif&format=png&color=000000' alt='phone' height="20px" width="20px"></img>
                    <p>akkireddihema@gmail.com</p>
                </div>
                <div className='location'>
                    <img src='https://img.icons8.com/?size=100&id=96RE9rrwGcm6&format=png&color=000000' alt='phone' height="20px" width="20px"></img>
                    <p>Miracle City, Bhogapuram</p>
                </div>
                </div>
                

                <div className='getInTouch'>
                    <p className='sendMsg'>Get In Touch</p>
                     <input type="text" placeholder="Username" name="username" id="username" className="UserName">
                    </input>
                    <input type="email" placeholder="Email" name="password" id="email" className="userEmail">
                    </input>
                    <textarea rows="4" placeholder="Subject" name="subject" id="subject" className="subject"/>
                    <textarea rows ="10" placeholder='Message' name='message' id='message' className='message'/>
                    {/* <input type="textarea" rows="4" placeholder="Subject" name="subject" id="subject" className="subject">
                    </input>
                    <input type="textarea" rows="6" placeholder="Message" name="message" id="message" className="message">
                    </input> */}
                     <div className='sumbmitMessage'>
                    <button type="submit" className="sendMessage">Send Message</button>
                </div>
                    
                </div>
               
         </div>
    )
}

// Archive of Past Events
// ==============================================================================================================================================

export function PastEvents() {
    return (
        <div></div>
    )
}

//
// ==============================================================================================================================================

//
// ==============================================================================================================================================


//
// ==============================================================================================================================================

//
// ==============================================================================================================================================

//
// ==============================================================================================================================================


//
// ==============================================================================================================================================

//
// ==============================================================================================================================================

//
// ==============================================================================================================================================


//
// ==============================================================================================================================================

//
// ==============================================================================================================================================

//
// ==============================================================================================================================================
