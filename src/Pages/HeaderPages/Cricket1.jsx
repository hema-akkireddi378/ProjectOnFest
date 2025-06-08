import { Link } from "react-router-dom";

export default function Cricket1() {
    return (
        <div className='cricket1'>
            <p className='cricket1-header'>Battle Beyond Boundaries </p>
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
            <Link to="/Cricket1Event" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>
        </div>
    )
}
