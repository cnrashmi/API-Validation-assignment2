const { body, param } = require("express-validator");

exports.addProjectValidation = [
  param("id")
    .notEmpty()
    .withMessage("Course ID is required")
    .isInt({ gt: 0 })
    .withMessage("Course ID must be a positive integer"),

  body("project_title")
    .notEmpty()
    .withMessage("Project title is required")
    .isLength({ min: 3, max: 150 })
    .withMessage("Project title must be 3a to 150 characters"),

  body("project_description")
    .notEmpty()
    .withMessage("Project description is required")
    .isLength({ min: 5 })
    .withMessage("Project description must be at least 5 characters"),
];

exports.getProjectByIdValidation = [
  param("id")
    .notEmpty()
    .withMessage("Project ID is required")
    .isInt({ gt: 0 })
    .withMessage("Project ID must be a positive integer"),
];

exports.updateProjectValidation = [
param("id")
    .notEmpty()
    .withMessage("Course ID is required")
    .isInt({ gt: 0 })
    .withMessage("Course ID must be a positive integer"),

  param("pid")
    .notEmpty()
    .withMessage("Project ID is required")
    .isInt({ gt: 0 })
    .withMessage("Project ID must be a positive integer"),

  body("project_title")
    .notEmpty()
    .withMessage("Project title is required")
    .isLength({ min: 3, max: 150 })
    .withMessage("Project title must be 3 to 150 characters"),

  body("project_description")
    .notEmpty()
    .withMessage("Project description is required")
    .isLength({ min: 5 })
    .withMessage("Project description must be at least 5 characters"),
];


exports.deleteProjectValidation = [
  param("id")
    .notEmpty()
    .withMessage("Course ID is required")
    .isInt({ gt: 0 })
    .withMessage("Course ID must be a positive integer"),

  param("pid")
    .notEmpty()
    .withMessage("Project ID is required")
    .isInt({ gt: 0 })
    .withMessage("Project ID must be a positive integer"),
];
