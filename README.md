# listening.corygibbons.com

A Last.fm listening history aggregator using React & Redux

My starting point for this was the "[real world](https://github.com/reactjs/redux/tree/master/examples/real-world)" example from the official Reduxjs repo.


## Configuration

Add a `./config.js` that exports your last.fm username and an [API Key](http://www.last.fm/api/account/create) like so:

```
module.exports = {
  lastfmUser: 'username',
  lastfmApiKey: 'api_key',
  googleAnalyticsKey: 'your_key'
}
```

An analytics key is required, but only for production builds (`npm build`)


## Up and running

`git clone`

`npm install`

`npm start`

## Building

`npm build`
