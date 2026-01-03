const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const curriculumValidator = require("../../validator/curriculumValidator");


router.delete("/courses/:courseId/curriculum/:curriculumId",
  curriculumValidator.deleteCurriculumByIdValidation,validate,
   async (req, res) => {
    const {courseId,curriculumId}=req.params;

  try {
    
    const conn = await dbConnect();

    await conn.execute(
      "DELETE FROM curriculum WHERE id = ? AND course_id=?  ",
      [courseId,curriculumId]
    );

    res.status(200).json({
      success: true,
      message: "Curriculum Deleted!",
    });

  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
