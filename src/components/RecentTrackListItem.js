import React from 'react';
import TimeAgo from 'react-timeago';
import smarten from '../lib/smarten'
import moment from 'moment';

class RecentTrackListItem extends React.Component {
  constructor(props) {
    super(props);

    this.timestamp = parseInt(props.date, 10) * 1000;
  }

  timeLabel() {
    if (!this.timestamp) return;

    const dayAgo = new Date().getTime() - (60 * 60 * 12 * 1000);

    if (this.timestamp > dayAgo) {
      return moment(this.timestamp).fromNow();
    } else {
      return moment(this.timestamp).format('MMMM D h:mma');
    }
  }

  render() {
    const classNames = ['list-item', 'recent-tracks-list-item'];
    if (this.props.firstOfAlbum) { classNames.push('first-of-type'); }

    return (
      <li className={classNames.join(' ')}>
        <div className="recent-track-info-container">
          <div className="recent-track-artist">{this.props.artist}</div>
          <div className="recent-track-song">
            <span className="recent-track-title">{smarten(this.props.name)}</span>
            <div className="recent-track-album">{this.props.album}</div>
          </div>
        </div>
        <span className="recent-track-timestamp">{this.timeLabel()}</span>
      </li>
    )
  }
}

RecentTrackListItem.proptypes = {
  artist: React.PropTypes.string,
  album: React.PropTypes.object,
  date: React.PropTypes.string,
}

export default RecentTrackListItem;
