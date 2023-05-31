import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByReviewId } from "../apiCalls/apiCalls";

const Comments = () => {
    const {review_id : id} = useParams()
    const [comments, setComments] = useState([])
    const [isCommentsLoading, setIsCommentsLoading] = useState(true)

    useEffect(() => {
        fetchCommentsByReviewId(id).then(({comments}) => {
            setComments(comments)
            setIsCommentsLoading(false)
        })
    },[])

    return ( 
        <div>

            {comments.length > 0 ? ( <section className="comments">
            <h4 className="comment-header">Comments</h4>
            <ul >
            {comments.map(({author, body, comment_id, created_at, review_id, votes}) => {
                return <li key={comment_id}>
                    <div className="comment-info" >
                        <p className="author-comment">{author} said :</p>
                        <p>on : {created_at.slice(0,10)}</p>
                    </div>
                        <div className="comment-body">
                            <p>{body}</p>
                            <button id="comment-btn">{votes}</button>
                        </div>
                    </li>
            })}
            </ul>
            </section>) : <div><h3 className="no-comments-yet">Be the first to Comment...</h3></div>}
        </div>
       
     );
}
 
export default Comments;