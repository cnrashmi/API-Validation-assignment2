const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { updateInstructorValidation } = require("../../validator/instructorValidator");


router.delete("/courses/:id/instructor/:iid", async (req, res) => {
  const conn = await dbConnect();
  try {
    await conn.execute("DELETE FROM instructor WHERE id=?", [req.params.iid]);
    res.json({ success: true, message: "Instructor Deleted!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
