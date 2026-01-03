const router = require("express").Router();
const dbConnect = require("../../database/db");
const validate = require("../../middleware/validate");
const { validationIdRules } = require("../../validator/coursesValidator");

router.get("/courses/:id", validationIdRules, validate, async (req, res) => {
    const id = req.params.id;
    try{
       const conn = await dbConnect();
       const [rows] = await conn.execute("SELECT * FROM courses WHERE id = ?", [id]);
       if (!rows.length) {
    return res.status(404).json({ success: false, message: "Course Not Found!" });
    }
    res.status(200).json({ success: true, data: rows[0] });
  }catch(error){
    res.status(500).json({success: false, message:"internal server error"});
  }

  
});
module.exports = router;
