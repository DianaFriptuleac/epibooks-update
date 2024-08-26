import { Component } from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  // BookList nasce per ricevere dalle props un ARRAY di libri!
  // chiameremo questa prop... booksArray

  // le props nei componenti a classe si recuperano dentro "this.props"

  state = {
    searchBook: "",
    selectedBookAsin: '', // Stato per tracciare il libro selezionato, posso mettere anche null
  };

  //cambiamento del campo di recerca
  handleSearch = (e) => {
    this.setState({ searchBook: e.target.value });
  };

  //filtro i libri
  filtraLibri = () => {
  return this.props.libri.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchBook.toLowerCase())
    );
  };
  // Gestione della selezione del libro
  handleBookSelection = (asin) => {
   if(this.state.selectedBookAsin === asin){
    this.setState({selectedBookAsin:''})
   }else{
    this.setState({selectedBookAsin: asin})
   }
  };

  render() {
    const filteredBook = this.filtraLibri();
    return (
      <Container fluid className="mx-1">
        <Row>
          {/* Colonna dei libri */}
          <Col xs={12} md={8}>
            <Row>
              <Col className="my-3 d-flex justify-content-center">
                <Form.Control
                  type="text"
                  placeholder="Cerca titolo libro"
                  className="w-75"
                  value={this.state.searchBook}
                  onChange={this.handleSearch}
                />
              </Col>
            </Row>
            <Row className="gy-4">
              {filteredBook.map((scifiBook) => (
                <SingleBook
                  key={scifiBook.asin}
                  libro={scifiBook}
                  isSelected={this.state.selectedBookAsin === scifiBook.asin}
                  onBookClick={this.handleBookSelection}
                />
              ))}
            </Row>
          </Col>

          {/* Colonna di CommentArea */}
          <Col xs={12} md={4}>
            {this.state.selectedBookAsin ? (
              <CommentArea asin={this.state.selectedBookAsin} />
            ) : (
              <h4 className="mt-2">Selezionare un libro per i commenti</h4>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookList;
