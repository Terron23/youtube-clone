import React from 'react';
import YoutubePlayer from 'react-youtube-player'
import XSS from 'xss';

const VideoDetail = ({video}) =>{
    //const video = props.video
    //const onVideoSelect = props.onVideoSelect
    if(!video){
        return(<div>Loading...</div>)
    }
    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;
return(
<div className="video-details col-md-8">
{/* <div className="embed-responsive embed-responsive16by9"> */}
<div width="80%" height="600px">
<iframe width="80%" height="600px" className="embed-responsive-item" src={url}></iframe>
</div>
<div className="details">
<div>{video.snippet.title}</div>
    <div>{video.snippet.description}</div>
    
</div>
    </div>

)
}


export default VideoDetail