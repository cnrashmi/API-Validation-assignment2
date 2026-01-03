const { body, param } = require("express-validator");

exports.addCurriculumValidation = [
  param("id")
    .notEmpty()
    .withMessage("Course ID is required")
    .isInt({ gt: 0 })
    .withMessage("Course ID must be a positive integer"),

  body("section")
    .notEmpty()
    .withMessage("Section name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Section must be 3 to 100 characters"),

  body("topic")
    .notEmpty()
    .withMessage("Topic name is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Topic must be 3 to 200 characters"),
];

exports.getCurriculumByIdValidation = [
  param("id")
    .notEmpty()
    .withMessage("Curriculum ID is required")
    .isInt({ gt: 0 })
    .withMessage("Curriculum ID must be a positive integer"),
];
exports.updateCurriculum = [
 param("courseId")
    .notEmpty().withMessage("Course ID is required")
    .isInt().withMessage("Course ID must be a number"),

  param("curriculumId")
    .notEmpty().withMessage("Curriculum ID is required")
    .isInt().withMessage("Curriculum ID must be a number"),

  body("topic")
    .notEmpty().withMessage("title is required")
    .isLength({ min: 2 }).withMessage("Course name must be at least 2 characters")
    
];
exports.deleteCurriculumByIdValidation = [
 param("courseId")
    .notEmpty().withMessage("Course ID is required")
    .isInt().withMessage("Course ID must be a number"),

  param("curriculumId")
    .notEmpty().withMessage("Curriculum ID is required")
    .isInt().withMessage("Curriculum ID must be a number"),
]