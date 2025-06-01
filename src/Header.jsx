import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
export function Header() {
  return (
    <div className='header'>
     <h1 className='main-header'>MRCL</h1>
         <nav className="nav-elements">
            <Link to="/Home" className="header-links">Home</Link>
            <Link to="/Events" className="header-links">Events</Link>
            <Link to="/Register" className="header-links">Register</Link>
            <Link to="/MyProfile" className="header-profile"><img src="https://img.icons8.com/?size=100&id=85050&format=png&color=FFFFFF" alt="Profile" height="20px" width="20px"></img></Link>
           
       </nav>
    
</div>
      
        
  
  )
}

export function Home(){
    return(
        <div className='main-logo'>
        <div className='logo'>
            <img className='clg-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEDpIRZmPo_oXlyZ8rli704u-K11-mQQ_8g&s' alt='Miracle College Logo' height="500px" width="500px"></img>
        </div>
        </div>
        
    )
}

export function Events(){
    return(
       
         <div className="events-body">
            <p className="event-header">List of Events in Miracle Fest</p>
           {/* <div className='main-events-header'>
            <p className="cultural-header">Cultural Events</p>
            </div> */}
            <p className='main-events-header'>Cultural Events</p>
            <div className="events">

                <div className="cricket">
                    <p className="sports-header">Banner Launch</p>
                    <hr></hr>
                   <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                   
                    <Link to="/BannerLaunch" className='more'>more</Link>
                     {/* <Link to="/BannerLaunch" className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                     {/* <Routes>
                        <Route path="/Cricket" element={<Cricket></Cricket>}></Route>
                     </Routes> */}
                    
                    
                </div>

                <div className="cricket">
                    
                    <p className="sports-header">Traditional day</p>
                    <hr></hr>

                   <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>

                    <Link to="/Traditional" className='more'>more</Link>
                   
                    {/* <Link to="/Traditional"className="more">
                
                     <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                     {/* <Routes>
                        <Route path="/Cricket" element={<Cricket></Cricket>}></Route>
                     </Routes> */}
                    
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Final Fest</p>
                    <hr></hr>
                   <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                   
                    <Link to="/FinalFest" className='more'>more</Link>
                     {/* <Link to="/FinalFest"className="more">
                     <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                     {/* <Routes>
                        <Route path="/Cricket" element={<Cricket></Cricket>}></Route>
                     </Routes> */}
                    
                    
                </div>
                </div>
                <p className='main-events-header'>Technical Events</p>
                <div className='events'>
                {/* <p className="technical-header">Technical Events</p> */}
                <div className="cricket">
                    <p className="sports-header">Pro Coder</p>
                    <hr></hr>
                   <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                   <Link to="/ProCoder" className='more'>more</Link>
                    
                     {/* <Link to="/ProCoder"className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                     {/* <Routes>
                        <Route path="/Cricket" element={<Cricket></Cricket>}></Route>
                     </Routes>
                     */}
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Guess the Output</p>
                    <hr></hr>
                   <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                   
                    <Link to="/GuessTheOutput" className='more'>more</Link>
                     {/* <Link to="/GuessTheOutput"className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                     {/* <Routes>
                        <Route path="/Cricket" element={<Cricket></Cricket>}></Route>
                     </Routes> */}
                    
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Quiz</p>
                    <hr></hr>
                   <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                   
                    <Link to="/Quiz" className='more'>more</Link>
                     {/* <Link to="/Quiz"className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                     {/* <Routes>
                        <Route path="/Cricket" element={<Cricket></Cricket>}></Route>
                     </Routes>
                     */}
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Essay Writing</p>
                    <hr></hr>
                   <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                   
                    <Link to="/EssayWriting" className='more'>more</Link>
                     {/* <Link to="/EssayWriting"className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                     {/* <Routes>
                        <Route path="/Cricket" element={<Cricket></Cricket>}></Route>
                     </Routes>
                     */}
                    
                </div>
                </div>
                <p className='main-events-header'>Sports Events</p>
                <div className='events'>
                 {/* <p className="games-header">Sports Events</p> */}
                <div className="cricket">
                    <p className="sports-header">Men's Cricket</p>
                    <hr></hr>
                   <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                   
                    <Link to="/Cricket1" className='more'>more</Link>
                     {/* <Link to="/Cricket1"className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                     {/* <Routes>
                        <Route path="/Cricket" element={<Cricket></Cricket>}></Route>
                     </Routes> */}
                    
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Men's Kabaddi</p>
                    <hr></hr>
                   <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                    
                    <Link to="/MenKabaddi" className='more'>more</Link>
                     {/* <Link to="/MenKabaddi" className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                   
                </div>
                <div className="cricket">
                    <p className="sports-header">Men's Kho-Kho</p>
                    <hr></hr>
                  <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                    
                    <Link to="/MenKhoKho" className='more'>more</Link>
                     {/* <Link to="/MenKhokho" className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                   
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Men's Volley Ball</p>
                    <hr></hr>
                  <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                    
                    <Link to="/MenVolleyball" className='more'>more</Link>
                     {/* <Link to="/MenVolleyball" className="more">
                      <button type='link' className='button-link'>Register</button>
                     </Link> */}
                   
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Carrom Board</p>
                    <hr></hr>
                  <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                    
                    <Link to="/CarromBoard" className='more'>more</Link>
                     {/* <Link to="/CarromBoard" className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                    
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Free Fire</p>
                    <hr></hr>
                  <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                    
                    <Link to="/FreeFire" className='more'>more</Link>
                     {/* <Link to="/FreeFire"className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                   
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Pubg</p>
                    <hr></hr>
                  <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                    
                    <Link to="/Pubg" className='more'>more</Link>
                     {/* <Link to="/Pubg" className="more">
                      <button type='link' className='button-link'>Register</button>
                     </Link> */}
                   
                    
                </div>
                <div className="cricket">
                    <p className="sports-header">Women's Throwball</p>
                    <hr></hr>
                  <div className="content">
                    
                    <p className="event-content">Event date :</p>
                    <p className="event-content">Event start time :</p>
                    <p className="event-content">Event Venue :</p>
                    </div>
                    <hr></hr>
                    
                    <Link to="/WomenThrowBall" className='more'>more</Link>
                     {/* <Link to="/WomenThrowBall" className="more">
                     <button type='link' className='button-link'>Register</button> 
                     </Link> */}
                   
                    
                </div>
                
            </div>
            
        </div>
        
    )
}

export function BannerLaunch(){
    return(
        <div className='bannerlaunch'>
            <p className='bannerlaunch-header'>MILAN TECH FEST</p>
            <img className="bannerlaunch-logo" src="https://miracle.edu.in/wp-content/uploads/Mes-Milan-National-level-fest.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='bannerlaunch-theme'>Unleash the Unseen. Ignite the Unforgettable.</p>
             <p className='bannerlaunch-content'>Step into a world where creativity meets innovation. Our fest is a celebration of talent, ideas, and enthusiasm — a platform to express, explore, and excel. Whether you're a performer, a techie, or an artist at heart, this is your moment to shine. Let’s spark connections, ignite passions, and create unforgettable memories together! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt placeat minima dignissimos ipsum beatae tempore fuga accusantium commodi libero, ut labore nemo eius quisquam tempora sed nesciunt fugiat dolore quo!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam quisquam aliquid, qui excepturi magnam vel in maiores nobis totam perferendis fugit optio harum? Assumenda, mollitia. Ex, unde molestias? Cum.
            </p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>

             <div>
            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div>
           
         {/* <Link to="/BannerLaunch" className="more">
                      <button type='link' className='button-link'>Register</button> 
                     </Link> */}


           {/* <Link to="/EventCoordinator"><button type='link' className='button-link'>Register</button></Link> */}
            {/* <hr></hr> */}
            

            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div>
             */}
        </div>
    )
}

export function EventCoordinator(){
    return(
        <div className='eventcoordinator'>
             <h3 className='event-details1'>Event Details</h3>
             <p className='sub-details1'>Event Name :</p>
            <p className='sub-details1'>Event Date:</p>
            <p className='sub-details1'>Event Start Time :</p>
            <p className='sub-details1'>Event Venue: </p>
            <p className='sub-details1'>Event End Time :</p>

            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div>
    )
}
export function Traditional(){
    return(
        <div className='traditional'>
            <p className='traditional-header'>Celebrate Culture, Embrace Roots!</p>
            <img className="traditional-logo" src="https://thumbs.dreamstime.com/b/group-ethnic-college-students-diverse-dressed-traditional-attire-60381124.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='traditional-theme'>Unleash the Unseen. Ignite the Unforgettable.</p>
            
            <p className='traditional-content'>Get ready to flaunt your ethnic best! Traditional Day is here — a vibrant splash of colors, culture, and timeless elegance. Come dressed in your traditional attire, represent your heritage with pride, and be a part of the most colorful celebration of our fest!</p>
             <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
           
           <div>
            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div>
           
            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> */}
            
        </div>
    )
}



export function FinalFest(){
    return(
        <div className='finalFest'>
            <p className='final-header'>Celebrate Culture, Embrace Roots!</p>
            <img className="final-logo" src="https://preview.redd.it/grand-fest-photos-v0-emm62qvtr6pd1.jpg?width=1080&crop=smart&auto=webp&s=c9e60cb7c696b23a936c49ac3e84235ba35a5840" alt="Fest image" ></img>
            <p className='final-theme'>Ignite the Spark Where Passion Meets Purpose</p>
            {/* <p className='date'>Date:</p>
            <p className='venue'>Venue: </p> */}
            {/* <p className='traditional-content'>Step into a world where creativity meets innovation. Our fest is a celebration of talent, ideas, and enthusiasm — a platform to express, explore, and excel. Whether you're a performer, a techie, or an artist at heart, this is your moment to shine. Let’s spark connections, ignite passions, and create unforgettable memories together!</p> */}
            {/* <hr></hr> */}
            <p className='final-content'>Get ready to flaunt your ethnic best! Traditional Day is here — a vibrant splash of colors, culture, and timeless elegance. Come dressed in your traditional attire, represent your heritage with pride, and be a part of the most colorful celebration of our fest! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ipsam ea quasi cumque? Nostrum, vitae nesciunt deleniti dignissimos maxime, at magnam dolorem animi aperiam ipsa nulla, quam consequuntur illum delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit praesentium numquam sunt ipsam repellendus voluptate nostrum, iste nemo rerum veniam, consequuntur fugiat facere sapiente sint non accusantium libero reiciendis?</p>
             <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
           
            <div>
            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div>
            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> */}
            
        </div>
    )
}


export function ProCoder(){
    return(
        <div className='proCoder'>
            <p className='coder-header'>ProCoder 2025  </p>
            <img className="coder-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHMK0GpTCLI3HsquC4NyhPnd-eUW06I5b7Q&s" alt="Fest image" height="200px" width="200px"></img>
            <p className='coder-theme'>Code. Compete. Conquer.</p>
            {/* <p className='date'>Date:</p>
            <p className='venue'>Venue: </p> */}
            {/* <p className='traditional-content'>Step into a world where creativity meets innovation. Our fest is a celebration of talent, ideas, and enthusiasm — a platform to express, explore, and excel. Whether you're a performer, a techie, or an artist at heart, this is your moment to shine. Let’s spark connections, ignite passions, and create unforgettable memories together!</p> */}
            {/* <hr></hr> */}
            {/* <p className='coder-content'>Get ready to flaunt your ethnic best! Traditional Day is here — a vibrant splash of colors, culture, and timeless elegance. Come dressed in your traditional attire, represent your heritage with pride, and be a part of the most colorful celebration of our fest!</p> */}
            <p className='coder-content'>          ProCoder 2025 is the ultimate battleground for the brightest minds in programming. A celebration of logic, speed, and innovation — this event challenges participants to push the limits of their coding skills and solve real-world problems under pressure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam recusandae corporis veritatis est dolore neque eveniet, commodi itaque voluptatibus nisi. Amet delectus eos perferendis explicabo ratione dolorem numquam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi placeat, tenetur, incidunt consequuntur odit beatae reiciendis enim optio illum ut animi nisi, est voluptatibus error esse tempore possimus assumenda!</p>
           
                 <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>

             <Link to="/ProCoderEvent" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>
            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> */}
            
        </div>
    )
}

export function ProCoderEvent(){
    return(
        <div className='procoderEvent'>
            <div className='procoderevent-register'>
                <p className='register-details'>Registration for Procoder</p>
                <p className='register-details'>Name :</p>
                <p className='register-details'>Branch :</p>
                <p className='register-details'>Year :</p>
                <p className='register-details'>Department :</p>
                <p className='register-details'>Section :</p>
                <p className='register-details'>Gender :</p>
                
            </div>
            <div className='n'>
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
            )
}

export function GuessTheOutput(){
    return(
        <div className='guessTheOutput'>
            <p className='guess-output-header'>Guess the Output 2025</p>
            <img className="guess-output-logo" src="https://www.shutterstock.com/image-photo/hand-drawing-ipo-input-process-260nw-2186724959.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='guess-output-theme'>Decode. Predict. Dominate.</p>
            {/* <p className='date'>Date:</p>
            <p className='venue'>Venue: </p> */}
            {/* <p className='traditional-content'>Step into a world where creativity meets innovation. Our fest is a celebration of talent, ideas, and enthusiasm — a platform to express, explore, and excel. Whether you're a performer, a techie, or an artist at heart, this is your moment to shine. Let’s spark connections, ignite passions, and create unforgettable memories together!</p> */}
            {/* <hr></hr> */}
            {/* <p className='guess-output-content'>Get ready to flaunt your ethnic best! Traditional Day is here — a vibrant splash of colors, culture, and timeless elegance. Come dressed in your traditional attire, represent your heritage with pride, and be a part of the most colorful celebration of our fest!</p> */}
           <p className='guess-output-content'>Welcome to Guess the Output 2025, where logic meets intuition! This thrilling coding challenge is designed to test how well you understand what really happens under the hood of a program. Participants will face tricky snippets, mind-bending logic, and edge cases that go beyond syntax. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quisquam nulla voluptate harum aliquid dicta deserunt voluptatem mollitia atque similique illo accusantium eveniet, ut consectetur animi fugit adipisci possimus minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fugit deleniti at molestiae assumenda similique, laborum eum voluptatem rem alias a quo quod qui, debitis delectus atque adipisci dolorum? Deleniti.</p>
           <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>

          <Link to="/GuessTheOutputEvent" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>
           {/* <div>
            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div> */}
            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> */}
            
        </div>
    )
}
export function GuessTheOutputEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}

export function Quiz(){
    return(
        <div className='quiz'>
            <p className='quiz-header'>Brain Brawl 2025</p>
            <img className="quiz-logo" src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-811.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='quiz-theme'>Think Fast. Answer Smart. Win Big.</p>
            {/* <p className='date'>Date:</p>
            <p className='venue'>Venue: </p> */}
            {/* <p className='traditional-content'>Step into a world where creativity meets innovation. Our fest is a celebration of talent, ideas, and enthusiasm — a platform to express, explore, and excel. Whether you're a performer, a techie, or an artist at heart, this is your moment to shine. Let’s spark connections, ignite passions, and create unforgettable memories together!</p> */}
            {/* <hr></hr> */}
            {/* <p className='quiz-content'>Get ready to flaunt your ethnic best! Traditional Day is here — a vibrant splash of colors, culture, and timeless elegance. Come dressed in your traditional attire, represent your heritage with pride, and be a part of the most colorful celebration of our fest!</p> */}
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
            {/* <div>
            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div> */}
            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> */}
            
        </div>
    )
}

export function QuizEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}

export function EssayWriting(){
    return(
        <div className='essayWriting'>
            <p className='essay-header'>Inkspire 2025</p>
            <img className="essay-logo" src="https://www.shutterstock.com/image-photo/essays-english-language-part-exam-260nw-1320732236.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='essay-theme'>Write to Express. Write to Inspire.</p>
            {/* <p className='date'>Date:</p>
            <p className='venue'>Venue: </p> */}
            {/* <p className='traditional-content'>Step into a world where creativity meets innovation. Our fest is a celebration of talent, ideas, and enthusiasm — a platform to express, explore, and excel. Whether you're a performer, a techie, or an artist at heart, this is your moment to shine. Let’s spark connections, ignite passions, and create unforgettable memories together!</p> */}
            {/* <hr></hr> */}
            {/* <p className='essay-content'>Get ready to flaunt your ethnic best! Traditional Day is here — a vibrant splash of colors, culture, and timeless elegance. Come dressed in your traditional attire, represent your heritage with pride, and be a part of the most colorful celebration of our fest!</p> */}
            <p className='essay-content'>Inkspire 2025 invites all wordsmiths and thinkers to pour their thoughts onto paper and shape ideas that matter. This essay writing competition is your stage to reflect, reason, and express on themes that challenge the mind and stir the soul. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci maxime deleniti omnis velit itaque explicabo unde nulla saepe voluptatibus. Inventore ea ex quisquam esse numquam officiis neque veniam repellendus. Iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus possimus voluptatibus reprehenderit, praesentium molestias veniam libero non consequuntur doloribus magnam repellendus eum sit provident nesciunt blanditiis sunt tempora eveniet.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
        <Link to="/EssayWritingEvent" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>
           
           {/* <div>
            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div> */}
            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> */}
            
        </div>
    )
}
export function EssayWritingEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}

export function Cricket1(){
    return(
        <div className='cricket1'>
            <p className='cricket1-header'>Battle Beyond Boundaries </p>
            <img className="cricket1-logo" src="https://www.shutterstock.com/image-photo/mumbai-india-october-2-2021-600nw-2085546409.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='cricket1-theme'>Cricket Carnival 2025</p>
            {/* <p className='date'>Date:</p>
            <p className='venue'>Venue: </p> */}
            {/* <p className='traditional-content'>Step into a world where creativity meets innovation. Our fest is a celebration of talent, ideas, and enthusiasm — a platform to express, explore, and excel. Whether you're a performer, a techie, or an artist at heart, this is your moment to shine. Let’s spark connections, ignite passions, and create unforgettable memories together!</p> */}
            {/* <hr></hr> */}
            {/* <p className='essay-content'>Get ready to flaunt your ethnic best! Traditional Day is here — a vibrant splash of colors, culture, and timeless elegance. Come dressed in your traditional attire, represent your heritage with pride, and be a part of the most colorful celebration of our fest!</p> */}
            <p className='cricket1-content'>The purpose of Cricket Carnival 2025 is to celebrate the spirit of sportsmanship, teamwork, and competitive zeal through the game that unites millions – Cricket. This event aims to bring together passionate players and fans, offering a platform where talent meets opportunity and every boundary hit echoes with cheer.
Whether you're bowling with fire or batting with flair, this is your stage to shine, compete, and honor the gentleman’s game in its truest form. 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores, ut dicta rerum aliquam deserunt laudantium veritatis et sint provident necessitatibus repellat consequatur inventore officiis aut. Beatae quos sapiente libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem maiores nihil exercitationem quasi et at temporibus est sint, explicabo autem, incidunt amet ipsam neque aliquam quae ad excepturi qui quo.</p>
             <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/Cricket1Event" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>
            
            {/* <div>
            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div> */}
            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> */}
            
        </div>
    )
}

export function Cricket1Event(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}

export function MenKabaddi(){
    return(
        <div className='menKabaddi'>
            <p className='men-kabaddi-header'>Mat Warriors 2025  Kabaddi Clash </p>
            <img className="men-kabaddi-logo" src="https://www.prokabaddi.com/static-assets/waf-images/84/9b/95/16-9/dgYZwDiTti.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='men-kabaddi-theme'>Raid. Resist. Rise.</p>
            {/* <p className='date'>Date:</p>
            <p className='venue'>Venue: </p> */}
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

            {/* <div>
            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div> */}
            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> */}
            
        </div>
    )
}

export function MenKabaddiEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}
export function MenKhokho(){
    return(
        <div className='menkhokho'>
            <p className='men-khokho-header'>Chase the Glory  Kho Kho 2025 </p>
            <img className="men-khokho-logo" src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-96978,resizemode-75,msid-93825988/news/sports/passion-dreams-hardships-unite-kho-kho-league-players.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='men-khokho-theme'>Run with Purpose. Tag with Pride.</p>
            {/* <p className='date'>Date:</p>
            <p className='venue'>Venue: </p> */}
            {/* <p className='traditional-content'>Step into a world where creativity meets innovation. Our fest is a celebration of talent, ideas, and enthusiasm — a platform to express, explore, and excel. Whether you're a performer, a techie, or an artist at heart, this is your moment to shine. Let’s spark connections, ignite passions, and create unforgettable memories together!</p> */}
            {/* <hr></hr> */}
            {/* <p className='essay-content'>Get ready to flaunt your ethnic best! Traditional Day is here — a vibrant splash of colors, culture, and timeless elegance. Come dressed in your traditional attire, represent your heritage with pride, and be a part of the most colorful celebration of our fest!</p> */}
      
            <p className='men-khokho-content'>Get ready for the pulse-pounding excitement of Kho Kho 2025, a game where agility, alertness, and teamwork steal the spotlight! This classic Indian sport brings out the best in strategy, speed, and coordination as players dash, dive, and dodge with electrifying intensity.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quasi nobis, repellat vero corporis laborum modi, fuga ex quidem ducimus nemo et sint rem? Accusamus quam eaque tenetur beatae eos.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias vitae in iste iure quas voluptas. Nam, fugit nihil nobis animi ratione officiis, repellat eligendi incidunt quis explicabo dicta veritatis molestias?
            </p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/MenKhoKhoEvent" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>
           
           {/* <div>
            <h3 className='event-coordinator'>Event Coordinator Details</h3> 
            <p className='event-coordinator-details'>Name : </p>
            <p className='event-coordinator-details'>Email : </p>
            <p className='event-coordinator-details'>Phone Number :</p>
            </div> */}
            {/* <div className="social-media1">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> */}
            
        </div>
    )
}

export function MenKhoKhoEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}

export function MenVolleyball(){
    return(
        <div className='menvolleyball'>
            <p className='men-volleyball-header'>Sky Serve 2025 – Volleyball Showdown </p>
            <img className="men-volleyball-logo" src="https://t4.ftcdn.net/jpg/01/23/19/87/360_F_123198705_HHB36SHxNnTspMYX7mXqg9rAGwS5tNB0.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='men-volleyball-theme'>Elevate the Game. Dominate the Court.</p>
          
            <p className='men-volleyball-content'>Get ready to rise above the net at Sky Serve 2025, the ultimate volleyball clash where precision meets passion. Watch teams soar, spike, and smash their way to victory with flawless coordination and fierce energy.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde sunt omnis repellat suscipit temporibus laudantium, deleniti, commodi, cumque beatae accusantium saepe a repellendus quidem sequi quaerat tempora aut quas?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia earum, quae magni hic tenetur maxime, illum harum ipsam pariatur dignissimos quod delectus quasi mollitia aliquam qui sit unde at dolorem.
            </p>
           <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/MenVolleyballEvent" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>
          
          
            
        </div>
    )
}

export function MenVolleyballEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}

export function CarromBoard(){
    return(
        <div className='carromboard'>
            <p className='carrom-header'>Battle Beyond Boundaries </p>
            <img className="carrom-logo" src="https://www.shutterstock.com/image-photo/mumbai-india-october-2-2021-600nw-2085546409.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='carrom-theme'>Cricket Carnival 2025</p>
            
            <p className='carrom-content'>The purpose of Cricket Carnival 2025 is to celebrate the spirit of sportsmanship, teamwork, and competitive zeal through the game that unites millions – Cricket. This event aims to bring together passionate players and fans, offering a platform where talent meets opportunity and every boundary hit echoes with cheer.
Whether you're bowling with fire or batting with flair, this is your stage to shine, compete, and honor the gentleman’s game in its truest form.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, nulla consequatur hic, vel soluta impedit omnis ex quos esse rem aperiam non odit assumenda, accusantium maiores distinctio error sed illum?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ut quod facilis. At asperiores, quidem eveniet modi id odio consequatur, iste aut, dolorem amet provident animi dolor repudiandae quos repellat.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/CarromBoardEvent" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>
          
            
        </div>
    )
}
export function CarromEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}

export function FreeFire(){
    return(
        <div className='freefire'>
            <p className='free-fire-header'>Battle Beyond Boundaries </p>
            <img className="free-fire-logo" src="https://www.shutterstock.com/image-photo/mumbai-india-october-2-2021-600nw-2085546409.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='free-fire-theme'>Cricket Carnival 2025</p>
          
           
            <p className='free-fire-content'>The purpose of Cricket Carnival 2025 is to celebrate the spirit of sportsmanship, teamwork, and competitive zeal through the game that unites millions – Cricket. This event aims to bring together passionate players and fans, offering a platform where talent meets opportunity and every boundary hit echoes with cheer.
Whether you're bowling with fire or batting with flair, this is your stage to shine, compete, and honor the gentleman’s game in its truest form.
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cumque esse consequatur quis itaque cupiditate libero enim vitae laboriosam, laudantium, totam placeat a nisi tenetur sequi autem sint commodi amet!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ex est tenetur similique quaerat nisi iusto ipsam ipsum libero, alias aliquid dicta incidunt cumque magnam culpa accusantium neque nulla et.</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/FreeFireEvent" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>
           
        </div>
    )
}
export function FreeFireEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}

export function Pubg(){
    return(
        <div className='pubg'>
            <p className='pubg-header'>Battle Beyond Boundaries </p>
            <img className="pubg-logo" src="https://www.shutterstock.com/image-photo/mumbai-india-october-2-2021-600nw-2085546409.jpg" alt="Fest image" height="200px" width="200px"></img>
            <p className='pubg-theme'>Cricket Carnival 2025</p>
            
            <p className='pubg-content'>The purpose of Cricket Carnival 2025 is to celebrate the spirit of sportsmanship, teamwork, and competitive zeal through the game that unites millions – Cricket. This event aims to bring together passionate players and fans, offering a platform where talent meets opportunity and every boundary hit echoes with cheer.
Whether you're bowling with fire or batting with flair, this is your stage to shine, compete, and honor the gentleman’s game in its truest form.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic dolore obcaecati excepturi deserunt nemo illo nam voluptas voluptate adipisci minima delectus, in eligendi veritatis a ad aut eum voluptatum.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla praesentium voluptate saepe, distinctio error aperiam expedita suscipit quod consequuntur accusantium accusamus inventore ab placeat, nesciunt deleniti tenetur doloremque quidem?</p>
            <h3 className='event-details'>Event Details</h3>
            <p className='sub-details'>Event Date:</p>
            <p className='sub-details'>Event Start Time :</p>
            <p className='sub-details'>Event Venue: </p>
            <p className='sub-details'>Event End Time</p>
            <Link to="/PubgEvent" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>

        </div>
    )
}

export function PubgEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}
export function WomensThrowball(){
    return(
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
            <Link to="/WomensThrowballEvent" className="more1">
                      <button type='link' className='button-link'>Register</button> 
                     </Link>
           
            
        </div>
    )
}

export function WomensThrowballEvent(){
    return(
        <div className='procoderEvent'>
        <div>
            <h3 className='procoder-event-details'>Event Details</h3>
            <p className='procoder-sub-details'>Event Date:</p>
            <p className='procoder-sub-details'>Event Start Time :</p>
            <p className='procoder-sub-details'>Event Venue: </p>
            <p className='procoder-sub-details'>Event End Time</p>
            </div>
            <div >
            <h3 className='procoder-event-coordinator'>Event Coordinator Details</h3> 
            <p className='procoder-event-coordinator-details'>Name : </p>
            <p className='procoder-event-coordinator-details'>Email : </p>
            <p className='procoder-event-coordinator-details'>Phone Number :</p>
            </div>
            </div>
    )
}

export function Cricket(){
    return(
        <div>Hema</div>
    )
}
 
export function Register(){
    return(
         <div className="main-register">
            <div className="registe">
                <p className='register'>Register</p>
                <div className="register-elements">
                    <input type="text" placeholder="UserName" name="username" id="username" className="username">
                    </input>
                    <input type="password" placeholder="Password" name="password" id="password" className="password">
                    </input>
                    <input type="password" placeholder="Confirm password" name="confirm password" id="confirm password" className="confirm-password">
                    </input>
                    <input type="email" placeholder="E-mail address" name="email" id="email" className="email">
                    </input>
                    <div className="verification">
                    <input type="checkbox" ></input>
                    <label>Verify you are human</label>
                    </div>
                    <button type="submit" className="sign-up">Sign Up</button>
                </div>
                <div className="signin">
                <p className="sign-in">Have an account
                    
                    <Link to="/SignIn" className="sign-in-link">Sign in</Link>
                   

                  

                </p>
                <p className="other">or you can sign in with,</p>
                 {/* <Routes>
                        <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
                    </Routes> */}
                    
                </div>
                 <div className="social-media">
                   <Link tclassName='facebook' ><img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img></Link>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div> 

            </div>
            </div>
    )
}
 export function SignIn(){
    return(

         <div className="main-register">
            <div className="registe">
                <p className='sign'>Sign In</p>
                <div className="register-elements">
                    <input type="text" placeholder="UserName" name="username" id="username" className="username">
                    </input>
                    <input type="password" placeholder="Password" name="password" id="password" className="password">
                    </input>

                    <Link to="/ForgotPassword" className="forgot-link">Forgot Password?</Link>
                   
                   
                    <button type="submit" className="sign-up">Sign In</button>
                </div>
                <div className="signin">
                <p className="signup">
                    
                   

                </p>
                <p className="other">or you can sign in with,</p>
                 {/* <Routes>
                        <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
                    </Routes> */}
                    
                </div>
                <div className="social-media">
                    <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
                    <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
                </div>

            </div>
            </div>
        // <div className="main-sign">
        //             {/* <input type="text" placeholder="UserName" name="username" id="username" className="user-name1">
        //             </input>
        //             <input type="password" placeholder="Password" name="password" id="password" className="password1">
        //             </input>
        // {/* //  <div className="main-sign">
        // //     <input type="email" className="sign-in-fields" placeholder="Username or E-mail">
        // //     </input>
        // //     <input type="password" className="sign-in-fields" placeholder="Password">
        // //     </input>
        //      */}
        //     <button type="submit" className="signin-button">Sign In</button>
            
        //     <div className="forgot">
        //          <Link to="/ForgotPassword" className="forgot-link">Forgot Password</Link>
        //     <Link  to="/Register" className="forgot-link">Sign Up</Link>
        //     </div>
        //     {/* <Routes>
        //         <Route paht="/ForgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
        //         <Route path="/Register" element={<Register></Register>}></Route>
        //     </Routes> */} 

        //     <p className="other">or you can sign in with,</p>
        //     <div className="social-media">
        //             <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="Facebook logo" className="facebook-link" ></img>
        //             <img src="https://images.icon-icons.com/2428/PNG/512/google_black_logo_icon_147125.png" alt="Google logo" className="google-link"></img>
        //         </div>
        // </div>
    )
 }

export function ForgotPassword(){
    return(
        <div></div>
    )
}

  export function MyProfile(){
    return(
        <div className="profile">
            <div className="inner-profile">
                <div className="inner-profile-details">
                    <img src="https://static.thenounproject.com/png/3918329-200.png" alt="Profile"  className="profile-image"></img>
                </div>
                    <hr></hr>
                    <div className="main-profile-details">
                        <p className='profile1-details'>Name :</p>
                        <p className='profile1-details'>Year :</p>
                        <p className='profile1-details'>Branch :</p>
                        <p className='profile1-details'>Section :</p>
                        <p className='profile1-details'>Mobile :</p>
                        <p className='profile1-details'>Linked In :</p>
                        <p className='profile1-details'>Insta I`D :</p>
                        <p className='profile1-details'>Father :</p>
                        <p className='profile1-details'>Mother :</p>
                        <p className='profile1-details'>Village :</p>
                        <p className='profile1-details'>District</p>
                        <p className='profile1-details'>State :</p>
        {/* <p className="profile-details">Name:</p> 
            <p className="profile-details">Year:</p>
             <p className="profile-details">Branch:</p>
             <p className="profile-details">Section:</p>
             <p className="profile-details">Mobile no:</p>
             <p className="profile-details">Linked IN:</p>
             <p className="profile-details">Insta I`D:</p>
             <p className="profile-details">Father:</p>
             <p className="profile-details">Mother:</p>
             <p className="profile-details">Village:</p>
             <p className="profile-details">District:</p>
             <p className="profile-details">State:</p>  */}
                </div>
                </div>
            </div>
    )
  }