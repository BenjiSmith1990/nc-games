import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviewById } from "../apiCalls/apiCalls"

const SinlgeReview = ({isLoading}) => {
    const [singleReview, setSingleReview] = useState(null)

    const {review_id : id} = useParams()


    useEffect(() => {
        fetchReviewById(id).then(({review}) => {
            setSingleReview(review)
        })
    },[])
    return ( 
        <div className="list__items--style single-review">
            {isLoading && (<div><h1>Loading...</h1></div>)}

            {!isLoading && singleReview && (<section className="single-review">
                <h2>{singleReview[0].title}</h2>
                <img className="review-img" src={singleReview[0].review_img_url} alt={singleReview[0].title} />
                <h3 className="category">Category : {singleReview[0].category}</h3>
                <p className="review-body">{singleReview[0].review_body}</p>
                <h4 className="owner">Owner : {singleReview[0].owner}</h4>
                <h5 className=" designer">Designer : {singleReview[0].designer}</h5>
                <button className="votes">{singleReview[0].votes}</button>
            </section>)}
        </div>

        
     );
}
 
export default SinlgeReview;