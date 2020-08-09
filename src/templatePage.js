import React, { Component } from "react";
import GithubCorner from "react-github-corner";
import "./styles/templatePage.css";
import { Link } from "react-router-dom";

class TemplatePage extends Component {
  render() {
    return (
      <div className="full_height">
        <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">
        <img src={'/images/briscolaLogoTransparent.png'} alt={'briscola-logo'}/>
        </div>
        </Link>
        {this.props.content}
        <GithubCorner
          href={"https://github.com/aflorj/briscola"}
          target={"_blank"}
          bannerColor="#ffffff"
          octoColor="#000000"
          size={85}
          direction="right"
        />
      </div>
    );
  }
}

export default TemplatePage;