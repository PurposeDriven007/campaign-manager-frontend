import { api } from "./interceptor";

export async function login(payload: any): Promise<{
  data: {
    isAuthenticated: boolean;
    accountType: string;
    role: string;
    name: string;
    email: string;
    permissions: {
      users: {
        canRead: boolean;
        canUpdate: boolean;
      };
      campaigns: {
        canRead: boolean;
        canUpdate: boolean;
      };
      advertisers: {
        canRead: boolean;
        canUpdate: boolean;
      };
    };
  };
}> {
  return api.post("/login", payload);
}
