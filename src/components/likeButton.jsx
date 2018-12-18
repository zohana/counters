import React, { Component } from "react";

class LikeButton extends Component {
  state = { isLiked: false };

  handleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });
  };

  render() {
    return (
      <div>
        <div
          className={this.state.isLiked ? "fa fa-heart" : "fa fa-heart-o"}
          onClick={this.handleLike}
        />
      </div>
    );
  }
}

export default LikeButton;
