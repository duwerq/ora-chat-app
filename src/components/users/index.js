import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import '../../App.css';
import '../../styles/Users.css'

//header
import Header from '../header'

//actions
import {createUser}  from '../../actions/users/createUser'

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm() {
    this.props.dispatch(createUser(this.state))
  }

  render() {
    return (
      <div>
        <Header title={"Register"} navLeft={"Login"} navRight="Register" submitForm={this._submitForm}/>
        <div className="register-form">
          <form>
            <div>
              <input 
                type="text" 
                value={this.state.name} 
                onChange={(name) => this.setState({name: name.target.value})} 
                placeholder="Name"
                required
              />
            </div>
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
            <div>
              <input 
                type="password" 
                value={this.state.passwordConfirmation} 
                onChange={password => this.setState({passwordConfirmation: password.target.value})} 
                placeholder="Confirm"
                required
              />
            </div>
            
            </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
  state => {
    return {
      users: state.users,
    };
  }
)
(CreateUser))

