import { Link } from "react-router-dom";

export default function GuessTheOutput() {
    return (
        <div >
           <h1 className='footerEventsHeader'>Guess The Output</h1>
            <img className="technical-images" src="https://www.shutterstock.com/image-vector/algorithm-data-input-output-process-600nw-2164397721.jpg" alt="Fest image" height="600px" width="80%"></img>
            <p className='footerEventContent'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quae mollitia, sunt sed commodi, quos alias cupiditate aperiam nulla fuga eos quasi dicta obcaecati, exercitationem temporibus. Recusandae magni est quae?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ducimus officia dicta necessitatibus, soluta ipsum odio assumenda, animi repudiandae vero quaerat sequi aliquam quidem? Aspernatur itaque fugit soluta hic repellat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius, veritatis molestias et eum quam magni dolores aliquam quaerat officiis explicabo culpa, vel in, omnis pariatur laboriosam nisi ullam optio!

            </p>
            <h3 className='footer-event-details'>Event Details</h3>
            <p className='footer-sub-details'>Event Date:</p>
            <p className='footer-sub-details'>Event Start Time :</p>
            <p className='footer-sub-details'>Event Venue: </p>
            <p className='footer-sub-details'>Event End Time</p>
            <Link to="/GuessTheOutputRegistration" className="footer-more">
                <button type='link' className='footer-button-link'>Register</button>
            </Link>

            {/* <p className='guess-output-header'>Guess the Output 2025</p>
            <img className="guess-output-logo" src="https://www.shutterstock.com/image-photo/hand-drawing-ipo-input-process-260nw-2186724959.jpg" alt="Fest image" height="200px" width="80%"></img>
            <p className='guess-output-theme'>Decode. Predict. Dominate.</p>
            <p className='guess-output-content'>Welcome to Guess the Output 2025, where logic meets intuition! This thrilling coding challenge is designed to test how well you understand what really happens under the hood of a program. Participants will face tricky snippets, mind-bending logic, and edge cases that go beyond syntax. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quisquam nulla voluptate harum aliquid dicta deserunt voluptatem mollitia atque similique illo accusantium eveniet, ut consectetur animi fugit adipisci possimus minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit deleniti at molestiae assumenda similique, laborum eum voluptatem rem alias a quo quod qui, debitis delectus atque adipisci dolorum? Deleniti.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/GuessTheOutputRegistration" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link> */}
        </div>
    )
}