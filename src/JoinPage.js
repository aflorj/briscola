import React, { Component } from 'react';
import TemplatePage from './TemplatePage.js';
import './styles/joinPage.css';
import { withTranslation } from 'react-i18next';

class JoinPage extends Component {
  state = { id: '' };
  handleSubmit = () => {
    const history = this.props.history;
    history.push('/lobby/' + this.state.id);
  };
  handleChange = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  render() {
    const { t } = this.props;
    return (
      <TemplatePage
        content={
          <>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                spellCheck="false"
                className="game-code-window"
                autoComplete="off"
                maxLength="11"
                placeholder={t('Placeholder')}
                value={this.state.id}
                onChange={this.handleChange}
              />
              <br />
              <div className="menu-button small" onClick={this.handleSubmit}>
                <span>{t('Join')}</span>
              </div>
            </form>
          </>
        }
      />
    );
  }
}

export default withTranslation()(JoinPage);
