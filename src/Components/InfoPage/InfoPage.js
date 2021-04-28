import InfoSection from './InfoSection'
import './InfoPage.css'

function InfoPage(props) {
    let greeting = props.greeting ? 
        props.greeting :
        <h1>Welcome {props.audience}!</h1>

    return (
        <div className="page" id="infoPage">
            {greeting}
            <div className="infoSections">
                {props.sections.map((section) => (
                    <InfoSection {...section}/>
                ))}
            </div>
        </div>
    )
}

export default InfoPage