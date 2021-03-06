import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router';
import '../../App.css';
import '../../styles/Users.css'

//header
import Header from '../header'

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
    this.props.dispatch(login(this.state))
  }

  render() {
    console.log('heyo')
    return (
      <div>
      <Header title={"OraChat"} navLeft={"Register"} navRight="Login" submitForm={this._submitForm}/>
        <div className="register-form">
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
        </div>
        {!this.props.auth ? null : <Redirect push to="/chats" />}
      </div>

    );
  }
}

export default withRouter(connect(
  state => {
    console.log('auth', state)
    return {
      auth: state.auth.data,
    };
  }
)
(Login))

