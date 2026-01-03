const { body, param } = require("express-validator");

exports.validationRules = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 5 })
    .withMessage("Title must be at least 5 characters"),
  body("course_name").notEmpty().withMessage("Course name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("enroll_url")
    .notEmpty()
    .withMessage("Enroll URL is required")
    .isURL()
    .withMessage("Enroll URL must be valid"),
  body("contact_number").notEmpty().withMessage("Contact number is required"),
];

exports.validationIdRules = [
  param("id").isInt({ gt: 0 }).withMessage("Course ID must be > 0"),
];

