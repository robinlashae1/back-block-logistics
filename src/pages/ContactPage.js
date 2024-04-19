import SocialMediaIcons from "../components/SocialMediaIcon";

function ContactPage({data}){
    const formLabels = ["Name (Required)", "Email (Required)", "Phone (Required)", "Write us a Message"]
    const labeledInput = formLabels.map((label) => {return(
    <div>
        <label> {label} </label> 
        <input></input> 
    </div>)})

    return(
        <div>
            <div>
               <h1>{data.SectionHeader}</h1>
                <form>
                    {labeledInput}
                </form>
                <button>Submit</button> 
            </div>
            <div>
                <p>{data.SectionDescription}</p>
                <p>{data.Address}</p>
                <p>{data.Email}</p>
                <p>{data.Phone}</p>
                <SocialMediaIcons />
               
            </div>
        </div>
        
    )
}
export default ContactPage;