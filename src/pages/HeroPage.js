import InfoCards from "../components/InfoCards";
import HeroCollage from "../assets/HeroCollage.png";
import DeliveryTruck from "../assets/InfoCard-Delivery-truck-icon.png";
import Location from "../assets/InfoCard-Location-Icon.png";
import HandShake from "../assets/InfoCard-HandShake-Icon.png"

function HeroPage({data}){
    console.log(data)
    return(
        <div>
           <section>
            <h1></h1>
                <InfoCards data={data} dataIndex={0} button={true}/>
            </section>
            <section id="heroPage-section-two">
                <InfoCards  data={data} dataIndex={1}/>
            </section>
            <section>
                <img src={HeroCollage}/>
                <InfoCards data={data} dataIndex={2}/>
                <div>
                    <InfoCards data={data} dataIndex={3} />
                    <InfoCards data={data} dataIndex={4} icon={DeliveryTruck}/>
                    <InfoCards data={data} dataIndex={5} icon={Location}/>
                    <InfoCards data={data} dataIndex={6} icon={HandShake}/>
                </div>
            </section>
        </div>
        
      
    )
}
export default HeroPage;