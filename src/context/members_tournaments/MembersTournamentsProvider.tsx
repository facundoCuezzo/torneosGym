import { useState, type ReactNode } from "react";
import { MembersTournamentsContext } from "./MembersTournamentsContext";

const MembersTournamentsProvider = ({ children }: { children: ReactNode }) => {
  const [membersTournaments, setMembersTournaments] = useState<
    MembersTournaments[] | null
  >(null);
  const [membersNotInTournament, setMembersNotInTournament] = useState<
    FullMemberInfo[] | null
  >(null);

  return (
    <MembersTournamentsContext.Provider
      value={{
        membersTournaments,
        setMembersTournaments,
        membersNotInTournament,
        setMembersNotInTournament,
      }}
    >
      {children}
    </MembersTournamentsContext.Provider>
  );
};

export default MembersTournamentsProvider;
