import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import RecentTracks from './containers/RecentTracks';
import TopAlbums from './containers/TopAlbums';
import TopArtists from './containers/TopArtists';
import TopTracks from './containers/TopTracks';

export default (
  <Route path="/" component={App}>
    <Route path="/recent" component={RecentTracks} />
    <Route path="/albums" component={TopAlbums} />
    <Route path="/artists" component={TopArtists} />
    <Route path="/tracks" component={TopTracks} />
  </Route>
);
