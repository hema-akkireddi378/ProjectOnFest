import { Link } from "react-router-dom";

export default function Cricket1() {
    return (
        <div className='cricket1'>
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
            <Link to="/MensCricketRegistration" className="footer-more1">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>
            {/* <p className='cricket1-header'>Battle Beyond Boundaries </p>
            <img className="cricket1-logo" src="https://www.shutterstock.com/image-photo/mumbai-india-october-2-2021-600nw-2085546409.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='cricket1-theme'>Cricket Carnival 2025</p>
            <p className='cricket1-content'>The purpose of Cricket Carnival 2025 is to celebrate the spirit of sportsmanship, teamwork, and competitive zeal through the game that unites millions – Cricket. This event aims to bring together passionate players and fans, offering a platform where talent meets opportunity and every boundary hit echoes with cheer.
                Whether you're bowling with fire or batting with flair, this is your stage to shine, compete, and honor the gentleman’s game in its truest form.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores, ut dicta rerum aliquam deserunt laudantium veritatis et sint provident necessitatibus repellat consequatur inventore officiis aut. Beatae quos sapiente libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem maiores nihil exercitationem quasi et at temporibus est sint, explicabo autem, incidunt amet ipsam neque aliquam quae ad excepturi qui quo.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/MensCricketRegistration" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link> */}
        </div>
    )
}
