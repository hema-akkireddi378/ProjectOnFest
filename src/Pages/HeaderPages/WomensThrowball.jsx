import { Link } from "react-router-dom"
export default function WomensThrowball() {
    return (
        <div className='womenthrowball'>
            <p className='women-throwball-header'>Power Play 2025  Women’s Throwball Challenge </p>
            <img className="women-throwball-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJV8Nrb1qp9IO3MsopUd4OdzAeKyC1CiIOeWBUlROwk6LItSvsO3kkTAn_EvSCi5DmXbw&usqp=CAU" alt="Fest image" height="200px" width="200px"></img>
            <p className='women-throwball-theme'>Grace. Grit. Game On</p>
            <p className='women-throwball-content'>Celebrate strength, skill, and sisterhood at Power Play 2025, the ultimate throwball showdown exclusively for women athletes. This event is not just about competition — it’s about confidence, collaboration, and courage on the court.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum animi odio, est vero illum sit perferendis, deserunt optio vel sapiente dolor recusandae? Quae perferendis a corrupti accusamus recusandae sequi!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis dolorem adipisci, a molestias similique eum reprehenderit? Maiores soluta odio aut. Quia alias voluptates reiciendis quod ad repellat qui velit.
            </p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time:</p>
            <Link to="/WomensThrowBallRegistration" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>
        </div>
    )
}
