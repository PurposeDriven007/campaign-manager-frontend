import { api } from "./interceptor";

export async function login(payload: any) {
  return api.post("/login", payload);
}
