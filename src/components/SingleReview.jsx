import {  useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchReviewById } from "../apiCalls/apiCalls"
import Comments from "./Comments"

const SinlgeReview = () => {
    const [singleReview, setSingleReview] = useState(null)
    const [isReviewLoading, setIsReviewLoading] = useState(true)
    const {review_id : id} = useParams()


    useEffect(() => {
        fetchReviewById(id).then(({review}) => {
            setSingleReview(review)
            setIsReviewLoading(false)
        })
    },[])
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
                <button className="votes">{singleReview[0].votes}</button>
                {/* <Link to={`/reviews/${id}/comments`}>Comments</Link> */}
                <Comments/>
            </section>
            )}
        </div>

        
     );
}
 
export default SinlgeReview;