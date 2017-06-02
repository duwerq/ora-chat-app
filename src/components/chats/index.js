
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

//components
import {AutoSuggestComponent} from './AutoSuggestComponent'

//styles
import '../../App.css';
import '../../styles/Chats.css';

//actions
import {listChats}  from '../../actions/chats/listChats'

var moment = require('moment');

class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null
    }
    this._filterMessages = this._filterMessages.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(listChats())
    this.setState({
      currentDate: moment()
    })
  }

  _filterMessages(message) {
    this.setState({
      filterData: message
    })
    
  }

  render() {
    let {chats} = this.props;
    let searchOptions = []
    chats.map((chat, i) => {
      let lastChatMessage = chat.last_chat_message
        searchOptions.push({
          text: lastChatMessage.message,
        })
        searchOptions.push({
          text: lastChatMessage.user.name,
        })
        searchOptions.push({
          text: chat.name,
        })
      })
    return (
      <div className="chats-container">
        <div className="auto-suggest-container">
          <AutoSuggestComponent searchOptions={searchOptions} selected={this._filterMessages}/>
        </div>
        {chats.map((chat, i) => {
          let lastChatMessage = chat.last_chat_message
          let lastMessageDate = lastChatMessage.created_at
          let chatName = chat.name
          let userName = lastChatMessage.user.name.split(" ")[0]
          let message = lastChatMessage.message
          let currentDate = this.state.currentDate.format("YYYY-MM-DD")
          let formatMessageDate = moment(lastChatMessage.created_at).format("YYYY-MM-DD")
          let messageDate = ''
          let fromNow = this.state.currentDate.fromNow()
          currentDate !== formatMessageDate ? (messageDate = moment(lastChatMessage.created_at).format('MMM D')): (messageDate = "Today")
          
          if (this.state.filter) {
            if (this.state.filter === (chatName || userName || message)) {
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
            }
          } else {
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
          }
          
        })}
      </div>
    );
  }
}

export default withRouter(connect(
  state => {
    return {
      chats: state.chats.data,
    };
  }
)
(Chats))

