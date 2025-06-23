import { useState } from "react";
import {
  login,
  getUsers,
  createUser,
  deleteUser,
} from "../helpers/userQueries";
import { toast } from "sonner";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const handleLogin = async (
    data: LoginFormData
  ): Promise<LoginResponse | undefined> => {
    setLoading(true);
    try {
      const res = await login(data);
      return res;
    } catch (err) {
      toast.error((err as ErrorResponse).error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await getUsers();
      setUsers(res.users);
    } catch (err) {
      const error =
        err instanceof Error ? err.message : "Error al obtener usuarios";
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (
    data: CreateUserData
  ): Promise<CreateUserResponse | undefined> => {
    setLoading(true);
    try {
      const res = await createUser(data);
      return res;
    } catch (err) {
      const error =
        err instanceof Error ? err.message : "Error al crear usuario";
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (): Promise<
    { message: string } | undefined
  > => {
    setLoading(true);
    try {
      const res = await deleteUser();
      return res;
    } catch (err) {
      const error =
        err instanceof Error ? err.message : "Error al eliminar usuario";
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    users,
    handleLogin,
    fetchUsers,
    handleCreateUser,
    handleDeleteUser,
  };
};
