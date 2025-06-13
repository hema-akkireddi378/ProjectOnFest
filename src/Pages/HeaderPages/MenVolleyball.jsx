import { Link } from "react-router-dom";

function MenVolleyball() {
    return (
        <div>
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
            <Link to="/MensVolleyBallRegistration" className="footer-more1">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>

            {/* <p className='men-volleyball-header'>Sky Serve 2025 – Volleyball Showdown </p>
            <img className="men-volleyball-logo" src="https://t4.ftcdn.net/jpg/01/23/19/87/360_F_123198705_HHB36SHxNnTspMYX7mXqg9rAGwS5tNB0.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='men-volleyball-theme'>Elevate the Game. Dominate the Court.</p>
            <p className='men-volleyball-content'>Get ready to rise above the net at Sky Serve 2025, the ultimate volleyball clash where precision meets passion. Watch teams soar, spike, and smash their way to victory with flawless coordination and fierce energy.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde sunt omnis repellat suscipit temporibus laudantium, deleniti, commodi, cumque beatae accusantium saepe a repellendus quidem sequi quaerat tempora aut quas?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia earum, quae magni hic tenetur maxime, illum harum ipsam pariatur dignissimos quod delectus quasi mollitia aliquam qui sit unde at dolorem.
            </p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/MensVolleyballRegistration" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link> */}
        </div>
    )
}
export default MenVolleyball