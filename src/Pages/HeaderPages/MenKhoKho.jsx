import { Link } from "react-router-dom";

export default function MenKhokho() {
    return (
        <div className='menkhokho'>
            <p className='men-khokho-header'>Chase the Glory  Kho Kho 2025 </p>
            <img className="men-khokho-logo" src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-96978,resizemode-75,msid-93825988/news/sports/passion-dreams-hardships-unite-kho-kho-league-players.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='men-khokho-theme'>Run with Purpose. Tag with Pride.</p>
            <p className='men-khokho-content'>Get ready for the pulse-pounding excitement of Kho Kho 2025, a game where agility, alertness, and teamwork steal the spotlight! This classic Indian sport brings out the best in strategy, speed, and coordination as players dash, dive, and dodge with electrifying intensity.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quasi nobis, repellat vero corporis laborum modi, fuga ex quidem ducimus nemo et sint rem? Accusamus quam eaque tenetur beatae eos.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias vitae in iste iure quas voluptas. Nam, fugit nihil nobis animi ratione officiis, repellat eligendi incidunt quis explicabo dicta veritatis molestias?
            </p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/MensKhoKhoRegistration" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>
        </div>
    )
}