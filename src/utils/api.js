import axios from "axios";

const myApi = axios.create({
    baseURL: "https://be-nc-games-t92d.onrender.com/api",
  });

  export const getReviews = () =>{
    return myApi.get('/reviews').then((res) =>{
        return res.data.reviews;
    })
  }


export const getSingleReview = (review_id) =>{
  return myApi.get('/reviews/'+review_id).then((res) =>{
      return res.data.review;
  })
}

