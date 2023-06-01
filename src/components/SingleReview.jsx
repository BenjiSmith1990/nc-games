import {  useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchReviewById, patchReviedVote } from "../apiCalls/apiCalls"
import Comments from "./Comments"
import { UserContext } from "../context/UserContext";


const SinlgeReview = () => {
    const {isLoggedIn} = useContext(UserContext)
    const [singleReview, setSingleReview] = useState(null)
    const [isReviewLoading, setIsReviewLoading] = useState(true)
    const {review_id : id} = useParams()
    const [votes, setVotes] = useState(null)
    const [voteErr, setVoteErr] = useState(false)
    const [hasVoted, setHasVoted] = useState(false)


    useEffect(() => {
        fetchReviewById(id).then(({review}) => {
            setSingleReview(review)
            setVotes(review[0].votes)
            setIsReviewLoading(false)
        })
    },[])

    function handleClick(val){
        setVotes((currVotes) => (currVotes + val))
        setVoteErr(false)
        setHasVoted(true)
        patchReviedVote(id, val).catch(()=>{
            if(val < 0) setVotes((currVotes) => (currVotes + 1))
            else setVotes(currVotes => currVotes -1)
            setVoteErr(true)
            setHasVoted(false)

        })
    }

    return ( 
        <div className="list__items--style single-review">
            {isReviewLoading && (<div><h2>Loading...</h2></div>)}

            {!isReviewLoading && singleReview && (
            <section className="single-review">
                <h2>{singleReview[0].title}</h2>
                <img className="review-img" src={singleReview[0].review_img_url} alt={singleReview[0].title} />
                <h3 className="category">Category : {singleReview[0].category}</h3>
                <p className="review-body">{singleReview[0].review_body}</p>
                <h4 className="owner">Owner : {singleReview[0].owner}</h4>
                <h5 className=" designer">Designer : {singleReview[0].designer}</h5>
                <div className="vote-section">
                    <button id="vote-btn-down" onClick={() => {handleClick(-1)}} disabled={hasVoted}><i className="arrow down"></i></button>
                    <p>{votes}</p>
                    <button id="vote-btn-up" onClick={()=> {handleClick(1)}} disabled={hasVoted}><i className="arrow up"></i></button>
                </div>
                {voteErr && <h4 className="error-msg">Server Error, Please try again!</h4>}
                <Comments/>
            </section>
            )}
        </div>

        
     );
}
 
export default SinlgeReview;