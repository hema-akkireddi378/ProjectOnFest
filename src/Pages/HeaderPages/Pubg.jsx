export default function Pubg() {
    return (
        <div className='pubg'>
            <p className='pubg-header'>Battle Beyond Boundaries </p>
            <img className="pubg-logo" src="https://www.shutterstock.com/image-photo/mumbai-india-october-2-2021-600nw-2085546409.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='pubg-theme'>Cricket Carnival 2025</p>
            <p className='pubg-content'>The purpose of Cricket Carnival 2025 is to celebrate the spirit of sportsmanship, teamwork, and competitive zeal through the game that unites millions – Cricket. This event aims to bring together passionate players and fans, offering a platform where talent meets opportunity and every boundary hit echoes with cheer.
                Whether you're bowling with fire or batting with flair, this is your stage to shine, compete, and honor the gentleman’s game in its truest form.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic dolore obcaecati excepturi deserunt nemo illo nam voluptas voluptate adipisci minima delectus, in eligendi veritatis a ad aut eum voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla praesentium voluptate saepe, distinctio error aperiam expedita suscipit quod consequuntur accusantium accusamus inventore ab placeat, nesciunt deleniti tenetur doloremque quidem?</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/PubgRegistration" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>
        </div>
    )
}