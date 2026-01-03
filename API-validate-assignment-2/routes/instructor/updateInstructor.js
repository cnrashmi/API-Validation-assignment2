const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { updateInstructorValidation } = require("../../validator/instructorValidator");


router.patch("/courses/:id/instructor/:iid", async (req, res) => {
  const conn = await dbConnect();
  try {
    const { instructor_role, instructor_bio, experience } = req.body;

    await conn.execute(
      "UPDATE instructor SET instructor_role=?, instructor_bio=?, experience=? WHERE id=?",
      [instructor_role, instructor_bio, experience, req.params.iid]
    );

    res.json({ success: true, message: "Instructor Updated!" });
  } catch (error) {
    res.status(500).json({ success: false,message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
