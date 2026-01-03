const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { addProjectValidation } = require("../../validator/projectValidator");

router.post("/courses/:id/projects", addProjectValidation, validate, async (req, res) => {
  const conn = await dbConnect();
  const { project_title, project_description } = req.body;

  await conn.execute(
    "INSERT INTO projects (course_id, project_title, project_description) VALUES (?,?,?)",
    [req.params.id, project_title, project_description]
  );

  res.json({ success: true, message: "Project Added!" });
});

module.exports = router;
