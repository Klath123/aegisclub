import type { ApiResponse, RegistrationPayload, RegistrationSuccess } from "../types/api";
import type { EventConfig } from "../config/events";

const API_BASE: string = import.meta.env["VITE_API_URL"] as string ?? "http://localhost:5000/api";

async function request<T>(path: string, init: RequestInit = {}): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  return response.json() as Promise<ApiResponse<T>>;
}

export const api = {
  getEvents: (): Promise<ApiResponse<EventConfig[]>> =>
    request<EventConfig[]>("/events"),

  register: (payload: RegistrationPayload): Promise<ApiResponse<RegistrationSuccess>> =>
    request<RegistrationSuccess>("/register", {
      method: "POST",
      body:   JSON.stringify(payload),
    }),
} as const;