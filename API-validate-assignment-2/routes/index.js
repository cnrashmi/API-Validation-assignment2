const router = require("express").Router();

router.use(require("./courses/addCourse"));
router.use(require("./courses/getAllCourses"));
router.use(require("./courses/getCourseById")); 
router.use(require("./courses/updateCourse"));
router.use(require("./courses/deleteCourse"));

router.use(require("./features/addFeature"));
router.use(require("./features/updateFeature"));
router.use(require("./features/deleteFeature"));
router.use(require("./features/getFeature"));

router.use(require("./curriculum/addCurriculum"));
router.use(require("./curriculum/updateCurriculum"));
router.use(require("./curriculum/deleteCurriculum"));
router.use(require("./curriculum/getCurriculum"));

router.use(require("./instructor/addInstructor"));
router.use(require("./instructor/updateInstructor"));
router.use(require("./instructor/deleteInstructor"));
router.use(require("./instructor/getInstructor"));

router.use(require("./projects/addProject"));
router.use(require("./projects/getProjectById"));
router.use(require("./projects/updateProject"));
router.use(require("./projects/deleteProject"));


module.exports = router;
