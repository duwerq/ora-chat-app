import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom';
import '../App.css';



export default class Header extends Component {

  render() {
    let leftNav = this.props.navLeft.toLowerCase()
    
    
    return (
      <div className="App">
        <div className="App-header-title">
          <Link to={leftNav} style={{textDecoration: "none", fontSize: "20px", color: "rgb(245, 170, 44)", position: "absolute", left: "15px", top: "30px"}}>{this.props.navLeft}</Link>
          <h2 style={{position: "absolute",  top: "5px"}}>{this.props.title}</h2>
          <div  onClick={this.props.submitForm} style={{textDecoration: "none", fontSize: "20px", color: "rgb(245, 170, 44)", position: "absolute", right: "3%", top: "30px"}}>{this.props.navRight}</div>
        </div>
        
      </div>

    );
  }
}


