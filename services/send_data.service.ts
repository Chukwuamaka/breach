import { postRequest } from "./default.service"

export const sendData = async (endpoint: string, data: object, token?: string) => {
  return postRequest(`${process.env.NEXT_PUBLIC_BREACH_API_BASE_URL}${endpoint}`, data, token);
}