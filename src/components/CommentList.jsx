import { Component } from "react";
import SingleComment from "./SingleComment";
//import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
    render(){
        return(
            <ul>
            {this.props.comments.map((comment) => (
              <SingleComment key={comment._id} comment={comment} />
            ))}
          </ul>
        )
    }

}
export default CommentList