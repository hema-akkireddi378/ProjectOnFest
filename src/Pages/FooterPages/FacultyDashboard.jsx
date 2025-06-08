export default function FacultyDashboard() {
    return (
        <div>
            <div className='facultyDetails'>
                <div className='facultyprofile'>
                    <img src="https://static.thenounproject.com/png/3918329-200.png" alt="Profile" className="profile-image"></img></div>
                <div className='facultyContent'>
                    <p>Name :</p>
                    <p>Branch :</p>
                    <p>Designation :</p>
                </div>
            </div>
            <div className='assignTheCoordinators'>
                <p className='assignCoordinatorHeader'>Assign the Event Coordinators</p>
                <select className='SelectOptions'>
                    <option value="none" className='options'>None</option>
                    <option value="Banner Launch" className='options'>Banner Launch</option>
                    <option value="Traditional Day" className='options'>Traditional Day</option>
                    <option value="Final Fest" className='options'>Final Fest</option>
                    <option value="Men's Cricket" className='options'>Men's Cricket</option>
                    <option value="Men's Kabaddi" className='options'>Men's Kabaddi</option>
                    <option value="Men's Volley Ball" className='options'>Men's Volley Ball</option>
                    <option value="Men's Kho Kho" className='options'>Men's Kho Kho</option>
                    <option value="Carroms" className='options'>Carroms</option>
                    <option value=" Pubg" className='options'>Pubg</option>
                    <option value="Free Fire" className='options'>Free Fire</option>
                    <option value="Women Throw Ball" className='options'>Women Throw Ball</option>
                </select>

            </div>
            <div className='coordinators'>
                <input type='text' placeholder='Name' className='coordinatorDetails'></input>
                <input type='text' placeholder='Branch' className='coordinatorDetails'></input>
                <input type='text' placeholder='Year' className='coordinatorDetails'></input>
                <input type='text' placeholder='Department' className='coordinatorDetails'></input>
                <input type='text' placeholder='Section' className='coordinatorDetails'></input>
            </div>
            <p className='setCoordinator'>Set As A Coordinator</p>


            <div className='assignTheCoordinators'>
                <p className='assignEventHeader'>Assign the Events</p>
                <select className='SelectOptions'>
                    <option value="none" className='options'>None</option>
                    <option value="Banner Launch" className='options'>Banner Launch</option>
                    <option value="Traditional Day" className='options'>Traditional Day</option>
                    <option value="Final Fest" className='options'>Final Fest</option>
                    <option value="Men's Cricket" className='options'>Men's Cricket</option>
                    <option value="Men's Kabaddi" className='options'>Men's Kabaddi</option>
                    <option value="Men's Volley Ball" className='options'>Men's Volley Ball</option>
                    <option value="Men's Kho Kho" className='options'>Men's Kho Kho</option>
                    <option value="Carroms" className='options'>Carroms</option>
                    <option value=" Pubg" className='options'>Pubg</option>
                    <option value="Free Fire" className='options'>Free Fire</option>
                    <option value="Women Throw Ball" className='options'>Women Throw Ball</option>
                </select>

            </div>
            <div className='coordinators'>
                <input type='text' placeholder='Event Date (DD-MM-YYYY)' className='coordinatorDetails'></input>
                <input type='text' placeholder='Event Start Time ex 9am' className='coordinatorDetails'></input>
                <input type='text' placeholder='Event End Time ex 5pm' className='coordinatorDetails'></input>
                <input type='text' placeholder='Section' className='coordinatorDetails'></input>
            </div>
            <p className='setEvent'>Set As A Event</p>
            <p className='hoddetails'>Only access to ,<br></br>
                Head Of the Department, CSE HOD<br></br>
                Mr Raja Sheaker</p>
        </div>
    )
}
