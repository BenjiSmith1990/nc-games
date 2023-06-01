import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Reviews = ({reviews, isLoading}) => {
    const user = useContext(UserContext)
    return ( 
        <div>
            {isLoading && (<div><h2>Loading...</h2></div>)}
            {!isLoading && (<section className="list__items">
            <ul>
                {reviews.map(({review_id, review_img_url, title, category, owner}) => {
                    return <li key={review_id} className="list__items--style">
                        <img src={review_img_url} alt={title} />
                        <div className="list__items--content">
                        <h2 >{title}</h2>
                        <p>Categry : {category}</p>
                        <p>Owner : {owner}</p>
                        <Link to={`/reviews/${review_id}`}>More Info</Link>
                        </div>
                    </li>
                })}
            </ul>
    </section>)}
        </div>
        
     );
}
 
export default Reviews;