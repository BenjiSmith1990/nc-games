import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Reviews = ({reviews}) => {

    const user = useContext(UserContext)
    console.log(user)
 

    return ( 
        <section className="list__items">
                <ul>
                    {reviews.map(({review_id, review_img_url, title, category, owner}) => {
                        return <li key={review_id} className="list__items--style">
                            <img src={review_img_url} alt={title} />
                            <div className="list__items--content">
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