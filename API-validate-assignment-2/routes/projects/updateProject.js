const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { updateProjectValidation } = require("../../validator/projectValidator");

router.patch(
  "/courses/:id/projects/:pid",updateProjectValidation,validate,
  async (req, res) => {
    const conn = await dbConnect();
    const { id, pid } = req.params;
    const { project_title, project_description } = req.body;

    try {
      const [result] = await conn.execute(
        "UPDATE projects SET project_title = ?, project_description = ? WHERE id = ? AND course_id = ?",
        [project_title, project_description, pid, id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Project not found for this course",
        });
      }

      res.json({
        success: true,
        message: "Project Updated!",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    } finally {
      await conn.end();
    }
  }
);

module.exports = router;
