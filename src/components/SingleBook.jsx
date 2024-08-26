import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";



class SingleBook extends Component {
// SingleBook deve mostrare UN solo libro
  // si presuppone che questo libro gli arrivi dalle props

  // immaginiamo di invocare sempre SingleBook con una prop che si chiama "libro"
  // ci possiamo aspettare lèoggetto del libro in this.props.libro

  render() {


    return (
      <Col xs={12} md={6} lg={3} key={this.props.libro.asin}>
         <Card
          className={`mb-4 h-100 ${this.props.isSelected ? "border border-danger border-3" : ""}`}
          onClick={() => this.props.onBookClick(this.props.libro.asin)}
          style={{ cursor: "pointer" }}
        >
          <Card.Img
            variant="top"
            className="card-img-top"
            src={this.props.libro.img}
          />
          <Card.Body className="pb-0">
            <Card.Title className="title-overflow">
              {this.props.libro.title}
            </Card.Title>
            <div className="d-flex justify-content-center">
              <Button
                variant="danger"
                className="text-center px-3 text-light mb-3"
              >
                {this.props.libro.price} $
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

    );
  }
}
export default SingleBook;