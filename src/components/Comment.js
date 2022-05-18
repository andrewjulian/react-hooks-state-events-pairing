import React from 'react'

function Comment({comments, showComment}) {
    
    let commentCards = [];

    if(showComment === true) {
        commentCards = comments.map((comment) => 
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
        )
    } else {
        commentCards = <p></p>
    }

    return (
    <div>
        {commentCards}
    </div>
  )
}

export default Comment