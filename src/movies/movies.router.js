const router = require("express").Router();
const controller = require("./movies.controller");

router.route("/").get(controller.list);

router.route("/:movieId").get(controller.findMovie);

router.route("/:movieId/theaters").get(controller.findTheatersShowingMovie);

router.route("/:movieId/reviews").get(controller.findReviewsForMovie);

module.exports = router;