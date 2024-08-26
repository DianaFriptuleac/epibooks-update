import {Col, Container, Row } from "react-bootstrap"

const MyFooter = function(){
    return(
     <footer className="bg-dark">
        <Container>
        <Row>
            <Col className="text-center">
            <ul className="list-unstyled mt-3">
                <li className="text-light">
                  Sponsor
                </li>
                <li className="text-light">
                  Social
                </li>
                <li  className="text-light">
                  Contatti
                </li>
            </ul>
            </Col>
        </Row>
        </Container>
     </footer>
    )
}
export default MyFooter