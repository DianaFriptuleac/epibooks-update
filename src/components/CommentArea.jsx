import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [], // Inizializza lo stato per i commenti
  };

  fetchComments = () => {

    // fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjJlYWYyNjBjYzAwMTVjYzBkZWUiLCJpYXQiOjE3MjQzMjc1NjQsImV4cCI6MTcyNTUzNzE2NH0.g888918CD5qke7EIIwh90BjBGeHnwAIHTubT-bzC7fI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        console.log("Risposta JSON", data);
        this.setState({ comments: data }); // Salva i commenti nello stato
      })
      .catch((err) => {
        console.log("Chiamata andata male", err);
      });
  };

  componentDidMount() {
    console.log("componenteDidMount");
    this.fetchComments();
  }

  render() {
    return (
      <div className="bg-light my-3">
        <h4 className="text-center pt-2">Commenti</h4>
       <CommentList comments={this.state.comments}/>
       <AddComment asin={this.props.asin}/>
      </div>
    );
  }
}

export default CommentArea;