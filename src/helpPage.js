import React, { Component } from "react";
import TemplatePage from "./templatePage.js";

class HelpPage extends Component {
    render() {
      return (
        <TemplatePage
          content={
            <div>
              <h3>Controls</h3>
              <p>Mouse or 1, 2 and 3 keys on the keyboard</p>
              <h3>Rules</h3>
              <p>...</p>
            </div>
          }
        />
      );
    }
  }
  
  export default HelpPage;