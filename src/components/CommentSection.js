import React, {useState} from 'react'
import Comment from './Comment.js'


function CommentSection({comments}) {

    const [showComment, setShowComment] = useState(true)



    function hideComments(){
        setShowComment(showComment ? false: true)
        return 
    }

    return (
        <div>
            <button onClick={hideComments}> 
                Hide Comments
            </button>
            <hr />
            <Comment comments={comments} showComment={showComment} />
        </div>
        )
}

export default CommentSection


