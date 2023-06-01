import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../apiCalls/apiCalls";
import { UserContext } from "../context/UserContext";

const CreateComment = ({setComments}) => {
    const {username, isLoggedIn} = useContext(UserContext)
    const [formBody, setFormBody] = useState('')
    const [isPending, setIsPending] = useState(false)
    const [postErr, setPostErr] = useState(false)

    const {review_id : id} = useParams()

    const handleChange = (value) =>{
        setFormBody(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)
        const post = {username: username, body : formBody}
        addComment(id, post).then(({newPost}) => {
            setComments(currComments => [...currComments, newPost[0]])
            setIsPending(false)
            setFormBody('')
            setPostErr(false)
        }).catch(()=>{
           setPostErr(true)
        })
    }

    return ( 
        <section>
            <h2 className="post-header">Post A Comment : </h2>
            {
                postErr 
                ? <div><p className="error-msg">Server Error, Please refresh and try again</p></div> 
                : isPending 
                ? <div><p className="posting">Posting...</p></div> 
                : (!isLoggedIn 
                ? <div><h4>You must be signed in to comment</h4></div> 
                : <form onSubmit={handleSubmit}>
                <h4>posting as : {username}</h4>
                <label ><textarea placeholder="Write something..." id="form-body" rows="10" cols="30" onChange={(e) => handleChange(e.target.value)} value={formBody}></textarea></label>
                 <button>Post My Comment</button>  
                </form>)
            }
            
         
        </section>
     );
}
 
export default CreateComment;