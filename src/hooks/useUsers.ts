import { useState } from "react";
import {
  login,
  getUsers,
  createUser,
  deleteUser,
  logout,
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
      toast.error((err as ErrorResponse).error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (data: RegisterFormData) => {
    setLoading(true);
    try {
      const res = await createUser(data);
      return res;
    } catch (err) {
      toast.error((err as ErrorResponse).error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    setLoading(true);
    try {
      const res = await deleteUser();
      toast.success(res.message);
    } catch (err) {
      toast.error((err as ErrorResponse).error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
  try {
    await logout();
    toast.success("Sesión cerrada");
  } catch (err) {
    toast.error("Error al cerrar sesión");
    console.error(err);
  }
};

  return {
    loading,
    users,
    handleLogin,
    handleLogout,
    fetchUsers,
    handleCreateUser,
    handleDeleteUser,
  };
};
