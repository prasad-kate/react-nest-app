import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../api";
import { UpdateUser } from "../types";

export const useGetUsers = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.get("users"),
  });
  return {
    users: data?.data,
  };
};

export const useUpdateUser = ({ userId }: { userId: string }) => {
  const { mutate } = useMutation({
    mutationFn: (updateUserData: UpdateUser) =>
      api.patch(`users/${userId}`, {
        ...updateUserData,
      }),
  });

  return {
    updateUser: mutate,
  };
};
