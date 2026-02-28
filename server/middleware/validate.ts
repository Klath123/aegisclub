import { body, validationResult } from "express-validator";
import type { Request, Response, NextFunction, RequestHandler } from "express";
import { EVENT_MAP } from "../config/events.ts";

// ── Final handler: extracts and returns validation errors ────────────────
const handleValidationErrors: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((e) => ({
        field: "path" in e ? e.path : "unknown",
        message: e.msg,
      })),
    });
    return;
  }
  next();
};

// ── Main registration validator chain ────────────────────────────────────
export const validateRegistration: RequestHandler[] = [
  body("eventId")
    .notEmpty().withMessage("Event ID is required")
    .custom((id: string) => {
      const event = EVENT_MAP[id as keyof typeof EVENT_MAP];
      if (!event)        throw new Error("Invalid event ID");
      if (event.closed)  throw new Error("Registration for this event is closed");
      return true;
    }),

  body("phoneNumber")
    .matches(/^\d{10}$/)
    .withMessage("Phone number must be exactly 10 digits"),

  body("department")
    .notEmpty().trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Department is required (2–100 chars)"),

  body("yearOfStudy")
    .isInt({ min: 1, max: 4 })
    .withMessage("Year of study must be between 1 and 4"),

  body("teamName").optional().trim().isLength({ max: 100 }),

  body("participants")
    .isArray({ min: 1, max: 5 })
    .withMessage("Participants must be an array of 1–5 members"),

  body("participants.*.fullName")
    .notEmpty().trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Each participant must have a full name"),

  body("participants.*.usn")
    .notEmpty().trim().toUpperCase()
    .isLength({ min: 3, max: 20 })
    .withMessage("Each participant must have a valid USN"),

  body("participants.*.email")
    .notEmpty().trim()
    .isEmail().normalizeEmail()
    .withMessage("Each participant must have a valid email address"),

  handleValidationErrors,
];