import Content from "../../Content"
import NavCard from "./NavCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavCards() {
    const content = Content

    return (
        <div id={"navCards"}>
            <Container>
                <Row className="justify-content-md-center">
                {content.map((page) => (
                    <Col sm md="2.5">
                        <NavCard {...page} id={page.nav}/>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}
export default NavCards