import React, {Component} from 'react'

class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            } 
        }
    }

    updateBirate = () =>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    updateResolution = () => {
        this.setState({
            settings:{
                bitrate: 8,
                video:{
                  resolution:  '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.updateBirate} className='bitrate'></button>
                <button onClick={this.updateResolution} className='resolution'></button>
            </div>
        )
    }
}

export default YouTubeDebugger
