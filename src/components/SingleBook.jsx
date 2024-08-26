import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";



class SingleBook extends Component {
// SingleBook deve mostrare UN solo libro
  // si presuppone che questo libro gli arrivi dalle props

  // immaginiamo di invocare sempre SingleBook con una prop che si chiama "libro"
  // ci possiamo aspettare lèoggetto del libro in this.props.libro

  render() {

    const { libro, isSelected, onBookClick } = this.props;

    return (
      <Col xs={12} md={6} lg={3} key={this.props.libro.asin}>
         <Card
          className={`mb-4 h-100 ${isSelected ? "border border-danger border-3" : ""}`}
          onClick={() => onBookClick(libro.asin)}
          style={{ cursor: "pointer" }}
        >
          <Card.Img
            variant="top"
            className="card-img-top"
            src={libro.img}
          />
          <Card.Body className="pb-0">
            <Card.Title className="title-overflow">
              {libro.title}
            </Card.Title>
            <div className="d-flex justify-content-center">
              <Button
                variant="danger"
                className="text-center px-3 text-light mb-3"
              >
                {libro.price} $
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

    );
  }
}
export default SingleBook;