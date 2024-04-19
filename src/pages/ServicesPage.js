import InfoCards from "../components/InfoCards";
import DelawareSkyline from "../assets/Delaware Skyline.png"

function ServicesPage({data}){
    
    return(
        <div>
            <section>
                <img src={DelawareSkyline}/>
            <InfoCards button={true} data={data} dataIndex={0}/>
            </section>
            <section>
                <InfoCards data={data} dataIndex={1}/>
            </section>
            <section>
                <InfoCards data={data} dataIndex={2}/>
                <InfoCards data={data} dataIndex={3}/>
                <InfoCards data={data} dataIndex={4}/>
                <InfoCards data={data} dataIndex={5}/>
            </section>
            

        </div>
        
    )
}
export default ServicesPage;