
function InfoCards({data,button,icon,dataIndex}){

    return(
        <div>
            {icon? <img src={icon}/> : <></>}
            <p>
                {data[`${dataIndex}`].SectionHeader}
            </p>
            <p>
                {data[`${dataIndex}`].SectionDescription}
            </p>
            {button? 
                <button>
                    Request a Quote
                </button> : <></>
            }
        </div>
    )
}
export default InfoCards