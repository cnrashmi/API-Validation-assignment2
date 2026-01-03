const router = require("express").Router();
const dbConnect = require("../../database/db");

router.patch("/courses/:id", async (req, res) => {
  try {
    const connection = await dbConnect();
    const id = req.params.id;

    if (req.body.title) {
      await connection.execute(
        "UPDATE courses SET title=? WHERE id=?",
        [req.body.title, id]
      );
    }

    if (req.body.course_name) {
      await connection.execute(
        "UPDATE courses SET course_name=? WHERE id=?",
        [req.body.course_name, id]
      );
    }

    if (req.body.description) {
      await connection.execute(
        "UPDATE courses SET description=? WHERE id=?",
        [req.body.description, id]
      );
    }

    if (req.body.enroll_url) {
      await connection.execute(
        "UPDATE courses SET enroll_url=? WHERE id=?",
        [req.body.enroll_url, id]
      );
    }

    if (req.body.contact_number) {
      await connection.execute(
        "UPDATE courses SET contact_number=? WHERE id=?",
        [req.body.contact_number, id]
      );
    }

    res.status(200).json({
      success: true,
      message: "Course updated!",
    });

  } catch (error) {
    res.status(500).json({success: false,message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
