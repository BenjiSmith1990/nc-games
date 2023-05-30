import { useEffect } from "react";
import { fetchReviews } from "../apiCalls/apiCalls";

const Reviews = ({reviews, setReviews}) => {

    useEffect(() => {
        fetchReviews().then(({reviews}) => {
            setReviews(reviews)
        })
    }, [])

    return ( 
        <section className="list__items">
                <ul>
                    {reviews.map(({review_id, review_img_url, title, category, owner}) => {
                        return <li key={review_id} className="list__items--style">
                            <img src={review_img_url} alt={title} />
                            <div>

                            <h2>{title}</h2>
                            <p>Categry : {category}</p>
                            <p>Owner : {owner}</p>
                            <button onClick={() => {clickHandler(review_id)}}>More Info</button>
                            </div>
                        </li>
                    })}
                </ul>
        </section>
     );
}
 
export default Reviews;