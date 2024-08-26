import { Component } from "react";
import SingleComment from "./SingleComment";


class CommentList extends Component {
  render() {
    return (
      <ul className="px-3">
        {this.props.comments.map((comment) => (
          <SingleComment
            key={comment._id}
            comment={comment}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}
export default CommentList;
