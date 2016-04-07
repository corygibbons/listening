import React from 'react';

class TrackListItem extends React.Component {
  render() {
    return (
      <li>
        <h1>{this.props.name}</h1>
        <h2>{this.props.artist}</h2>
      </li>
    )
  }
}

TrackListItem.proptypes = {
  artist: React.PropTypes.string,
  album: React.PropTypes.object
}

export default TrackListItem;
