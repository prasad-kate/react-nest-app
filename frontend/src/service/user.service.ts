import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../api";
import { UpdateUser, User } from "../types";

export const useGetUsers = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.get("users"),
  });
  return {
    users: data?.data,
  };
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (userData: User) => api.post("users", userData),
    onSuccess: () => {
      alert("User created successfully");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: () => {
      alert("Something went wrong. Please try again");
    },
  });

  return {
    createUser: mutate,
  };
};

export const useUpdateUser = ({ userId }: { userId: string }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (updateUserData: UpdateUser) =>
      api.patch(`users/${userId}`, {
        ...updateUserData,
      }),
    onSuccess: () => {
      alert("User updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: () => {
      alert("Something went wrong. Please try again");
    },
  });

  return {
    updateUser: mutate,
  };
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (userId: string) => api.delete(`users/${userId}`),
    onSuccess: () => {
      alert("User deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: () => {
      alert("Something went wrong. Please try again");
    },
  });

  return {
    deleteUser: mutate,
  };
};
