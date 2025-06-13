import { Link } from "react-router-dom"
export default function Events() {
    return (

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
                        <p className='event-content'>Event End Time :</p>
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

                    <Link to="/MensCricket" className='more'>more</Link>
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

                    <Link to="/WomensThrowball" className='more'>more</Link>
                    {/* <Link to="/WomenThrowBall" className="more">
                     <button type='link' className='button-link'>Register</button> 
                     </Link> */}


                </div>

            </div>

        </div>

    )
}
