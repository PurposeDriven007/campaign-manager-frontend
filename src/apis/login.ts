// import { api } from "./interceptor";

const mockData = {
  data: {
    isAuthenticated: true,
    accountType: "advertiser",
    role: "admin",
    name: "Biswarup Bouri",
    userId: "1",
    email: "biswarup.bouri@verse.in",
    permissions: {
      users: {
        canRead: true,
        canUpdate: true,
      },
      campaigns: {
        canRead: true,
        canUpdate: true,
      },
      advertisers: {
        canRead: true,
        canUpdate: true,
      },
    },
  },
};

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
  // return api.post("/login", payload);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
}
