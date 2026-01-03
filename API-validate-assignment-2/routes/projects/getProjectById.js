const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { validationIdRules } = require("../../validator/projectValidator");

router.get("/courses/:id/projects", async (req, res) => {
  try {
    const conn = await dbConnect();

    const [rows] = await conn.execute(
      "SELECT * FROM projects",
      [req.params.id]
    );

    res.status(200).json({
      success: true,
      data: rows,
    });

  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error",
      error: error.message,
    });
  }
});



module.exports = router;