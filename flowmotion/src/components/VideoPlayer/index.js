import React, {Component} from 'react'
import YouTube from 'react-youtube';

export default class VideoPlayer extends Component {
  render() {
    const opts = {
      height: '360',
      width: '640',
      playerVars: { // https://www.youtube.com/watch?v=KKj6LCEdNBI
        autoplay: 1,
        showinfo: 0,
        rel: 0,

      }
    };

    return (
      <YouTube
        videoId="KKj6LCEdNBI"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}
