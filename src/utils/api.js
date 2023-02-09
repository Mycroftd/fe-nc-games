import axios from "axios";

const myApi = axios.create({
  baseURL: "https://be-nc-games-t92d.onrender.com/api",
});

export const getReviews = (category, sort_by, order) => {
  return myApi
      .get("/reviews", {
          params: {
              category,
              sort_by,
              order
          }
      })
      .then((res) => {
          return res.data.reviews;
      });
};

export const getSingleReview = (review_id) => {
  return myApi.get("/reviews/" + review_id).then((res) => {
    return res.data.review;
  });
};

export const getComments = (review_id) => {
  return myApi.get(`reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchReviewVote = (review_id) => {
  return myApi
    .patch(`reviews/${review_id}`, {
      inc_votes: 1,
    })
    .then((res) => {
      return res.data.review;
    });
};

export const postReview = (review_id, username, body) => {
  return myApi
    .post(`reviews/${review_id}/comments`, {
      username,
      body,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const getCategories = () => {
  return myApi.get("categories").then((res) => {
    return res.data.categories;
  });
};


export const getUsers = () =>{
  return myApi.get("users").then((res)=>{
    return res.data.users;
  })
}