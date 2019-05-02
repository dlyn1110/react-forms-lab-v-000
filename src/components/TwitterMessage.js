import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: ''
    };

  }

  handleChange = (event) => {
    this.setState({characters: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.characters} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
