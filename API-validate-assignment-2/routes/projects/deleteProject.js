const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { updateProjectValidation } = require("../../validator/projectValidator");

router.delete("/courses/:id/projects/:pid", async (req, res) => {
  const conn = await dbConnect();
  const { id, pid } = req.params;

  try {
    const [result] = await conn.execute(
      "DELETE FROM projects WHERE id = ? AND course_id = ?",
      [pid, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({success: false,message: "Project not found for this course"
      });
    }

    res.json({success: true,message: "Project Deleted!"
    });
  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error",
      error: error.message
    });
  } 
    await conn.end();
  
});
module.exports = router;