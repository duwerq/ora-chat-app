
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../App.css';
import '../../styles/Chats.css';

//actions
import {listChats}  from '../../actions/chats/listChats'

var moment = require('moment');

class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    
  }

  componentWillMount() {
    this.props.dispatch(listChats())
    this.setState({
      currentDate: moment()
    })
  }

  render() {
    let {chats} = this.props;
    console.log("chats", chats, this.state)
    return (
      <div className="chats-container">
        {chats.map((chat, i) => {
          let lastMessageDate = chat.last_chat_message.created_at
          let chatName = chat.name
          let userName = chat.last_chat_message.user.name.split(" ")[0]
          let message = chat.last_chat_message.message
          let currentDate = this.state.currentDate.format("YYYY-MM-DD")
          let formatMessageDate = moment(chat.last_chat_message.created_at).format("YYYY-MM-DD")
          let messageDate = ''
          let fromNow = this.state.currentDate.fromNow()
          currentDate !== formatMessageDate ? (messageDate = moment(chat.last_chat_message.created_at).format('MMM D')): (messageDate = "Today")
          return(
            <div className={`chats-message-container ${i}`} key={i}>
              <div className='chats-message-date'>
                <span>{messageDate}</span>
              </div>
              <div className="chats-message-details">
                <div className="chats-message-name">{`${chatName} by ${userName}`}</div>
                <div className="chats-from-now">{`${userName} - ${fromNow}`}</div>
                <div className="chats-message">{message}</div>
          
              </div>
              
            </div>
        )
        })}
      </div>
    );
  }
}

export default withRouter(connect(
  state => {
    console.log('auth', state)
    return {
      chats: state.chats.data,
    };
  }
)
(Chats))

