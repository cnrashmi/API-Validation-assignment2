const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { addFeatureValidation } = require("../../validator/featuresValidator");

router.delete("/courses/:id/features/:fid", async (req, res) => {
  const conn = await dbConnect();
  const { id: courseId, fid: featureId } = req.params;

  try {
   
    const [rows] = await conn.execute(
      "SELECT id FROM features WHERE id = ? AND course_id = ?",
      [featureId, courseId]
    );

    if (rows.length === 0) {
      return res.status(404).json({success: false,message: "Feature not found for this course"
      });
    }


    await conn.execute(
      "DELETE FROM features WHERE id = ?",
      [featureId]
    );

    res.json({success: true,message: "Feature Deleted!"
    });

  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error",
      error: error.message
    });
  } 
    await conn.end();
  
});

module.exports = router;
