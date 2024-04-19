import InfoCards from "../components/InfoCards";
import StoryCollage from "../assets/StoryCollage.png"

function About({data}){
    return(
        <div>
            <img src={StoryCollage}/>
            <div>
                <p>
                    Our Story
                </p>
                <InfoCards data={data} dataIndex={0}/>
            </div>
        </div>
    )
}
export default About;