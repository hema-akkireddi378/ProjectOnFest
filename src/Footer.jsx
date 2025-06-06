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
        <div>
            <div className='facultyDetails'>
                <div className='facultyprofile'>
                    <img src="https://static.thenounproject.com/png/3918329-200.png" alt="Profile" className="profile-image"></img></div>
                <div className='facultyContent'>
                    <p>Name :</p>
                    <p>Branch :</p>
                    <p>Designation :</p>
                </div>
            </div>
            <div className='assignTheCoordinators'>
                <p className='assignCoordinatorHeader'>Assign the Event Coordinators</p>
                <select className='SelectOptions'>
                    <option value="none" className='options'>None</option>
                    <option value="Banner Launch" className='options'>Banner Launch</option>
                    <option value="Traditional Day" className='options'>Traditional Day</option>
                    <option value="Final Fest" className='options'>Final Fest</option>
                    <option value="Men's Cricket" className='options'>Men's Cricket</option>
                    <option value="Men's Kabaddi" className='options'>Men's Kabaddi</option>
                    <option value="Men's Volley Ball" className='options'>Men's Volley Ball</option>
                    <option value="Men's Kho Kho" className='options'>Men's Kho Kho</option>
                    <option value="Carroms" className='options'>Carroms</option>
                    <option value=" Pubg" className='options'>Pubg</option>
                    <option value="Free Fire" className='options'>Free Fire</option>
                    <option value="Women Throw Ball" className='options'>Women Throw Ball</option>
                </select>

            </div>
            <div className='coordinators'>
                <input type='text' placeholder='Name' className='coordinatorDetails'></input>
                <input type='text' placeholder='Branch' className='coordinatorDetails'></input>
                <input type='text' placeholder='Year' className='coordinatorDetails'></input>
                <input type='text' placeholder='Department' className='coordinatorDetails'></input>
                <input type='text' placeholder='Section' className='coordinatorDetails'></input>

                {/* <p className='coordinatorDetails'>Coordinator Name</p>
                <p className='coordinatorDetails'>Brach</p>
                <p className='coordinatorDetails'>Year</p>
                <p className='coordinatorDetails'>Department</p>
                <p className='coordinatorDetails'>Section</p> */}
            </div>
            <p className='setCoordinator'>Set As A Coordinator</p>


            <div className='assignTheCoordinators'>
                <p className='assignEventHeader'>Assign the Events</p>
                <select className='SelectOptions'>
                    <option value="none" className='options'>None</option>
                    <option value="Banner Launch" className='options'>Banner Launch</option>
                    <option value="Traditional Day" className='options'>Traditional Day</option>
                    <option value="Final Fest" className='options'>Final Fest</option>
                    <option value="Men's Cricket" className='options'>Men's Cricket</option>
                    <option value="Men's Kabaddi" className='options'>Men's Kabaddi</option>
                    <option value="Men's Volley Ball" className='options'>Men's Volley Ball</option>
                    <option value="Men's Kho Kho" className='options'>Men's Kho Kho</option>
                    <option value="Carroms" className='options'>Carroms</option>
                    <option value=" Pubg" className='options'>Pubg</option>
                    <option value="Free Fire" className='options'>Free Fire</option>
                    <option value="Women Throw Ball" className='options'>Women Throw Ball</option>
                </select>

            </div>
            <div className='coordinators'>
                <input type='text' placeholder='Event Date (DD-MM-YYYY)' className='coordinatorDetails'></input>
                <input type='text' placeholder='Event Start Time ex 9am' className='coordinatorDetails'></input>
                <input type='text' placeholder='Event End Time ex 5pm' className='coordinatorDetails'></input>
                <input type='text' placeholder='Section' className='coordinatorDetails'></input>

                {/* <p className='coordinatorDetails'>Coordinator Name</p>
                <p className='coordinatorDetails'>Brach</p>
                <p className='coordinatorDetails'>Year</p>
                <p className='coordinatorDetails'>Department</p>
                <p className='coordinatorDetails'>Section</p> */}
            </div>
            <p className='setEvent'>Set As A Event</p>
            <p className='hoddetails'>Only access to ,<br></br>
                Head Of the Department, CSE HOD<br></br>
                Mr Raja Sheaker</p>
        </div>
    )
}
export function StudentDashboard() {
    return (
        <div className='student-dashboard'>
            <div className='student-profile'>
                <div className='student-profile-details'>

                    <img src="https://static.thenounproject.com/png/3918329-200.png" alt="Profile" className="profile-image"></img>

                </div >
                <div className='studentDetails'></div>
                <p className='student-header'>Hema Akkiredi</p>
                <p className='student-details'>Student ID :</p>
                <p className='student-details'>Branch :</p>
                <p className='student-details'>Year :</p>
                <p className='student-details'>Fest Id :</p>

                <div className="social-media1">

                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt='Linkdin' height="20px" width="20px" className='linkdin'></img> */}
                    <img src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" className='instagram' alt='Instagram' height="30px" width="30px"></img>
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='github' alt='GitHub' height="20px" width="20px"></img>
                    <img src='https://cdn-icons-png.flaticon.com/512/20/20673.png' className='facebook' alt='FaceBook' height="20px" width="20px"></img>
                    <img src='https://img.icons8.com/?size=100&id=8808&format=png&color=1A1A1A' className='facebook' alt='Linkdin' height="20px" width="20px"></img>
                </div>

            </div>
        </div>
    )
}
export function Assignment() {
    return (
        <div className='assignment'>
            <p>Voolenter's Assignment</p>
            <div className='voolenterAssignment'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUfjZ7Q43DeyVE-9CdgprQDBY0uX0o2dzUw&s' alt='Mss' className='sponsorlogo'></img>
                <p className='sponsorContent'>Mss</p>
            </div>
        </div>
    )
}

export function Accessibility() {
    return (
        <div>

        </div>
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
                <li className="gamification"><Link to="/Sports" className="gamification-links">Sprots</Link></li>
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

export function Sports() {
    return (
        <div>
            <h1 className='footerEventsHeader'>Men's Cricket</h1>
            <img className="cricket1-logo" src="https://www.shutterstock.com/image-photo/mumbai-india-october-2-2021-600nw-2085546409.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/Cricket1Event" className="footer-more1">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>


            <h1 className='footerEventsHeader'>Men's Kabaddi</h1>
            <img className="men-kabaddi-logo" src="https://www.prokabaddi.com/static-assets/waf-images/84/9b/95/16-9/dgYZwDiTti.jpg" alt="Fest image" height="200px" width="80%"></img>

            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/MenKabaddiEvent" className="footer-more1">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>



            <h1 className='footerEventsHeader'>Men's Kho Kho</h1>
            <img className="men-khokho-logo" src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-96978,resizemode-75,msid-93825988/news/sports/passion-dreams-hardships-unite-kho-kho-league-players.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/MenKhoKhoEvent" className="footer-more1">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>



            <h1 className='footerEventsHeader'>Men's Volley Ball</h1>
            <img className="men-volleyball-logo" src="https://t4.ftcdn.net/jpg/01/23/19/87/360_F_123198705_HHB36SHxNnTspMYX7mXqg9rAGwS5tNB0.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/MenVolleyballEvent" className="footer-more1">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>


            <h1 className='footerEventsHeader'>Carroms</h1>
            <img className="carrom-logo" src="https://d29fhpw069ctt2.cloudfront.net/photo/53128/preview/carrom-board-coins_preview_5e42.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/EssayWritingEvent" className="footer-more">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>
            <h1 className='footerEventsHeader'>Free Fire</h1>
            <img className="free-fire-logo" src="https://dl.dir.freefiremobile.com/common/web_event/hash/54f31449f5f91cf0cc223cc635cd5952jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/FreeFireEvent" className="footer-more">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>


            <h1 className='footerEventsHeader'>Pubg</h1>
            <img className="cricket1-logo" src="https://www.india.com/wp-content/uploads/2021/07/pubg-mobile-redeem-codes-1.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/PubgEvent" className="footer-more1">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>



            <h1 className='footerEventsHeader'>Women's Throw Ball</h1>
            <img className="women-throwball-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJV8Nrb1qp9IO3MsopUd4OdzAeKyC1CiIOeWBUlROwk6LItSvsO3kkTAn_EvSCi5DmXbw&usqp=CAU" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/WomensThrowballEvent" className="footer-more1">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>


        </div>
    )
}
export function TechnicalEvents() {
    return (
        <div>
            <h1 className='footerEventsHeader'>Pro Coder</h1>
            <img className="coder-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHMK0GpTCLI3HsquC4NyhPnd-eUW06I5b7Q&s" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/ProCoderEvent" className="footer-more">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>


            <h1 className='footerEventsHeader'>Guess The Output</h1>
            <img className="guess-output-logo" src="https://www.shutterstock.com/image-photo/hand-drawing-ipo-input-process-260nw-2186724959.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/GuessTheOutputEvent" className="footer-more">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>

            <h1 className='footerEventsHeader'>Quiz</h1>
            <img className="quiz-logo" src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-811.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/QuizEvent" className="footer-more">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>

            <h1 className='footerEventsHeader'>Essay Writing</h1>
            <img className="essay-logo" src="https://www.shutterstock.com/image-photo/essays-english-language-part-exam-260nw-1320732236.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/EssayWritingEvent" className="footer-more">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>


        </div>
    )
}
export function CulturalEvents() {
    return (
        <div>
            <h1 className='footerEventsHeader'>Banner Launch</h1>
            <img className="bannerlaunch-logo" src="https://miracle.edu.in/wp-content/uploads/Mes-Milan-National-level-fest.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>

            <h1 className='footerEventsHeader'>Traditional Day</h1>
            <img className="traditional-logo" src="https://thumbs.dreamstime.com/b/group-ethnic-college-students-diverse-dressed-traditional-attire-60381124.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>

            <h1 className='footerEventsHeader'>Final Fest</h1>
            <img className="final-logo" src="https://preview.redd.it/grand-fest-photos-v0-emm62qvtr6pd1.jpg?width=1080&crop=smart&auto=webp&s=c9e60cb7c696b23a936c49ac3e84235ba35a5840" alt="Fest image" height="200px" width="80%" ></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>

        </div>
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
        <div className='stallsInfo'>
            {/* <div className='stallsCard'>
                <img className="stallsLogo" src='https://c8.alamy.com/comp/EXD916/stalls-selling-various-food-and-beverage-during-ramadhan-month-EXD916.jpg' alt='Food and Beverage Stalls'height='30px' width="30px" ></img>
                <h2 className='stallsName'> Food & Beverage Stalls</h2>

            </div> */}
            <div className='previousCards'>
                    <img className='previousFestLogo' src='https://c8.alamy.com/comp/EXD916/stalls-selling-various-food-and-beverage-during-ramadhan-month-EXD916.jpg' alt='Sprots Image' height="200px" width="80%"></img>
                    <h1 className='previousEventHeader'>Food & Beverage Stalls</h1>
                    <p className='previousEventContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum ex nostrum id nesciunt soluta sapiente numquam unde repudiandae corporis. Perspiciatis, harum! Vel ullam distinctio harum, quasi deleniti ab at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id, optio quos earum cupiditate, adipisci corrupti nisi assumenda accusamus odio ullam est ab incidunt nam delectus dolorum perspiciatis autem omnis.
                        
                    </p>
                    <p className='previousEventDetails'>Venue :</p>
                    <p className='previousEventDetails'>Start Date :</p>
                    <p className='previousEventDetails'>End Date :</p>
                </div>
        </div>
    )
}
export function LiveEvent() {
    return (
        <div></div>
    )
}
export function PreviousFest() {
    return (
        <div>
            <h1 className='previousMainHeader'>Technovate</h1>
            <p className='previousMainContent'>Technovate	Innovate. Integrate. Ignite.</p>
            <div className='previousFestInfo'>
                <h2 className='previousFestHeader'>Gallery</h2>
                <div className='previousCards'>
                    <img className='previousFestLogo' src='https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?semt=ais_hybrid&w=740' alt='Sprots Image' height="200px" width="80%"></img>
                    <h1 className='previousEventHeader'>Sports</h1>
                    <p className='previousEventContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum ex nostrum id nesciunt soluta sapiente numquam unde repudiandae corporis. Perspiciatis, harum! Vel ullam distinctio harum, quasi deleniti ab at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id, optio quos earum cupiditate, adipisci corrupti nisi assumenda accusamus odio ullam est ab incidunt nam delectus dolorum perspiciatis autem omnis.
                        
                    </p>
                </div>


                <div className='previousCards'>
                    <img className='previousFestLogo' src='https://i.pinimg.com/736x/40/8c/58/408c5810bee69986854907d477ccee89.jpg' alt='Traditional Image' height="200px" width="80%"></img>
                    <h1 className='previousEventHeader'>Traditional</h1>
                    <p className='previousEventContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum ex nostrum id nesciunt soluta sapiente numquam unde repudiandae corporis. Perspiciatis, harum! Vel ullam distinctio harum, quasi deleniti ab at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id, optio quos earum cupiditate, adipisci corrupti nisi assumenda accusamus odio ullam est ab incidunt nam delectus dolorum perspiciatis autem omnis.
                        
                    </p>
                </div>
                <div className='previousCards'>
                    <img className='previousFestLogo' src='https://preview.redd.it/grand-fest-photos-v0-emm62qvtr6pd1.jpg?width=1080&crop=smart&auto=webp&s=c9e60cb7c696b23a936c49ac3e84235ba35a5840' alt='Final Fest Image' height="200px" width="80%"></img>
                    <h1 className='previousEventHeader'>Final Fest</h1>
                    <p className='previousEventContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum ex nostrum id nesciunt soluta sapiente numquam unde repudiandae corporis. Perspiciatis, harum! Vel ullam distinctio harum, quasi deleniti ab at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id, optio quos earum cupiditate, adipisci corrupti nisi assumenda accusamus odio ullam est ab incidunt nam delectus dolorum perspiciatis autem omnis.
                        
                    </p>
                </div>
                <div className="previousoFoterSocial">
                    
                <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://img.icons8.com/?size=100&id=GNvM541FBQu7&format=png&color=000000" alt="Google logo" className="google-link"></img>
                    <img src="https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://img.icons8.com/?size=100&id=CtrV2SV33rD9&format=png&color=000000" alt="Google logo" className="google-link"></img>
                
                </div>

              
               
            </div>
        </div>
    )
}
export function Sponser() {
    return (
        <div className='sponsers'>
            <h3 className='sponser-header'>Our Sponsers And their Logos</h3>
            <div className='listOfCards'>
            <div className='sponser-cards'>
            <img src='https://t3.ftcdn.net/jpg/04/86/89/86/360_F_486898660_UJaOUA0MbM0HpU0JPSr3QG0bcTk6w8DJ.jpg' alt='Mss Sponsers' className='sponser-logo'></img>
            <p className='sponser-card-header'>MSS</p>
                
            </div>
            <div className='sponser-main-type'>
                 <p className='sponser-type'>Diamond Sponser</p>
            </div>
            </div>
        </div>
    )
}
export function About() {
    return (
        <div className='aboutFest'>
            <h2 className='aboutFestHeader'>Fest Title</h2>
            <img className="clg-fest-logo" src='https://media.collegedekho.com/media/img/news/college_fests.jpg?height=310&width=615' alt='Fest Image' height="200px" width="80%"></img>
            <p className='about-fest-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum vel quam molestias incidunt tempora aut pariatur eaque facere maiores! Deleniti iusto ullam et tenetur suscipit voluptates odit neque veniam minima.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit expedita labore voluptatem pariatur at iure, officiis totam ullam natus quas saepe maiores quos illo autem. Repellat aut veniam perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae voluptate aperiam maxime? Eaque inventore quos ut illum tempore! Totam accusantium et recusandae placeat. Cum assumenda id ad dolor dolores?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut nostrum aliquam eveniet sint ut quod dolore quos ab quisquam doloremque debitis, tempora aspernatur omnis maiores vitae quia harum est?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim neque totam eum ducimus. Placeat error unde excepturi nulla voluptatum commodi recusandae aspernatur, alias assumenda voluptatibus quibusdam, neque ipsa suscipit numquam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sit neque, eius cumque nemo nisi optio maxime assumenda aliquid voluptate. Omnis quasi facilis quis, harum nisi esse porro dolore vero.
            </p>
        </div>
    )
}
export function Support() {
    return (
        <div className="subClass">
            <ul className="unorder">
                <li className="support"><h2>Support & Accessibility</h2></li>
                <li className="support"><Link to="/faq" className="support-links">FAQ</Link></li>
                <li className="support"><Link to="/Emergency" className="support-links">Emergency Numbers</Link></li>
                <li className="support"><Link to="/LiveChat" className="support-links">Live Chat Support</Link></li>


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
        <div className=''>
            <div className='faq'> <p className='faqHeader'>FAQ</p></div>
            <div className='faqMore'>
                <div className='faqsection'>
                    {/* <select className='SelectOptions'>
                        <option value="none" className='options'>When and where is the fest happening?</option>
                        <option value="none" className='options'>The fest will be held on [Start Date] to [End Date] at [Venue/College Campus].</option>
                    </select> */}
                    <p className='question'>
                        When and where is the fest happening?
                    </p>
                    <p className='answer'> The fest will be held on [Start Date] to [End Date] at [Venue/College Campus].</p>
                </div>
                <div className='faqsection'>
                    <p className='question'> Do I need to pay any registration fees? Is the fest open to other colleges?
                    </p>
                    <p className='answer'> Most events are free. Some workshops or competitions may have minimal charges. Refer to each event’s page for details.</p>
                </div>
                <div className='faqsection'>
                    <p className='question'>
                        How can I become a volunteer?
                    </p>
                    <p className='answer'>Visit the Volunteers page and fill out the sign-up form. You'll be contacted by the team lead if shortlisted</p>
                </div>
            </div>
        </div>

    )
}

// Emergency Numbers
// ==============================================================================================================================================

export function Emergency() {
    return (
        <div>

        </div>
    )
}

export function LiveChat(){
    return(
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
                <li className="post-fest"><Link to="/ContactUs" className="post-fest-links">Results And Winners</Link></li>
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
            <div className='mainFeedBackForm'>
                <p className='feedbackformHeader'>Post-event feedback survey</p>
                <p className='feedbackformContent'>Thank you for your participation. The purpose of this questionnaire is to collect your feedback, which will help us improve this event in the future. All information will remain confidential. </p>
            </div>
            <div className='sub-feedbackform'>
                <p className='questions'>Overall, how satisfied are you with the event?</p>
                <img src='https://cdn.forms.office.net/forms/formsresources/intelligence/themes/star-employee.jpg' alt='Star the Event' height="300px" width="300px"></img>
                <div className='yesOrNo'>
                    <label htmlFor="yes">
                        <input type="radio" id="yes" name="agree" value="yes" /> Yes
                    </label>

                    <label htmlFor="no">
                        <input type="radio" id="no" name="agree" value="no" /> No
                    </label>
                </div>

                <label>Is this your first time attending events like this?</label>
                <div>
                    <div className='yesOrNo'>
                        <label htmlFor="yes">
                            <input type="radio" id="yes" name="agree" value="yes" /> Yes
                        </label>

                        <label htmlFor="no">
                            <input type="radio" id="no" name="agree" value="no" /> No
                        </label>
                    </div>
                </div>

            </div>





            <div className="elements">
                {/* <p>Name: </p>
                <p>Email :</p> */}
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
        <div>
              <div className='assignTheCoordinators'>
                <p className='assignEventHeader'>Assign the Events</p>
                <select className='SelectOptions'>
                    <option value="none" className='options'>None</option>
                    <option value="Banner Launch" className='options'>Banner Launch</option>
                    <option value="Traditional Day" className='options'>Traditional Day</option>
                    <option value="Final Fest" className='options'>Final Fest</option>
                    <option value="Men's Cricket" className='options'>Men's Cricket</option>
                    <option value="Men's Kabaddi" className='options'>Men's Kabaddi</option>
                    <option value="Men's Volley Ball" className='options'>Men's Volley Ball</option>
                    <option value="Men's Kho Kho" className='options'>Men's Kho Kho</option>
                    <option value="Carroms" className='options'>Carroms</option>
                    <option value=" Pubg" className='options'>Pubg</option>
                    <option value="Free Fire" className='options'>Free Fire</option>
                    <option value="Women Throw Ball" className='options'>Women Throw Ball</option>
                </select>

            </div>
        </div>
    )
}


//Terms And Conditions
// ==============================================================================================================================================

export function TermsAndConditions() {
    return (
        <div className='termsandconditions'>
            <p className='terms'>Terms Of Use</p>
            <p className='main-terms'>Welcome to [Your Fest Name], organized by [Your College Name]. By accessing or using our website (https://www.yourfest.com) and participating in our events, you agree to be bound by the following Terms and Conditions.

                If you do not agree with these terms, please do not use our website or register for any events.</p>
            <ol className='list-of-terms'>
                <li className='termsListItems'>Eligibility</li>
                <p className='termsContent'>Our events are generally open to college students across India. Certain events may have specific eligibility criteria which will be clearly mentioned on their respective registration pages.</p>
                <li className='termsListItems'> Use of the Website</li>
                <p className='termsContent'>You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.
                    <ul className='useOfwebsite'>
                        <li>Use our site to post false, misleading, or offensive content</li>
                        <li>Attempt to hack or interfere with the functionality of the website</li>
                        <li>Use automated tools (bots) to register for events</li>
                    </ul>
                </p>

                <li className='termsListItems'>Event Rules</li>
                <p className='termsContent'>Each event may have its own set of rules, formats, and judging criteria. Participants are expected to read and follow those rules strictly. The decisions made by the organizing committee or event judges are final and binding.</p>
                <li className='termsListItems'> Intellectual Property</li>
                <p className='termsContent'>All content on the Website, including logos, images, event descriptions, and designs, are the intellectual property of [Your Fest Name] or used with permission. You may not copy, reproduce, or use them without written permission.

                </p>


                <li className='termsListItems'>Limitation of Liability</li>
                <p className='termsContent'>While we strive to keep the Website and all events running smoothly, [Your Fest Name] and [Your College Name] are not responsible for:</p>
                <ul className='useOfwebsite'>
                    <li>Technical issues beyond our control</li>

                    <li>Incomplete or lost registrations due to network problems</li>

                    <li>Any personal loss or damage during participation in offline events</li>
                </ul>

                <li className='termsListItems'>Cancellation or Changes </li>
                <p className='sublist'>We reserve the right to:</p>
                <ul className='useOfwebsite'>
                    <li>Cancel or reschedule events</li>

                    <li>Modify rules or eligibility criteria</li>

                    <li>Update these Terms and Conditions at any time</li>
                </ul>

                <p className='termsContent'>Changes will be posted on the Website and are effective immediately upon posting.</p>

                <li className='termsListItems'> Contact Information</li>
                <p className='termsContent'>If you have any questions regarding these Terms, feel free to contact us:</p>
                <p>Email :</p>
                <p>Phone :</p>


            </ol>
        </div>
    )
}
// ===========================================================================================================================================
export function Privacy() {
    return (
        <div className='privacy'>
            <img src='https://img.icons8.com/?size=100&id=4nWdax1G8qMi&format=png&color=1A1A1A' alt='PrivacyPolicy' className='privacyPolicy-logo' />
            <p className='privacyPolicy-header'>Privacy Policy</p>
            <p className='privacyPolicy'>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
            {/* <p className='privacyPolicy-sub'>This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.</p> */}
            <p className='privacyPolicy-mainContent'>Welcome to [Your Fest Name], hosted by [Your College Name]. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website [Your Website URL].</p>
            <hr></hr>
            <p className='privacyPolicy-mainContent'>[Your Fest Name]’s Privacy Policy describes how we collect, use, and disclose your information when you use our website and associated services.

                This Privacy Policy also explains the choices you have regarding your personal information, including how you can access, update, or object to certain uses of your data.</p>
            <p className='privacyPolicy-subHeader'>Here are some important definitions to help you understand our terms and this Privacy Policy:</p>

            <ol className='listOfInfo'>
                <li className='privacy-list'>Information We Collect</li>
                <li className='privacy-list'>How We Use Your Information</li>
                <li className='privacy-list'> Cookies</li>
                <li className='privacy-list'>Sharing of Information</li>
                <li className='privacy-list'>Data Security</li>
                <li className='privacy-list'>Third-Party Links</li>
                <li className='privacy-list'>Your Rights</li>
                <li className='privacy-list'>Contact Us</li>
            </ol>

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


            {/* <div className='getInTouch'>
                <p className='sendMsg'>Get In Touch</p>
                <input type="text" placeholder="Username" name="username" id="username" className="UserName">
                </input>
                <input type="email" placeholder="Email" name="password" id="email" className="userEmail">
                </input>
                <textarea rows="4" placeholder="Subject" name="subject" id="subject" className="subject" />
                <textarea rows="10" placeholder='Message' name='message' id='message' className='message' /> */}
            {/* <input type="textarea" rows="4" placeholder="Subject" name="subject" id="subject" className="subject">
                    </input>
                    <input type="textarea" rows="6" placeholder="Message" name="message" id="message" className="message">
                    </input> */}
            {/* <div className='sumbmitMessage'>
                    <button type="submit" className="sendMessage">Send Message</button>
                </div>

            </div> */}

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
