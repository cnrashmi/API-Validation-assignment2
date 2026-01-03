const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { updateInstructorValidation } = require("../../validator/instructorValidator");


router.get("/courses/:id/instructor", async (req, res) => {
  const conn = await dbConnect();
  try {
    const [rows] = await conn.execute(
    "SELECT * FROM instructor WHERE course_id=?",
      [req.params.id]
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({success: false, message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
