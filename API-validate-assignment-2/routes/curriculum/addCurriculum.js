const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { addCurriculumValidation } = require("../../validator/curriculumValidator");

router.post(
  "/courses/:id/curriculum",
  addCurriculumValidation,
  validate,
  async (req, res) => {
    try {
      const conn = await dbConnect();
      const { section, topic } = req.body;

      await conn.execute(
        "INSERT INTO curriculum (course_id, section, topic) VALUES (?,?,?)",
        [req.params.id, section, topic]
      );

      res.status(201).json({success: true,message: "Curriculum Added!",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }
);

module.exports = router;
