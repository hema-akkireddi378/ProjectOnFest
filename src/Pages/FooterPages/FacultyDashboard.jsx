export default function FacultyDashboard() {
    return (
        <div className="facultyDashboard">
            <div className="assignStudents">
            <div className='assignTheCoordinators'>
                <p className='assignCoordinatorHeader'><span>Assign  Event Coordinator</span></p>
                <div className="coordinator">
                <select >
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

                
                <input type='text' placeholder='Name' className='coordinatorDetails'></input>
                <input type='text' placeholder='Branch' className='coordinatorDetails'></input>
                <input type='text' placeholder='Year' className='coordinatorDetails'></input>
                <input type='text' placeholder='Department' className='coordinatorDetails'></input>
                <input type='text' placeholder='Section' className='coordinatorDetails'></input>
                </div>
            <p className='setCoordinator'><span>Set As A Coordinator</span></p>
        </div>

            <div className='assignTheCoordinators'>
                <p className='assignEventHeader'><span>Assign the Events</span></p>
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

           
                <input type='text' placeholder='Event Date (D-M-Y)' className='event-coordinatorDetails'></input>
                <input type='text' placeholder='Event Venue' className='event-coordinatorDetails'></input>
                <input type='text' placeholder='Event Start Time ex 9hr' className='event-coordinatorDetails'></input>
                <input type='text' placeholder='Event End Time ex 5hr' className='event-coordinatorDetails'></input>
                
            
            <p className='setEvent'>Set As A Event</p>
            </div>
            </div>
            <div className="hod">
            <p className='hoddetails'>Only access to ,<br></br>
                Head Of the Department, CSE HOD<br></br>
                Mr Raja Sheaker</p>
                </div>
        </div>
    )
}
