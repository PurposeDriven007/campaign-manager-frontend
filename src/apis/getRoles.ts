// import { api } from "./interceptor";

// const mockRoles: Role[] = [
//   {
//     id: 1,
//     name: "Admin",
//   },
//   {
//     id: 3,
//     name: "Campaign Manager",
//   },
//   {
//     id: 4,
//     name: "Reporting",
//   },
// ];

// interface Role {
//   id: number;
//   name: string;
// }

// /**
//  * Thi function is used to get all roles
//  * @returns
//  */
// export async function getRoles() {
//   // return api.get<Role[]>("/roles");
//   // Mocking the API call
//   return mockRoles;
// }

import { api } from "./interceptor";

interface Role {
  id: number;
  name: string;
}

/**
 * This function is used to get all roles
 * @returns {Promise<Role[]>}
 */
export async function getRoles(): Promise<Role[]> {
  const response = await api.get<Role[]>("/roles");
  return response.data;
}
