import React, { Component, PropTypes } from 'react';
import Video from 'components/media/Video';

class FranklyVideoPlayerAdapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ''
    };
    
    this.updateVideo = this.updateVideo.bind(this);

  }

  componentDidMount() { // set initial video
    const url = 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8';
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Bike Video (1)',
        strAdTag: 'Weather - Live Streaming',
        hasPreroll: true,
        strSummaryImageUrl: '',
        mobileStreams: [{
          url,
          type: 'video/mp4'
        }, {
          url: '',
          type: 'video/mp4'
        }, {
          url: '',
          type: 'video/mp4'
        }]
      }]
    }];
      
    this.setState({
      video: <Video clipId={1} autoPlay={true} wNVideoCanvasProps={wNVideoCanvasProps} />
    });
  }
  
  async updateVideo() {
    
    const url = 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8';
    const wNVideoCanvasProps = [{
      SetFlashLiveStream: [{
        strUrl: url,
        strHeadline: 'Test Video (2)',
        strAdTag: 'Weather - Live Streaming',
        hasPreroll: true,
        strSummaryImageUrl: '',
        mobileStreams: [{
          url,
          type: 'video/mp4'
        }, {
          url: '',
          type: 'video/mp4'
        }, {
          url: '',
          type: 'video/mp4'
        }]
      }]
    }];
    
    await this.setState({ video: '' }); // clear the current video before setting a new one.

    // clipId is required if you are not using FRN_rawResponses
    this.setState({
      video: <Video clipId={2} autoPlay={true} wNVideoCanvasProps={wNVideoCanvasProps} />  
    });
  }
  
  render(){
    return (
      <div className='VideoModuleDemo'>	
        <h1>Video Demo</h1> 
        <button onClick={this.updateVideo}>Video2</button>
	      {this.state.video}
      </div>
    );
	  
  }
}

export default FranklyVideoPlayerAdapter;
