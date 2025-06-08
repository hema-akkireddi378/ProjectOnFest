export default function GuessTheOutput() {
    return (
        <div className='guessTheOutput'>
            <p className='guess-output-header'>Guess the Output 2025</p>
            <img className="guess-output-logo" src="https://www.shutterstock.com/image-photo/hand-drawing-ipo-input-process-260nw-2186724959.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='guess-output-theme'>Decode. Predict. Dominate.</p>
            <p className='guess-output-content'>Welcome to Guess the Output 2025, where logic meets intuition! This thrilling coding challenge is designed to test how well you understand what really happens under the hood of a program. Participants will face tricky snippets, mind-bending logic, and edge cases that go beyond syntax. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quisquam nulla voluptate harum aliquid dicta deserunt voluptatem mollitia atque similique illo accusantium eveniet, ut consectetur animi fugit adipisci possimus minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit deleniti at molestiae assumenda similique, laborum eum voluptatem rem alias a quo quod qui, debitis delectus atque adipisci dolorum? Deleniti.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/GuessTheOutputEvent" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>
        </div>
    )
}