const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { addFeatureValidation } = require("../../validator/featuresValidator");

router.post("/courses/:id/features", addFeatureValidation, validate, async (req, res) => {
  const conn = await dbConnect();
  try {
    const { feature_title, feature_description, icon } = req.body;

    await conn.execute(
      "INSERT INTO features (course_id, feature_title, feature_description, icon) VALUES (?,?,?,?)",
      [req.params.id, feature_title, feature_description, icon]
    );

    res.json({ success: true, message: "Feature Added!" });
  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
