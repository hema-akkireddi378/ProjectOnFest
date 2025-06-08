export default function ProCoder() {
    return (
        <div className='proCoder'>
            <p className='coder-header'>ProCoder 2025  </p>
            <img className="coder-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHMK0GpTCLI3HsquC4NyhPnd-eUW06I5b7Q&s" alt="Fest image" height="200px" width="200px"></img>
            <p className='coder-theme'>Code. Compete. Conquer.</p>
            <p className='coder-content'>ProCoder 2025 is the ultimate battleground for the brightest minds in programming. A celebration of logic, speed, and innovation — this event challenges participants to push the limits of their coding skills and solve real-world problems under pressure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam recusandae corporis veritatis est dolore neque eveniet, commodi itaque voluptatibus nisi. Amet delectus eos perferendis explicabo ratione dolorem numquam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi placeat, tenetur, incidunt consequuntur odit beatae reiciendis enim optio illum ut animi nisi, est voluptatibus error esse tempore possimus assumenda!</p>

            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>

            <Link to="/ProCoderEvent" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>

        </div>
    )
}