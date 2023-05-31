import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
   
    const bool = useContext(UserContext)
    console.log(bool)

    return ( 
        <main>
            <p>This is the homepage</p>
        </main>
     );
}
 
export default Home;