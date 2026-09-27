const express = require("express");

const Course = require("../models/Course");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

/* GET ALL COURSES - PUBLIC */

router.get("/", async (req, res) => {
  const { category, level, search, platform } = req.query;

  const filter = {};

  if (category) {
    filter.category = new RegExp(`^${category}$`, "i");
  }

  if (level) {
    filter.level = new RegExp(`^${level}$`, "i");
  }

  if (platform) {
    filter.platform = platform;
  }

  if (search) {
    const searchRegex = new RegExp(search, "i");

    filter.$or = [
      { title: searchRegex },
      { category: searchRegex },
      { platform: searchRegex },
      { instructor: searchRegex },
    ];
  }

  try {
    const courses = await Course.find(filter);

    res.json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* ADD COURSE - ADMIN ONLY */

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const course = await Course.create(req.body);

      res.status(201).json(course);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

/* GET SINGLE COURSE - PUBLIC */

router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* UPDATE COURSE - ADMIN ONLY */

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const updatedCourse =
        await Course.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      if (!updatedCourse) {
        return res.status(404).json({
          message: "Course not found",
        });
      }

      res.json(updatedCourse);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

/* DELETE COURSE - ADMIN ONLY */

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const deletedCourse =
        await Course.findByIdAndDelete(req.params.id);

      if (!deletedCourse) {
        return res.status(404).json({
          message: "Course not found",
        });
      }

      res.json({
        message: "Course deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;