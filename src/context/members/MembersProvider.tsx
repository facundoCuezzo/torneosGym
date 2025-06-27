import { useState, type ReactNode } from "react";
import { MembersContext } from "./MembersContext";

const MembersProvider = ({ children }: { children: ReactNode }) => {
  const [members, setMembers] = useState<FullMemberInfo[] | null>(null);

  return (
    <MembersContext.Provider value={{ members, setMembers }}>
      {children}
    </MembersContext.Provider>
  );
};

export default MembersProvider;
