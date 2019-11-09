import React from 'react'
import videoSource from './water.mp4'
import './Video.css'

class VideoPlayer extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
		 interval: undefined,
		 ctx: undefined
	  };

	  this.grabFrame = this.grabFrame.bind(this);
	}

	componentDidMount() {
	  this.setState({
		 ctx: this.canvas.getContext("2d")
      });
      this.play();
	}

	grabFrame() {
	  return this.state.ctx.drawImage(this.video, 0, 0, 1920, 1080);
	}

	play() {
	  if (this.video.paused) {
		 if (this.state.interval) {
			clearInterval(this.state.interval);
		 }
		 this.video.play();
		 this.setState({
			interval: setInterval(this.grabFrame, 1000 / this.props.fps)
		 });
	  } else {
		 clearInterval(this.state.interval);
		 this.setState({
			interval: undefined
		 });
		 this.video.pause();
	  }
	}

	render() {
	  return (
		 <div>
			<video width="100%" autoPlay loop ref={video => (this.video = video)} id="videoBackground">
			  <source
				 src={videoSource}
				 type="video/mp4"
			  />
			</video>
			<canvas
			  ref={canvas => (this.canvas = canvas)}
			  width="100%"
			  height="100%"
			/>
		 </div>
	  );
	}
 }

 export default VideoPlayer