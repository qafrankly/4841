import React, { Component, PropTypes } from 'react';
import Video from 'components/media/Video'; //clearly only exists on Frankly servers

// const wNVideoCanvasPropsExample = [{
//   SetFlashLiveStream: [{
//     strUrl: url,
//     strHeadline: 'Bike Video (1)',
//     strAdTag: 'Weather - Live Streaming',
//     hasPreroll: true,
//     strSummaryImageUrl: '',
//     mobileStreams: [{
//       url,
//       type: 'video/mp4'
//     }, {
//       url: '',
//       type: 'video/mp4'
//     }, {
//       url: '',
//       type: 'video/mp4'
//     }]
//   }]
// }];

class FranklyVideoPlayerAdapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: props.autoPlay || false,
      controls: true,
      sources:props.sources || [{src: false, type: false}],
      poster: props.poster || '',
      showAdContainer: true,

    }
  }

  propsAdapter = ()=> {
    let mobileStreams = [{
       url: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8',
       type: 'video/mp4'
     }, {
       url: '',
       type: 'video/mp4'
     }, {
       url: '',
       type: 'video/mp4'
     }];

    let franklyProps = {
      clipId: 1,
      autoPlay: true,
      wNVideoCanvasProps: [{
        SetFlashLiveStream: [{
          strUrl: 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8',
          strHeadline: '',
          strAdTag: this.props.contentClass,
          hasPreroll: !!this.props.contentClass,
          strSummaryImageUrl: '',
          mobileStreams: mobileStreams
        }]
      }]
    }

    console.log('franklyProps', franklyProps)
    return franklyProps
  }




  render(){
    return (
      <div className='frankly-video-player-adapter'>
	      <Video {...this.propsAdapter()} />
      </div>
    );

  }
}

export default FranklyVideoPlayerAdapter;
