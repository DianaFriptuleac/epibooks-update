import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import mybooks from "../assets/books/fantasy.json"

class AllTheBooks extends Component {
    
render() {
    return(
        <Container>
            <Row className="gy-4 my-3">
                {mybooks.map((singlebook) => {
                    return(
                        <Col xs={12} md ={6} lg={3} key={singlebook.asin}>
                        <Card className="mb-4 g-4 h-100">
                        <Card.Img variant="top" className="card-img-top" src={singlebook.img} />
                        <Card.Body className="pb-0">
                          <Card.Title className="title-overflow">{singlebook.title}</Card.Title>
                          <div className="d-flex justify-content-center">
                          <Button variant="info" className="text-center px-3 text-light ">
                           {singlebook.price} $
                          </Button>
                          </div>
                        </Card.Body>
                      </Card>
                      </Col>
                    )
                })}
     
            </Row>
        </Container>
    )
}
}
export default AllTheBooks