import { getRequest } from "./default.service"

export const fetchData = async (endpoint: string) => {
  const response = await getRequest(`${process.env.NEXT_PUBLIC_BREACH_API_BASE_URL}${endpoint}`);
  const data = await response.json();
  return data;
}