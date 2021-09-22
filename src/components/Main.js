import React, { Component } from "react";
import "./Main.css";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import { ToggleArea } from "./ToggleArea";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.searchText = React.createRef();
    this.toggleArea= React.createRef();
  }

  componentDidMount() {
    this.searchText.current.focus();
  }

  handleToggle = () => {
      $(this.toggleArea.current).slideToggle();
    // let el = findDOMNode(this.refs.toggleArea);
    // $(el).slideToggle();
  };

  render() {
    return (
      <div className="Main">
        <input type="search" ref={this.searchText} placeholder="Ara..." />
        <ToggleArea ref={this.toggleArea} text="Aradığınız herşeyi bulabilirsiniz" />
        
          {/* <div ref="toggleArea" className="toggle-area"> */}
            {/* <p>Aradığınız herşeyi bulabilirsiniz</p> */}
          {/* </div> */}
          <div className="toggle-button"
          onClick={this.handleToggle} onLoad={() => this.handleToggle() } >
              <p>&#x21C5;</p>
          </div>
       
      </div>
    );
  }
}
