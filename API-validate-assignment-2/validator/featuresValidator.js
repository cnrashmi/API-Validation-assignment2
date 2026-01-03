const { body, param } = require("express-validator");

exports.addFeatureValidation = [
  param("id")
    .notEmpty()
    .withMessage("Course ID is required")
    .isInt({ gt: 0 })
    .withMessage("Course ID must be a positive number"),

  body("feature_title")
    .notEmpty()
    .withMessage("Feature title is required")
    .isLength({ min: 3, max: 120 })
    .withMessage("Feature title must be 3 to 120 characters"),

  body("feature_description")
    .notEmpty()
    .withMessage("Feature description is required")
    .isLength({ min: 5 })
    .withMessage("Feature description must be at least 5 characters"),

  body("icon")
    .notEmpty()
    .withMessage("Icon name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Icon must be 2 to 50 characters"),
];

exports.getFeatureByIdValidation = [
  param("id")
    .notEmpty()
    .withMessage("Feature ID is required")
    .isInt({ gt: 0 })
    .withMessage("Feature ID must be a positive number"),
];

exports.updateFeatureValidation = [
  param("featuresid")
    .notEmpty()
    .withMessage("Feature ID is required")
    .isInt({ gt: 0 })
    .withMessage("Feature ID must be a positive number"),

  body("feature_title")
    .notEmpty()
    .withMessage("Feature title is required")
    .isLength({ min: 3, max: 120 })
    .withMessage("Feature title must be 3 to 120 characters"),

  body("feature_description")
    .notEmpty()
    .withMessage("Feature description is required")
    .isLength({ min: 5 })
    .withMessage("Feature description must be at least 5 characters"),

  body("icon")
    .notEmpty()
    .withMessage("Icon name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Icon must be 2 to 50 characters"),
];
exports.deleteFeatureValidation = [
  param("courseId")
    .notEmpty()
    .withMessage("Course ID is required")
    .isInt({ gt: 0 })
    .withMessage("Course ID must be a positive number"),

  param("featuresid")
    .notEmpty()
    .withMessage("Feature ID is required")
    .isInt({ gt: 0 })
    .withMessage("Feature ID must be a positive number"),
];
