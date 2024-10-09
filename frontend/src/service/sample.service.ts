import { useQuery } from "@tanstack/react-query";
import { api, BASE_URL } from "../api";

export const useGetData = () => {
  const { data } = useQuery({
    queryKey: ["sample-data"],
    queryFn: () => api.get(BASE_URL),
  });
  return {
    data: data?.data,
  };
};
