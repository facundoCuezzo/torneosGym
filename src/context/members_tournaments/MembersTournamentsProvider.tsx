import { useState, type ReactNode } from "react";
import { MembersTournamentsContext } from "./MembersTournamentsContext";

const MembersTournamentsProvider = ({ children }: { children: ReactNode }) => {
  const [membersTournaments, setMembersTournaments] = useState<
    MembersTournaments[] | null
  >(null);
  const [membersNotInTournament, setMembersNotInTournament] = useState<
    FullMemberInfo[] | null
  >(null);

  const [selectedTournament, setSelectedTournament] = useState(0);

  return (
    <MembersTournamentsContext.Provider
      value={{
        membersTournaments,
        setMembersTournaments,
        membersNotInTournament,
        setMembersNotInTournament,
        selectedTournament,
        setSelectedTournament,
      }}
    >
      {children}
    </MembersTournamentsContext.Provider>
  );
};

export default MembersTournamentsProvider;
