import React, { Component } from "react";
import TemplatePage from "./templatePage.js";
import "./styles/joinPage.css";

class JoinPage extends Component {
  state = { id: "" };
  handleSubmit = () => {
    //Route to page
    const history = this.props.history;
    history.push("/lobby/" + this.state.id);
  };
  handleChange = (event) => {
    this.setState({
      id: event.target.value,
    });
  };
  render() {
    return (
      <TemplatePage
        content={
          <>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                spellCheck="false"
                className="game-code-window"
                placeholder="Enter the game code here"
                value={this.state.id}
                onChange={this.handleChange}
              />
              <br />
              <input
                type="submit"
                value="Join"
                className="submit-code"
              />
            </form>
          </>
        }
      />
    );
  }
}

export default JoinPage;