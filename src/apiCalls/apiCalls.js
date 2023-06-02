import axios from "axios";

const benNCGamesUrl = axios.create({
    baseURL : "https://ben-nc-games.onrender.com/api"
})

export const fetchReviews = () => {
    return benNCGamesUrl.get("/reviews").then((response) => {
        return response.data
    })
}

export const fetchReviewById = (id) => {
    return benNCGamesUrl.get(`/reviews/${id}`).then(({data}) => {
        return data
    })
}

export const fetchCommentsByReviewId = (id) => {
    return benNCGamesUrl.get(`/reviews/${id}/comments`).then(({data}) => {
        return data
    })
}

export const patchReviedVote = (id, val) => {
    return benNCGamesUrl.patch(`/reviews/${id}`, {inc_votes : val})
}

export const addComment = (id, formBody) => {
    return benNCGamesUrl.post(`/revies/${id}/comments`, formBody).then(({data}) => {
        return data
    })
}