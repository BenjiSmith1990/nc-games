import axios from "axios";

const benNCGamesUrl = axios.create({
    baseURL : "https://ben-nc-games.onrender.com/api"
})

export const fetchReviews = () => {
    return benNCGamesUrl.get("/reviews").then((response) => {
        return response.data
    })
}