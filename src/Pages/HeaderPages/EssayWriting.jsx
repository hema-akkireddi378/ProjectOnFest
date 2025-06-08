import { Link } from "react-router-dom";

export default function EssayWriting() {
    return (
        <div className='essayWriting'>
            <p className='essay-header'>Inkspire 2025</p>
            <img className="essay-logo" src="https://www.shutterstock.com/image-photo/essays-english-language-part-exam-260nw-1320732236.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='essay-theme'>Write to Express. Write to Inspire.</p>

            <p className='essay-content'>Inkspire 2025 invites all wordsmiths and thinkers to pour their thoughts onto paper and shape ideas that matter. This essay writing competition is your stage to reflect, reason, and express on themes that challenge the mind and stir the soul. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci maxime deleniti omnis velit itaque explicabo unde nulla saepe voluptatibus. Inventore ea ex quisquam esse numquam officiis neque veniam repellendus. Iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus possimus voluptatibus reprehenderit, praesentium molestias veniam libero non consequuntur doloribus magnam repellendus eum sit provident nesciunt blanditiis sunt tempora eveniet.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/EssayWritingEvent" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>


        </div>
    )
}