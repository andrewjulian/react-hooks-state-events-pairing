import React from "react";
import VideoVotes from "./VideoVotes"

function VideoData({ video, handleUpVote, handleDownVote, upvotecount, downvotecount }) {

    const upVoteIcon = "👍"
    const downVoteIcon= "👎"

    const { title, views, createdAt } = video

    return (
        <>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded: {createdAt} </p>
            <VideoVotes votes={upvotecount} icon={upVoteIcon} updateCount={handleUpVote} />
            <VideoVotes votes={downvotecount} icon={downVoteIcon} updateCount={handleDownVote} />
        </>
    )
}

export default VideoData;