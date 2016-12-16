import _ from 'lodash';
import React, { Component } from 'react'; // create and manage our components
import ReactDOM from 'react-dom'; // interact with dom
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCUbuCvj1zrAaAdS3iu45IDFgU79uewSmM';

// Create a class based component.
// This component should produce some HTML
class App extends Component {

  // data changing over time => state
  // whenever a user enters a new search input
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // some parent objects can not fetch information fast enough to
  // satisfy the needs of a child object!

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
    // passing data = passing "props"
    // So anytime the app renders, VideoList should get a new list of videos
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
