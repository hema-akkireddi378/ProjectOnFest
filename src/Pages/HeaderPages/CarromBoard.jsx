import { Link } from "react-router-dom";

export default function CarromBoard() {
    return (
        <div className='carromboard'>
            <p className='carrom-header'>Battle Beyond Boundaries </p>
            <img className="carrom-logo" src="https://www.shutterstock.com/image-photo/mumbai-india-october-2-2021-600nw-2085546409.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='carrom-theme'>Cricket Carnival 2025</p>

            <p className='carrom-content'>The purpose of Cricket Carnival 2025 is to celebrate the spirit of sportsmanship, teamwork, and competitive zeal through the game that unites millions – Cricket. This event aims to bring together passionate players and fans, offering a platform where talent meets opportunity and every boundary hit echoes with cheer.
                Whether you're bowling with fire or batting with flair, this is your stage to shine, compete, and honor the gentleman’s game in its truest form.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, nulla consequatur hic, vel soluta impedit omnis ex quos esse rem aperiam non odit assumenda, accusantium maiores distinctio error sed illum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ut quod facilis. At asperiores, quidem eveniet modi id odio consequatur, iste aut, dolorem amet provident animi dolor repudiandae quos repellat.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/CarromBoardRegistration" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>
        </div>
    )
}