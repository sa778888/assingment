import express from "express";
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile } from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";
const router= express.Router();


//nested route for review of doctors
router.use("/:doctorId/reviews",reviewRouter);

//normal routes for fetching and updating 
router.get('/:id',getSingleDoctor);
router.get('/',getAllDoctor);
router.put('/:id',authenticate,restrict(['doctor']),updateDoctor);
router.delete('/:id',authenticate,restrict(['doctor']),deleteDoctor);

router.get("/profile/me",authenticate, restrict(['doctor']),getDoctorProfile);

export default router;