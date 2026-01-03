const { body, param } = require("express-validator");

exports.addInstructorValidation = [
  param("id")
    .notEmpty()
    .withMessage("Course ID is required")
    .isInt({ gt: 0 })
    .withMessage("Course ID must be a positive integer"),

  body("instructor_role")
    .notEmpty()
    .withMessage("Instructor role is required")
    .isLength({ min: 3, max: 120 })
    .withMessage("Role must be 3 to 120 characters"),

  body("instructor_bio")
    .notEmpty()
    .withMessage("Instructor bio is required")
    .isLength({ min: 5 })
    .withMessage("Bio must be at least 5 characters"),

  body("experience")
    .notEmpty()
    .withMessage("Experience is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Experience must be 2 to 100 characters"),
];

exports.getInstructorByIdValidation = [
  param("id")
    .notEmpty()
    .withMessage("Instructor ID is required")
    .isInt({ gt: 0 })
    .withMessage("Instructor ID must be a positive integer"),
];
exports.updateInstructorValidation = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("Course ID must be a positive integer"),

  param("iid")
    .isInt({ gt: 0 })
    .withMessage("Instructor ID must be a positive integer"),

  body("instructor_role")
    .notEmpty()
    .withMessage("Instructor role is required")
    .isLength({ min: 3, max: 120 }),

  body("instructor_bio")
    .notEmpty()
    .withMessage("Instructor bio is required")
    .isLength({ min: 5 }),

  body("experience")
    .notEmpty()
    .withMessage("Experience is required"),
];
exports.deleteInstructorValidation = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("Course ID must be a positive integer"),

  param("iid")
    .isInt({ gt: 0 })
    .withMessage("Instructor ID must be a positive integer"),
];
