import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Chat extends Component {
  state = { message: '' };
  handleSubmit = (event) => {
    event.preventDefault();
    // don't send empty messages
    if (this.state.message) {
      this.props.props.sendChatMessage(this.state.message);
      this.setState({
        message: '',
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    const allMessages = this.props.props.chatMessages;
    // only render ten messages
    const lastTenMessages = allMessages.slice(
      Math.max(allMessages.length - 10, 0)
    );
    const heroID = this.props.handID;
    const { t } = this.props;

    return (
      <div id="chat">
        <div id="chat-top">
          {lastTenMessages.map((msg, index) => (
            <div
              className={`message-wrapper ${
                msg.sender === heroID ? 'hero-message' : 'villain-message'
              }`}
              key={'msg-' + index}
            >
              <p className="sender" key={'sender-' + index}>
                {t(msg.sender === heroID ? 'You said' : 'Opponent said')}
              </p>
              <p className="message-content" key={'content-' + index}>
                {msg.payload}
              </p>
            </div>
          ))}
        </div>
        <form id="chat-bottom" onSubmit={this.handleSubmit}>
          <input
            maxLength="42"
            type="text"
            spellCheck="false"
            id="enter-message"
            autoComplete="off"
            placeholder={t('Message placeholder')}
            value={this.state.message}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default withTranslation()(Chat);
