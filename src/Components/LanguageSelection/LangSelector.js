import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './LanguageSelection.css'

/**
 * Functional Component for selecting a language
 * - Requires props.languages a list of tuples in the form
 *   (languageCode:String,languageDisplayName:String)
 * - props.langSelected(languageCode) will be called upon the
 *   successful selection of a language.
 */
function LangSelector(props) {
    return (
        <div class="langSelector">
            <h1>Please Select a Language</h1>
            <Container>
                <Row sm>
                {Object.entries(props.languages).map(([_,[langKey,displayName]]) =>
                    <Col md = {2}>
                        <button id={langKey} className="langButton" 
                                onClick={() => props.langSelected(langKey)}>
                            {displayName}
                        </button>
                    </Col>
                )}
                </Row>
            </Container>
        </div>
    )
}

export default LangSelector