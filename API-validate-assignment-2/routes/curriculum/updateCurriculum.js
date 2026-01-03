const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const curriculumValidator = require("../../validator/curriculumValidator");

router.patch("/courses/:courseId/curriculum/:curriculumId",
  curriculumValidator.updateCurriculum,validate,
   async (req, res) => {
    const {courseid,curriculumId}=req.params;
    const {section,topic}=req.body;
  try {
    const conn = await dbConnect();
    const [result]=await conn.query( "UPDATE curriculum SET section=?, topic=? WHERE id=?",
      [section, topic, req.params.curriculumId]);
  
    res.status(200).json({
      success: true,
      message: "Curriculum Updated!",
    });

  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
