import React, { createContext } from "react";

type MembersContextType = {
  members: FullMemberInfo[] | null;
  setMembers: React.Dispatch<React.SetStateAction<FullMemberInfo[] | null>>;
};

export const MembersContext = createContext<MembersContextType | undefined>(undefined);