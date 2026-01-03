const expresss = require("express");
const router = expresss.Router();
const createDatabaseConnection = require("../db");
const validateMiddleware = require("../middleware/validate");
const courseValidator = require("../validator/course");

router.get(
    '/',
    async (req, res)=>{
        try{
            const connection = await createDatabaseConnection();
             const [results] = await connection.query(
      "SELECT * FROM `courses`"
    );
    res.status(200).json({
          success: true,
          message: "Getting list of courses",
          data: results,
        });
        }catch (error){
res.status(500).json({
        sucess: false,
        message: "internal server error",
        error: error.message,
      });
        }
    })

router.post(
  "/",
  courseValidator.createCourse,
  validateMiddleware,
  async (req, res) => {
    const { title, course_name, description, enroll_url, contact_number } = req.body;

    try {
      const connection = await createDatabaseConnection();

      const [result] = await connection.query(
        "INSERT INTO courses (title, course_name, description, enroll_url, contact_number) VALUES (?,?,?,?,?)",
        [title, course_name, description, enroll_url, contact_number]
      );

      res.status(201).json({
        success: true,
        message: "Course created successfully!",
        insertedId: result.insertId,
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }
);

router.patch(
  '/:id',
  courseValidator.updateCourseName,
  validateMiddleware,
  async (req, res) =>{
      const courseId = req.params.id;
  const { course_name } = req.body;
  try{
    const connection =  await createDatabaseConnection();
    const[result] = await connection.query(
       "UPDATE courses SET course_name = ? WHERE id = ?",
      [course_name, courseId]
    );
    res.status(200).json({
        success: true,
        message: "Course updated successfully!",
      });

  }catch(error){
res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
  }
)
router.delete(
  '/:id',
  courseValidator.deleteCourse,
  validateMiddleware,
  async(req,res) =>{
      const courseId = req.params.id;
      try{
          const connection =  await createDatabaseConnection();
           const[result] = await connection.query(
       "DELETE FROM courses WHERE id = ?",
      [courseId]
    );
     res.status(200).json({
        success: true,
        message: "Course updated successfully!",
      });
      }
      catch(error){
        res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
      }
  }
)

module.exports = router;