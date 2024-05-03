import express from "express";
import { getAllReviews, createReview} from "../Controllers/reviewController.js";
import {restrict, authenticate} from "../auth/verifyToken.js";

const router = express.Router({mergeParams : true});//allows us to access the params of the parent route


router.route('/').get(getAllReviews).post(authenticate,restrict(['patient']), createReview);
//restrict used so that only patients can post reviews

export default router;