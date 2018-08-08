import React, {Component, PropTypes} from 'react'
import FranklyVideoPlayerAdapter from '../FranklyVideoPlayerAdapter';


class SkycamPage extends Component {

  render() { // REQUIRED
    return (
      <div className='gnm-skycam-page'>
        
              <FranklyVideoPlayerAdapter />

      </div>
    )
  }
}

export default SkycamPage
