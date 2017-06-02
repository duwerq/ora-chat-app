import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import '../../App.css';
import '../../styles/Users.css'

//actions
import {login}  from '../../actions/auth/login'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm() {
    console.log("this props", this.props)
    this.props.dispatch(login(this.state))
  }

  render() {
    return (
      <div className="Register-form">
        <div>
          <input 
            type="email" 
            value={this.state.email} 
            onChange={email => this.setState({email: email.target.value})} 
            autoComplete="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input 
            type="password" 
            value={this.state.password} 
            onChange={password => this.setState({password: password.target.value})}
            placeholder="Password"
            required
          />
        </div>
        <div onClick={this._submitForm}>Submit</div>
      </div>
    );
  }
}

export default withRouter(connect(
  state => {
    console.log('auth', state)
    return {
      users: state.auth,
    };
  }
)
(Login))
