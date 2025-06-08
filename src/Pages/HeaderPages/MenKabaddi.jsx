import { Link } from "react-router-dom";

export default function MenKabaddi() {
    return (
        <div className='menKabaddi'>
            <p className='men-kabaddi-header'>Mat Warriors 2025  Kabaddi Clash </p>
            <img className="men-kabaddi-logo" src="https://www.prokabaddi.com/static-assets/waf-images/84/9b/95/16-9/dgYZwDiTti.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='men-kabaddi-theme'>Raid. Resist. Rise.</p>
            <p className='men-kabaddi-content'>Step into the arena where tradition meets adrenaline — Mat Warriors 2025 is your call to battle in the raw and riveting game of Kabaddi. It's not just a sport; it's a test of strength, speed, strategy, and sheer willpower.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatum voluptatibus. Unde est neque at beatae iste, veniam quis consectetur voluptates id cum, dolorum eum maxime dolor quaerat! Exercitationem, incidunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi voluptatum ratione, repellendus aperiam laudantium laborum at aliquid vero, fuga nam velit! Vero consequatur aut, enim quidem aliquam iure officia!
            </p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/MenKabaddiEvent" className="more1">
                <button type='link' className='button-link'>Register</button>
            </Link>
        </div>
    )
}
