const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { updateFeatureValidation } = require("../../validator/featuresValidator");

router.patch(
  "/courses/:courseId/features/:featuresid",
  updateFeatureValidation,
  validate,
  async (req, res) => {

    const conn = await dbConnect();

    const { courseId, featuresid } = req.params;
    const { feature_title, feature_description, icon } = req.body;

    try {
      await conn.execute(
        "UPDATE features SET feature_title = ?, feature_description = ?, icon = ? WHERE id = ?",
        [feature_title, feature_description, icon, featuresid]
      );

      res.json({
        success: true,
        message: "Feature Updated!"
      });

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
