import { Link } from "react-router-dom"
export default function LandingPageContent() {
    return (
        <div className="LandingPage">
            <main className="landingpagecontent">
                {/* <img src="https://miracle.edu.in/wp-content/uploads/2019/08/campusubsec-2-278x278.jpg" width="50%" height="400px" className="landingPageImage"></img> */}
                <div className="FestTheme">
                    <h1 className="ThemeHeader">Theme</h1>
                    <h2 className="ThemeSubHeader">Main Theme Header</h2>
                    <p className="ThemeContentDetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam fugit molestiae quam et amet dignissimos aperiam? Tempore a odio itaque magni? Accusantium soluta est iusto neque similique odit facere tempora.
                        Repellendus atque, nulla eum mollitia quas eaque earum unde assumenda excepturi temporibus, libero animi natus magni saepe totam molestiae deleniti quod quo ab reprehenderit possimus voluptatem, eligendi nisi. Aspernatur, non!
                        Quas ab similique eum vitae facilis eaque sunt, quod dolorem autem, earum nesciunt. Voluptate molestiae eveniet, commodi beatae architecto illum! Pariatur voluptatum nobis illo, ipsam vitae non odit alias neque!
                        Qui eum voluptatum, optio assumenda, animi sunt, aliquid commodi ab tempora fugit ipsa possimus mollitia fugiat pariatur ea? Facere corporis fuga est quibusdam veritatis, aliquid eaque quam et adipisci inventore!
                        Eaque dolores natus modi quis, deserunt numquam a? Pariatur, in incidunt. Rem nisi voluptatum magnam. Quidem nostrum sunt nobis optio nemo iusto voluptatem, tenetur quaerat non neque nisi aperiam natus?</p>
                </div>
            </main>
            <div className="Compitations">
                <h1 className="EventTitle">Events</h1>
                <div className="selectEvents">
                    <div className="Technical">
                        <div className="EventImages">
                            {/* <Link to="/TechnicalEvents">Technical</Link> */}
                        </div>
                        {/* <img src="https://img.freepik.com/premium-photo/futuristic-technology-background_604472-126122.jpg?w=360"></img> */}

                    </div>
                    <div className="Sports">
                        <div className="EventImages"></div>
                        {/* <p>Sports</p> */}
                        {/* <img src="https://www.shutterstock.com/image-photo/different-sports-equipment-on-green-600nw-2463190611.jpg" ></img> */}
                    </div>
                    <div className="Cultural">
                        <div className="EventImages"></div>
                        {/* <img src="https://www.gec.edu.in/assets/img/course/cultural.jpg" ></img> */}
                        {/* <p>Cultural</p> */}
                    </div>
                </div>
            </div>
            <div className="PastEventGallery">
                <h1 className="pastEventGalleryHeader">Gallery</h1>
                <div className="galleryFlexItems">
                <div className="gallery-grid">
                    <div className="gridItem wide-right"></div>
                    <div className="gridItem"></div>
                    <div className="gridItem"></div>
                    <div className="gridItem wide-left"></div>
                    <div className="gridItem tall" ></div>
                    <div className="gridItem"></div>
                    <div className="gridItem"></div>
                    <div className="gridItem"></div>
                    <div className="gridItem"></div>
                 
                    
                  
                </div>
                {/* <div className="gridGallery2">
                    <div className="grid"></div>
                    <div className="grid"></div>
                    <div className="grid"></div>
                  
                </div>
                  <div className="gridGallery3">
                    <div className="grid"></div>
                    <div className="grid">   
                    </div>
                   
                </div> */}
                </div>
            </div>


        </div>
    )
}