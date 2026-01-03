const router = require("express").Router();
const expresss = require("express");
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { validationRules } = require("../../validator/coursesValidator");

router.post("/courses", validationRules, validate, async (req, res) => {
  const { title, course_name, description, enroll_url, contact_number } =
    req.body;
    try{
      const conn = await dbConnect();
      const[result]= await conn.query( "INSERT INTO courses (title, course_name, description, enroll_url, contact_number) VALUES (?,?,?,?,?)",
    [title, course_name, description, enroll_url, contact_number]);
    res.status(201).json({success: true, message: "Course Added!"})
    }catch(error){
      res.status(500).json({success: false, message:"internal server error"});
    }
  }) ;

module.exports = router;
