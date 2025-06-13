import { Link } from "react-router-dom";
export default function ProCoder() {
    return (
        <div className='proCoder'>
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
            <Link to="/ProcoderRegistration" className="footer-more">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>
            {/* <p className='coder-header'>ProCoder 2025  </p>
            <img className="coder-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHMK0GpTCLI3HsquC4NyhPnd-eUW06I5b7Q&s" alt="Fest image" height="200px" width="80%"></img>
            <p className='coder-theme'>Code. Compete. Conquer.</p>
            <p className='coder-content'>ProCoder 2025 is the ultimate battleground for the brightest minds in programming. A celebration of logic, speed, and innovation — this event challenges participants to push the limits of their coding skills and solve real-world problems under pressure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam recusandae corporis veritatis est dolore neque eveniet, commodi itaque voluptatibus nisi. Amet delectus eos perferendis explicabo ratione dolorem numquam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi placeat, tenetur, incidunt consequuntur odit beatae reiciendis enim optio illum ut animi nisi, est voluptatibus error esse tempore possimus assumenda!</p>

            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>

            <Link to="/ProCoderRegistration" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link> */}

        </div>
    )
}