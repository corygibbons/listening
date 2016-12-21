import React from 'react';
import CSSTranstionGroup from 'react-addons-css-transition-group';

class AboutModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about" onClick={this.props.onBgClick}>
        <div className="about-inner" onClick={evt => {evt.stopPropagation()}}>
          <p>Real-time aggregation of my listening history since August 2008, powered by <a href="http://www.last.fm/">Last.fm</a>, <a href="https://facebook.github.io/react/">React</a>, and <a href="http://redux.js.org">Redux</a>. View on <a href="http://github.com/corygibbons/listening">Github</a>.</p>
          <p>This is a fork of the excellent <a href="https://github.com/essmahr/listening">essmahr/listening</a> project by <a href="http://smahr.net">Scott Mahr</a>.</p>
        </div>
        <div className="about-close"><span>Close</span></div>
      </div>
    );
  }
}

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    }
  }

  toggleModal() {
    if (this.state.modalOpen) {
      this.closeModal();
    } else {
      this.openModal();
    }
  }

  openModal(evt) {
    document.body.classList.add('scroll-lock');

    this.setState({
      modalOpen: true,
    });
  }

  closeModal(evt) {
    document.body.classList.remove('scroll-lock');

    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div>
        <div className="button-container">
          <button className="about-launch" onClick={this.toggleModal.bind(this)}>?</button>
        </div>
        <CSSTranstionGroup transitionName="modal" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {this.state.modalOpen ? <AboutModal onBgClick={this.closeModal.bind(this)}/> : null}
        </CSSTranstionGroup>
      </div>
    );
  }
}
