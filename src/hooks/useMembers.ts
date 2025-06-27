import { useEffect } from "react";
import useMembersContext from "./useMembersContext";
import useUsers from "./useUsers";
import { getMembersByGym } from "../helpers/membersQueries";
import { toast } from "sonner";

const useMembers = () => {
  const { members, setMembers } = useMembersContext();
  const { user } = useUsers();

  useEffect(() => {
    if (user) {;
      getMembersByGym(user.userId)
        .then((res) => setMembers(res.members))
        .catch((err) => {
          const error = err as ErrorResponse;
          toast.error(error.error);
        });
    }
  }, [user, setMembers]);

  return { members, setMembers };
};

export default useMembers;
