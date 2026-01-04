const router = require("express").Router();
const dbConnect = require("../../database/db");

router.get("/courses", async (req, res) => {
  
  try {
    const conn = await dbConnect();
   let results;
   if(req.query.title){
        [results] = await connection.query(
      "SELECT * FROM courses WHERE title LIKE ?",
     [`%${req.query.title}%`]
    );
    }
    else{
      [results] = await connection.query(
        "SELECT * FROM courses"
      );
    }
    res.status(200).json({
      success: true,
      message: "Getting list of courses",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "internal server error",
      error: error.message,
    });
  }
});
    

module.exports = router;




    