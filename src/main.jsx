import { StrictMode } from 'react'
import {Routes, Route,BrowserRouter} from "react-router-dom"
//import { Home, Events, Register, SignIn, MyProfile, Cricket,ForgotPassword,BannerLaunch, Traditional,FinalFest,Pubg,ProCoder, Cricket1, GuessTheOutput, Quiz, EssayWriting,MenKabaddi, CarromBoard, FreeFire, WomensThrowball, MenVolleyball, MenKhokho, EventCoordinator } from './Header';
import { Home,Events, Register, SignIn,MyProfile, Cricket,ForgotPassword,BannerLaunch,Traditional,FinalFest,Pubg,ProCoder,Cricket1,GuessTheOutput,Quiz, EssayWriting, MenKabaddi,CarromBoard,FreeFire,WomensThrowball,MenVolleyball,EventCoordinator,ProCoderEvent, GuessTheOutputEvent,MenKhokho ,QuizEvent,EssayWritingEvent,MenKabaddiEvent,MenKhoKhoEvent,MenVolleyballEvent,CarromEvent,FreeFireEvent,PubgEvent,WomensThrowballEvent} from './Header';
import { createRoot } from "react-dom/client";
import { Header } from './Header';
import './App.css';
//import Footer from './Footer';
             
import { Accessibility, Assignment, CulturalEvents, FacultyDashboard, Footer, StallsInfo, StudentDashboard, TechnicalEvents ,LiveEvent,PreviousFest, Support,FAQ,ContactUs,Emergency, ResultsAndWinners,FeedbackForm,TermsAndConditions,AboutUs,PastEvents,Certificate,Privacy, Sponser, Sports,About, LiveChat} from './Footer';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    
    <BrowserRouter>
     <Header/>
     <Routes>
     
            <Route path="/Home" element={<Home></Home>}></Route>
             <Route path="/Events" element={<Events></Events>}></Route>
             <Route path="/Register" element={<Register></Register>}></Route>
             <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
              <Route path="/ForgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
                {/* <Route path="/Register" element={<Register></Register>}></Route> */}
              <Route path='/Cricket' element={<Cricket></Cricket>}></Route>


              <Route path='/EventCoordinator' element={<EventCoordinator></EventCoordinator>}></Route>


             <Route path='/BannerLaunch' element={<BannerLaunch></BannerLaunch>}></Route>
            <Route path='/Traditional' element={<Traditional></Traditional>}></Route>
            <Route path='/FinalFest' element={<FinalFest></FinalFest>}></Route>

            <Route path='/ProCoder' element={<ProCoder></ProCoder>}></Route>
            <Route path='/Cricket1' element={<Cricket1></Cricket1>}></Route>
            <Route path='/GuessTheOutput' element={<GuessTheOutput></GuessTheOutput>}></Route>
            <Route path='/GuessTheOutputEvent' element={<GuessTheOutputEvent></GuessTheOutputEvent>}></Route>
            <Route path='/Quiz' element={<Quiz></Quiz>}></Route>
            <Route path='/EssayWriting' element={<EssayWriting></EssayWriting>}></Route>


             <Route path="/ProCoderEvent" element={<ProCoderEvent></ProCoderEvent>}></Route>
             <Route path="/GuessTheOutputEvent" element={<GuessTheOutputEvent></GuessTheOutputEvent>}></Route>
             <Route path="/QuizEvent" element={<QuizEvent></QuizEvent>}></Route>
             <Route path="/EssayWritingEvent" element={<EssayWritingEvent></EssayWritingEvent>}></Route>
             

            

            <Route path='/MenKabaddi' element={<MenKabaddi></MenKabaddi>}></Route>
          <Route path='/MenKhokho' element={<MenKhokho></MenKhokho>}></Route>
          <Route path='/MenVolleyball' element={<MenVolleyball></MenVolleyball>}></Route>
            <Route path='/CarromBoard' element={<CarromBoard></CarromBoard>}></Route>
            <Route path='/FreeFire' element={<FreeFire></FreeFire>}></Route>
            <Route path='/Pubg' element={<Pubg></Pubg>}></Route>
            <Route path='/WomenThrowBall' element={<WomensThrowball></WomensThrowball>}></Route>



            <Route path="/MenKabaddiEvent" element={<MenKabaddiEvent></MenKabaddiEvent>}></Route>
             <Route path="/MenVolleyballEvent" element={<MenVolleyballEvent></MenVolleyballEvent>}></Route>
             <Route path="/MenKhoKhoEvent" element={<MenKhoKhoEvent></MenKhoKhoEvent>}></Route>
             <Route path="/CarromEvent" element={<CarromEvent></CarromEvent>}></Route>
             <Route path="/FreeFireEvent" element={<FreeFireEvent></FreeFireEvent>}></Route>
             <Route path="/PubgEvent" element={<PubgEvent></PubgEvent>}></Route>
             <Route path="/WomensThrowballEvent" element={<WomensThrowballEvent></WomensThrowballEvent>}></Route>
          
             <Route path="/MyProfile" element={<MyProfile></MyProfile>}></Route>
             {/* <Route path="/Cricket" element={<Cricket></Cricket>}></Route> */}
             <Route path='/FacultyDashboard' element={<FacultyDashboard></FacultyDashboard>}></Route>
             <Route path='/StudentDashboard' element ={<StudentDashboard></StudentDashboard>}></Route>
             <Route path="/Assignment" element={<Assignment></Assignment>}></Route>
             <Route path= "/Accesibility" element={<Accessibility></Accessibility>}></Route>
             <Route path='/Certificate' element={<Certificate></Certificate>}></Route>
             <Route path = "/Sports" element={<Sports></Sports>}></Route>
             <Route path="/TechnicalEvents" element={<TechnicalEvents></TechnicalEvents>}></Route>
             <Route path='/CulturalEvents' element={<CulturalEvents></CulturalEvents>}></Route>
              <Route path='/StallsInfo' element={<StallsInfo></StallsInfo>}></Route>
              <Route path="/LiveEvent" element={<LiveEvent></LiveEvent>}></Route>
                <Route path="/PreviousFest" element={<PreviousFest></PreviousFest>}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Sponser' element={<Sponser></Sponser>}></Route>
              <Route path="/Support" element={<Support></Support>}></Route>
                <Route path ="/FAQ" element={<FAQ></FAQ>}></Route>
                {/* <Route path= "/Contact" element= {<Contact></Contact>}></Route> */}
                <Route path="/Emergency" element= {<Emergency></Emergency>}></Route>
                <Route path='/LiveChat' element={<LiveChat></LiveChat>}></Route>


                <Route path='/FeedbackForm' element={<FeedbackForm></FeedbackForm>}></Route>
                <Route path='/ResultsAndWinners' element={<ResultsAndWinners></ResultsAndWinners>}></Route>
                <Route path='/TermsAndConditions' element={<TermsAndConditions></TermsAndConditions>}></Route>
                {/* <Route path='/Privacy' element={<Privacy/>}></Route> */}
                <Route path='/Privacy' element={<Privacy></Privacy>}></Route>
                <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
                <Route path='PastEvents' element={<PastEvents></PastEvents>}></Route>
                <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
                
                {/* <Route path='/Footer1' element={<Footer1></Footer1>}></Route> */}
         </Routes>
          <Footer/>
         </BrowserRouter>
        
  </StrictMode>,
)
