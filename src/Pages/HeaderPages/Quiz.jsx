export default function Quiz() {
    return (
        <div className='quiz'>
            <p className='quiz-header'>Brain Brawl 2025</p>
            <img className="quiz-logo" src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-811.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='quiz-theme'>Think Fast. Answer Smart. Win Big.</p>

            <p className='quiz-content'>Get ready for a battle of wits at Brain Brawl 2025, the ultimate quiz showdown where speed meets knowledge. Whether you’re a trivia master, a current affairs champ, or just love cracking clues, this event is your time to shine!
                From general knowledge and science to pop culture and puzzles — every round brings a new twist.
                Team up, buzz in, and brawl your way to the top! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, sequi! Minus fugit consectetur quasi perspiciatis non, porro iste, labore enim neque alias reiciendis. Amet omnis id eos dolores quia corporis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iusto, dolor corrupti libero, eaque harum nam pariatur perferendis iste aliquid laboriosam perspiciatis recusandae, ducimus facilis? Voluptatum cumque a quo consequatur.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>

            <Link to="/QuizEvent" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>


        </div>
    )
}
