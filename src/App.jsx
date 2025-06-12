
import { Routes,Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { MainHeader } from "./Components/Header";
import { Footer } from "./Components/Footer";
// import MainPage from "./Pages/HeaderPages/MainPage";

import Home from "./Pages/HeaderPages/Home";
import Events from "./Pages/HeaderPages/Events";
import Register  from "./Pages/HeaderPages/Register";
import SignIn from "./Pages/HeaderPages/SignIn";
import MyProfile from "./Pages/HeaderPages/MyProfile";


import LandingPageContent from "./Pages/HeaderPages/LandingPageContent";

import BannerLaunch from "./Pages/HeaderPages/BannerLaunchContent";
import Traditional from "./Pages/HeaderPages/Traditional";
import FinalFest from "./Pages/HeaderPages/FinalFest";

import ProCoder from "./Pages/HeaderPages/ProCoder";
import GuessTheOutPut from "./Pages/HeaderPages/GuessTheOutPut";
import Quiz from "./Pages/HeaderPages/Quiz";
import EssayWriting from "./Pages/HeaderPages/EssayWriting";


import MensKabaddi from "./Pages/HeaderPages/MenKabaddi";
import MenKhoKho from "./Pages/HeaderPages/MenKhoKho";
import MenVolleyball from "./Pages/HeaderPages/MenVolleyball";
import CarromBoard from "./Pages/HeaderPages/CarromBoard";
import FreeFire from "./Pages/HeaderPages/FreeFire";
import Pubg from "./Pages/HeaderPages/Pubg";
import WomensThrowBall from "./Pages/HeaderPages/WomensThrowball";




  
//import AboutUs from "./Pages/FooterPages/AboutUs";
//import AboutFest from "./Pages/FooterPages/AboutFest";
import FacultyDashboard from "./Pages/FooterPages/FacultyDashboard";
import StudentDashboard from "./Pages/FooterPages/StudentDashboard";
import Assignment from "./Pages/FooterPages/Assignment";
import Certificate from "./Pages/FooterPages/Certificate";
import Support from "./Pages/FooterPages/Support";

import Sports from "./Pages/FooterPages/Sports";
import TechnicalEvents from "./Pages/FooterPages/TechnicalEvents";
import CulturalEvents from "./Pages/FooterPages/CulturalEvents";

import StallsInfo from "./Pages/FooterPages/StallsInfo";
import LiveEvents from "./Pages/FooterPages/LiveEvent";
import PreviousFest from "./Pages/FooterPages/PreviousFest";
import Sponser from "./Pages/FooterPages/Sponser";
import AboutFest from "./Pages/FooterPages/AboutFest";

import FAQ from "./Pages/FooterPages/FAQ";
import Emergency from "./Pages/FooterPages/Emergency";
import LiveChat from "./Pages/FooterPages/LiveChat";

import FeedbackForm from "./Pages/FooterPages/FeedbackForm";
import ResultsAndWinners from "./Pages/FooterPages/ResultsAndWinners";
import TermsAndConditions from "./Pages/FooterPages/TermsAndConditions";
import Privacy from "./Pages/FooterPages/Privacy";
import AboutUs from "./Pages/FooterPages/AboutUs";
import ContactUs from "./Pages/FooterPages/ContactUs";
import ArchivePastEvents from "./Pages/FooterPages/ArchivePastEvents";
import MenKabaddi from "./Pages/HeaderPages/MenKabaddi";

function App(){
    return(

   
    <BrowserRouter>
     <MainHeader/>
     <Routes>

            {/* <Route path="/MainPage" element={<MainPage/>}></Route> */}
            <Route path="/" element={<LandingPageContent/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
             <Route path="/Events" element={<Events/>}></Route>
             <Route path="/Register" element={<Register/>}></Route>
             <Route path="/SignIn" element={<SignIn/>}></Route>
             <Route path="/MyProfile" element={<MyProfile/>}></Route>


            <Route path="/BannerLaunch" element={<BannerLaunch/>}></Route>
            <Route path="/Traditional" element ={<Traditional/>}></Route>
            <Route path='/FinalFest' element={<FinalFest/>}></Route>
            <Route path="/ProCoder" element={<ProCoder/>}></Route>
            <Route path="/GuessTheOutPut" element={<GuessTheOutPut/>}></Route>
            <Route path="/Quiz" element={<Quiz/>}></Route>
            <Route path="/EssayWriting" element={<EssayWriting/>}></Route>
            {/* <Route path="/Cricket1" element={<Criket1/>}></Route> */}
            <Route path="/MenKabaddi"element={<MenKabaddi/>}></Route>
            <Route path="/MenKhoKho" element={<MenKhoKho/>}></Route>
            <Route path="/MenVolleyball" element={<MenVolleyball/>}></Route>
            <Route path="/CarromBoard" element ={<CarromBoard/>}></Route>
            <Route path='/FreeFire' element={<FreeFire/>}></Route>
            <Route path="/Pubg" element={<Pubg/>}></Route>
            <Route path="/WomensThrowBall" element={<WomensThrowBall/>}></Route>


            



            <Route path='/FacultyDashboard' element={<FacultyDashboard/>}></Route>
            <Route path="/StudentDashboard" element={<StudentDashboard/>}></Route>
            <Route path="/Assignment" element={<Assignment/>}></Route>
            <Route path="/Support" element={<Support/>}></Route>
            <Route path="/Certificate" element={<Certificate/>}></Route>

            <Route path="/Sports" element={<Sports/>}></Route>
            <Route path="/TechnicalEvents"element={<TechnicalEvents/>}></Route>
            <Route path="/CulturalEvents" element={<CulturalEvents/>}></Route>


            <Route path="/StallsInfo" element={<StallsInfo/>}></Route>
            <Route path="/LiveEvent" element={<LiveEvents/>}></Route>
            <Route path="/PreviousFest" element={<PreviousFest/>}></Route>
            <Route path="/Sponser" element={<Sponser/>}></Route>
            <Route path="/AboutFest" element={<AboutFest/>}></Route>


            <Route path="/FAQ" element={<FAQ/>}></Route>
            <Route path="/Emergency" element={<Emergency/>}></Route>
            <Route path="/LiveChat" element={<LiveChat/>}></Route>

            <Route path="/FeedbackForm" element={<FeedbackForm/>}></Route>
            <Route path="/ResultsAndWinners" element={<ResultsAndWinners/>}></Route>
            <Route path="/TermsAndConditions" element={<TermsAndConditions/>}></Route>
            <Route path="/Privacy" element={<Privacy/>}></Route>
            <Route path="/AboutUs" element={<AboutUs/>}></Route>
            <Route path="/ContactUs" element={<ContactUs/>}></Route>
            <Route path="/ArchivePastEvents"element={<ArchivePastEvents/>}></Route>

  

              {/* <Route path="/ForgotPassword" element={<ForgotPassword></ForgotPassword>}></Route> */}
                {/* <Route path="/Register" element={<Register></Register>}></Route> */}
              {/* <Route path='/Cricket' element={<Cricket></Cricket>}></Route> */}

{/* 
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
              */}

            

            {/* <Route path='/MenKabaddi' element={<MenKabaddi></MenKabaddi>}></Route>
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
          
             <Route path="/MyProfile" element={<MyProfile></MyProfile>}></Route> */}
             {/* <Route path="/Cricket" element={<Cricket></Cricket>}></Route> */}
             {/* <Route path='/FacultyDashboard' element={<FacultyDashboard></FacultyDashboard>}></Route>
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
                <Route path='/AboutFest' element={<AboutFest/>}></Route>
                <Route path='/Sponser' element={<Sponser></Sponser>}></Route>
              <Route path="/Support" element={<Support></Support>}></Route>
                <Route path ="/FAQ" element={<FAQ></FAQ>}></Route> */}
                {/* <Route path= "/Contact" element= {<Contact></Contact>}></Route> */}
                {/* <Route path="/Emergency" element= {<Emergency></Emergency>}></Route>
                <Route path='/LiveChat' element={<LiveChat></LiveChat>}></Route>


                <Route path='/FeedbackForm' element={<FeedbackForm></FeedbackForm>}></Route>
                <Route path='/ResultsAndWinners' element={<ResultsAndWinners></ResultsAndWinners>}></Route>
                <Route path='/TermsAndConditions' element={<TermsAndConditions></TermsAndConditions>}></Route> */}
                {/* <Route path='/Privacy' element={<Privacy/>}></Route> */}
                {/* <Route path='/Privacy' element={<Privacy></Privacy>}></Route>
                <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
                <Route path='PastEvents' element={<PastEvents></PastEvents>}></Route>
                <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
                 */}
                {/* <Route path='/Footer1' element={<Footer1></Footer1>}></Route> */}
         </Routes>
          <Footer/>
         </BrowserRouter>
        )
}
   
  export default App











// import { StrictMode } from 'react'
// import {Routes, Route,BrowserRouter} from "react-router-dom"
// //import { Home, Events, Register, SignIn, MyProfile, Cricket,ForgotPassword,BannerLaunch, Traditional,FinalFest,Pubg,ProCoder, Cricket1, GuessTheOutput, Quiz, EssayWriting,MenKabaddi, CarromBoard, FreeFire, WomensThrowball, MenVolleyball, MenKhokho, EventCoordinator } from './Header';
// // import { Home,Events, Register, SignIn,MyProfile, Cricket,ForgotPassword,BannerLaunch,Traditional,FinalFest,Pubg,ProCoder,Cricket1,GuessTheOutput,Quiz, EssayWriting, MenKabaddi,CarromBoard,FreeFire,WomensThrowball,MenVolleyball,EventCoordinator,ProCoderEvent, GuessTheOutputEvent,MenKhokho ,QuizEvent,EssayWritingEvent,MenKabaddiEvent,MenKhoKhoEvent,MenVolleyballEvent,CarromEvent,FreeFireEvent,PubgEvent,WomensThrowballEvent} from './Header';
// import { createRoot } from "react-dom/client";
// // import { Header } from './Header';
// import './App.css';
// //import Footer from './Footer';
// import AboutFest from "./Pages/FooterPages/AboutFest";         
// // import { Accessibility, Assignment, CulturalEvents, FacultyDashboard, Footer, StallsInfo, StudentDashboard, TechnicalEvents ,LiveEvent,PreviousFest, Support,FAQ,ContactUs,Emergency, ResultsAndWinners,FeedbackForm,TermsAndConditions,PastEvents,Certificate,Privacy, Sponser, Sports, LiveChat} from './Footer';
