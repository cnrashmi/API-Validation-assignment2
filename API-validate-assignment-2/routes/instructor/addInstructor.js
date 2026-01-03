const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { addInstructorValidation } = require("../../validator/instructorValidator");

router.post(
  "/courses/:id/instructor",
  addInstructorValidation,
  validate,
  async (req, res) => {
    const conn = await dbConnect();
    const { instructor_role, instructor_bio, experience } = req.body;

    try {
      await conn.execute(
        "INSERT INTO instructor (course_id, instructor_role, instructor_bio, experience) VALUES (?,?,?,?)",
        [req.params.id, instructor_role, instructor_bio, experience]
      );

      res.status(201).json({ success: true, message: "Instructor Added!" });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message
      });

    } finally {
      await conn.end(); 
    }
  }
);

module.exports = router;
