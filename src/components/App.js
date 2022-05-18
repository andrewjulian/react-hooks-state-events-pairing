import React, {useState} from "react";
import video from "../data/video.js";
import VideoData from "./VideoData.js";
import CommentSection from "./CommentSection.js";

function App() {
  //console.log("Here's your data:", video);

  const {upvotes, downvotes, comments} = video;

  const[upvotecount, setUpVoteCount] = useState(upvotes)
  const[downvotecount, setDownVoteCount] = useState(downvotes)

  function handleUpVote() {
    setUpVoteCount(upvotecount + 1)
  }

  function handleDownVote(){
    setDownVoteCount(downvotecount + 1)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

      <VideoData video={video} upvotecount={upvotecount} downvotecount={downvotecount} handleUpVote={handleUpVote} handleDownVote={handleDownVote} />
      <br />
      <CommentSection comments={comments} />

    </div>
  );
}

export default App;
