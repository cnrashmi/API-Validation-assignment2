const router = require("express").Router();
const dbConnect = require("../../database/db");

router.get("/courses", async (req, res) => {
  const conn = await dbConnect();
  try {
    const [rows] = await conn.execute("SELECT * FROM courses");
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
