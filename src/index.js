import _ from 'lodash'
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js'
import VideoDeatil from './components/video_detail';

const API_Key = 'AIzaSyCzOMmHt4vVHi53BrHObg7ny7VL5nMRrWk'


// YTSearch({key: API_Key, term: ''}, (data)=>{
//     console.log(data);
// })
class App extends Component{
    constructor(props){
    super(props);
this.state = {
    videos: [],
    selectedVideo: null
    
}
this.videoSearch('people are amazing')
}

videoSearch(term){
    YTSearch({key: API_Key, term: term}, (videos)=>{
        console.log(videos);
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        
        });
    })
    }
render(){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)

    }, 300)
    return (<div>
        <SearchBar onSearchChange={videoSearch}/>
        <VideoDeatil video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect={selectedVideo=> this.setState({selectedVideo})}
        videos={this.state.videos}
        />
        </div>)
}
}

ReactDom.render(<App />, document.querySelector(".container"))
