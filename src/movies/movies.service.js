const knex = require("../db/connection");

async function list() {
    return knex("movies").select("*");
}

async function listMoviesShowing() {
    return knex("movies_theaters").select("movie_id").where({ is_showing: true });
}

async function findMovie(movieId) {
    return knex("movies").select("*").where({ movie_id: movieId })
}

async function findTheatersShowingMovie(movieId) {
    return knex("movies_theaters as mt")
        .join("theaters as t", "mt.theater_id", "t.theater_id")
        .select("mt.*", "t.*")
        .where({ movie_id: movieId})
}

async function findReviewsForMovie(movieId) {
    return knex("reviews as r")
        .join("critics as c", "r.critic_id", "c.critic_id")
        .select("r.*", "c.*")
        .where({ movie_id: movieId })
}



module.exports = {
    list,
    listMoviesShowing,
    findMovie,
    findTheatersShowingMovie,
    findReviewsForMovie,
}