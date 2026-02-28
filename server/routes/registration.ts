import { Router, type Request, type Response } from "express";
import { Registration } from "../models/Registration.ts";
import { EVENT_MAP, EVENTS } from "../config/events.ts";
import { validateRegistration } from "../middleware/validate.ts";
import type {
  EventId,
  RegistrationPayload,
  ApiResponse,
  RegistrationSuccess,
  EventStats,
  PaginationMeta,
} from "../types/index.js";

export const registrationRouter: Router = Router();

// ── GET /api/events ────────────────────────────────────────────────────────
registrationRouter.get("/events", (_req: Request, res: Response): void => {
  res.json({ success: true, data: EVENTS } satisfies ApiResponse<typeof EVENTS>);
});

// ── POST /api/register ─────────────────────────────────────────────────────
registrationRouter.post(
  "/register",
  validateRegistration,
  async (req: Request<object, ApiResponse<RegistrationSuccess>, RegistrationPayload>, res: Response): Promise<void> => {
    try {
      const { eventId, participants, phoneNumber, department, yearOfStudy, teamName, participantCount } = req.body;
      const event = EVENT_MAP[eventId];

      // Duplicate checks before insert
      for (const p of participants) {
        if (await Registration.isUsnRegistered(eventId, p.usn)) {
          res.status(409).json({
            success: false,
            message: `USN ${p.usn} is already registered for ${event.name}`,
          });
          return;
        }
        if (await Registration.isEmailRegistered(eventId, p.email)) {
          res.status(409).json({
            success: false,
            message: `Email ${p.email} is already registered for ${event.name}`,
          });
          return;
        }
      }

      const registration = new Registration({
        eventId,
        eventName:        event.name,
        eventType:        event.type,
        participants,
        phoneNumber,
        department,
        yearOfStudy:      Number(yearOfStudy),
        teamName:         teamName ?? "",
        participantCount: participantCount ?? participants.length,
        ipAddress:        req.ip,
      });

      await registration.save();

      res.status(201).json({
        success: true,
        message: `Successfully registered for ${event.name}!`,
        data: {
          registrationId: (registration._id as unknown as string).toString(),
          eventName:      event.name,
          teamLeader:     registration.participants[0].fullName,
          registeredAt:   registration.registeredAt.toISOString(),
        },
      });
    } catch (err: unknown) {
      const mongoErr = err as { code?: number; keyValue?: Record<string, unknown> };
      if (mongoErr.code === 11000) {
        res.status(409).json({
          success: false,
          message: "A participant with this USN or email is already registered for this event.",
        });
        return;
      }
      console.error("Registration error:", err);
      res.status(500).json({ success: false, message: "Internal server error. Please try again." });
    }
  }
);

// ── GET /api/registrations/:eventId ───────────────────────────────────────
registrationRouter.get(
  "/registrations/:eventId",
  async (
    req: Request<{ eventId: EventId }, ApiResponse, object, { page?: string; limit?: string }>,
    res: Response
  ): Promise<void> => {
    try {
      const { eventId } = req.params;
      const page  = Math.max(1, Number(req.query.page  ?? 1));
      const limit = Math.min(100, Math.max(1, Number(req.query.limit ?? 50)));

      const [data, total] = await Promise.all([
        Registration.find({ eventId })
          .sort({ createdAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
          .select("-ipAddress -__v")
          .lean(),
        Registration.countDocuments({ eventId }),
      ]);

      const pagination: PaginationMeta = { total, page, limit };
      res.json({ success: true, data, pagination } as ApiResponse & { pagination: PaginationMeta });
    } catch (err: unknown) {
      const e = err as Error;
      res.status(500).json({ success: false, message: e.message });
    }
  }
);

// ── GET /api/stats ─────────────────────────────────────────────────────────
registrationRouter.get("/stats", async (_req: Request, res: Response): Promise<void> => {
  try {
    const stats: EventStats[] = await Registration.aggregate<EventStats>([
      {
        $group: {
          _id:                "$eventId",
          eventName:          { $first: "$eventName" },
          totalRegistrations: { $sum: 1 },
          totalParticipants:  { $sum: { $size: "$participants" } },
        },
      },
      { $sort: { totalRegistrations: -1 } },
    ]);
    res.json({ success: true, data: stats } satisfies ApiResponse<EventStats[]>);
  } catch (err: unknown) {
    const e = err as Error;
    res.status(500).json({ success: false, message: e.message });
  }
});