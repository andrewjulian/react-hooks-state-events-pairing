import React from 'react'

function VideoVotes({votes, icon, updateCount}) {
  return (
    <div>
        <button onClick={updateCount}> 
            {votes} 
            {icon} 
        </button>
    </div>
  )
}

export default VideoVotes