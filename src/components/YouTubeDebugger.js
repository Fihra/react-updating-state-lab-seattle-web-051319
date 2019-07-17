// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state = {
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

    bitrateButton = () => {
        console.log("Change Settings Bitrate to 12");
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
        console.log(this.state.settings.bitrate)
    }

    resolutionButton = () => {
        console.log("Change video resolution to 720p");
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
        console.log(this.state.settings.video.resolution)
    }

    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.bitrateButton.bind(this)}>bitrate</button>
                <button className='resolution' onClick={this.resolutionButton.bind(this)}>resolution</button>
                {console.log("bitrate: ", this.state.settings.bitrate, " ", "video: ", this.state.settings.video.resolution)}
            </div>
            
        )
    }
}

export default YouTubeDebugger;