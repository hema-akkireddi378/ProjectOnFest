import { Link } from "react-router-dom";

export default function EssayWriting() {
    return (
        <div>

              <h1 className='footerEventsHeader'>Essay Writing</h1>
            <img className="technical-images" src="https://wakelandaccess.com/wp-content/uploads/2024/04/BA-Hons-Creative-Writing-Major.jpg" alt="Fest image" height="600px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/EssayWritingRegistration" className="footer-more">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>

            {/* <p className='essay-header'>Inkspire 2025</p>
            <img className="essay-logo" src="https://www.shutterstock.com/image-photo/essays-english-language-part-exam-260nw-1320732236.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='essay-theme'>Write to Express. Write to Inspire.</p>

            <p className='essay-content'>Inkspire 2025 invites all wordsmiths and thinkers to pour their thoughts onto paper and shape ideas that matter. This essay writing competition is your stage to reflect, reason, and express on themes that challenge the mind and stir the soul. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci maxime deleniti omnis velit itaque explicabo unde nulla saepe voluptatibus. Inventore ea ex quisquam esse numquam officiis neque veniam repellendus. Iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus possimus voluptatibus reprehenderit, praesentium molestias veniam libero non consequuntur doloribus magnam repellendus eum sit provident nesciunt blanditiis sunt tempora eveniet.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/EssayWritingRegistration" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link> */}



        </div>
    )
}