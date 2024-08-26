import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [], // Inizializzo lo stato per i commenti
  };

  fetchComments = () => {
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
        this.setState({ comments: data }); // Salvo i commenti nello stato
      })
      .catch((err) => {
        console.log("Chiamata andata male", err);
      });
  };

  componentDidMount() {
    console.log("componenteDidMount");
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.fetchComments();
    }
  }
  // richiedo un nuovo fetch dei commenti dal server per aggiornare lo stato comments con i dati più recenti.
  handleCommentAdded = () => {
    this.fetchComments();
  };

  deleteComment = (commentId) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjJlYWYyNjBjYzAwMTVjYzBkZWUiLCJpYXQiOjE3MjQzMjc1NjQsImV4cCI6MTcyNTUzNzE2NH0.g888918CD5qke7EIIwh90BjBGeHnwAIHTubT-bzC7fI",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Rimuovo il commento dallo stato filtrando l'array dei commenti
          this.setState({
            comments: this.state.comments.filter(comment => comment._id !== commentId),
          });
        } else {
          alert("Errore nella cancellazione del commento!");
        }
      })
      .catch((err) => {
        console.log("Errore: ", err);
      });
  };

  render() {
    return (
      <div className="bg-light my-3">
        <h4 className="text-center pt-2">Commenti</h4>
        <CommentList comments={this.state.comments} onDelete={this.deleteComment} />
        {/*sincronizzaro lo stato dei commenti nel CommentArea con quello aggiunto con AddComment. */}
        <AddComment asin={this.props.asin} onSuccess={this.handleCommentAdded}/>
      </div>
    );
  }
}

export default CommentArea;
