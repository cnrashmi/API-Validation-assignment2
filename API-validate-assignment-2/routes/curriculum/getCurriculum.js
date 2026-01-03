const router = require("express").Router();
const dbConnect = require("../../database/db");

router.get("/courses/:id/curriculum", async (req, res) => {
  try {
    const conn = await dbConnect();

    const [rows] = await conn.execute(
      "SELECT * FROM curriculum WHERE course_id = ?",
      [req.params.id]
    );

    res.status(200).json({success: true,data: rows,
    });

  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error",
      error: error.message,
    });
  }
});



  


module.exports = router;
