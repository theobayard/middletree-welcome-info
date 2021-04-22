import InfoSection from './InfoSection'
import './InfoPage.css'

function InfoPage(props) {
    return (
        <div className="page" id="infoPage">
            <h1>Welcome {props.audience}!</h1>
            <div className="infoSections">
                {props.sections.map((section) => (
                    <InfoSection {...section}/>
                ))}
            </div>
        </div>
    )
}

export default InfoPage