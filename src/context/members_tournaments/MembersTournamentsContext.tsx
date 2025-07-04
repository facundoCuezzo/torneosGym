import React, { createContext } from "react";

type MembersTournamentsContextType = {
  membersTournaments: MembersTournaments[] | null;
  setMembersTournaments: React.Dispatch<React.SetStateAction<MembersTournaments[] | null>>;
  membersNotInTournament: FullMemberInfo[] | null;
  setMembersNotInTournament: React.Dispatch<React.SetStateAction<FullMemberInfo[] | null>>;
  selectedTournament: number;
  setSelectedTournament: React.Dispatch<React.SetStateAction<number>>
};

export const MembersTournamentsContext = createContext<MembersTournamentsContextType | undefined>(undefined);