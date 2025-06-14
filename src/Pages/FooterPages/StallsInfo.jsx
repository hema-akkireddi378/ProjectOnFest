import { Link } from "react-router-dom"
export default function StallsInfo() {
    return (
        <div className='stallsInfo'>

            <p className="stalls-header">List of Stalls in Miracle Fest</p>
            {/* <div className='main-events-header'>
            <p className="cultural-header">Cultural Events</p>
            </div> */}
            <p className='main-stall-header'>Biriyani & Fast Food Stalls</p>

            <div className='stalls'>
                {/* <p className="technical-header">Technical Events</p> */}
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Biriyani Veg & Non Veg</p>
                    <hr></hr>
                    <div className="content">

                        <p className="event-content">Stall Name :</p>
                        <p className="event-content">Stall Owner Name :</p>
                        <p className="event-content">Contact Number :</p>
                    </div>
                    <hr></hr>
                    <Link to="/ProCoder" className='stalls-more'></Link>
                </div>
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Fride Rice Veg & Non Veg</p>
                    <hr></hr>
                    <div className="content">

                        <p className="event-content">Stall Name :</p>
                        <p className="event-content">Stall Owner Name :</p>
                        <p className="event-content">Contact Number :</p>
                    </div>
                    <hr></hr>
                    <Link to="/ProCoder" className='stalls-more'></Link>
                </div>
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Noodles Veg & Non Veg</p>
                    <hr></hr>
                    <div className="content">

                        <p className="event-content">Stall Name :</p>
                        <p className="event-content">Stall Owner Name :</p>
                        <p className="event-content">Contact Number :</p>
                    </div>
                    <hr></hr>
                    <Link to="/ProCoder" className='stalls-more'></Link>
                </div>
                
            </div>

            <p className='main-stall-header'>Cool Drinks & Fruit Saladas</p>

            <div className='stalls'>
                {/* <p className="technical-header">Technical Events</p> */}
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Cools Drinks</p>
                    <hr></hr>
                    <div className="content">

                        <p className="event-content">Stall Name :</p>
                        <p className="event-content">Stall Owner Name :</p>
                        <p className="event-content">Contact Number :</p>
                    </div>
                    <hr></hr>
                    <Link to="/ProCoder" className='stalls-more'></Link>
                </div>

                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Cools Drinks</p>
                    <hr></hr>
                    <div className="content">

                        <p className="event-content">Stall Name :</p>
                        <p className="event-content">Stall Owner Name :</p>
                        <p className="event-content">Contact Number :</p>
                    </div>
                    <hr></hr>
                    <Link to="/ProCoder" className='stalls-more'></Link>
                </div>

                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Fruit Juices</p>
                    <hr></hr>
                    <div className="content">

                        <p className="event-content">Stall Name :</p>
                        <p className="event-content">Stall Owner Name :</p>
                        <p className="event-content">Contact Number :</p>
                    </div>
                    <hr></hr>
                    <Link to="/ProCoder" className='stalls-more'></Link>
                </div>
                <div className="biriyanifastfood-stalls">
                    <p className="fastfood-header">Fruits Saladas</p>
                    <hr></hr>
                    <div className="content">

                        <p className="event-content">Stall Name :</p>
                        <p className="event-content">Stall Owner Name :</p>
                        <p className="event-content">Contact Number :</p>
                    </div>
                    <hr></hr>
                    <Link to="/ProCoder" className='stalls-more'></Link>
                </div>
               
                
            </div>
        </div>

    )
}










