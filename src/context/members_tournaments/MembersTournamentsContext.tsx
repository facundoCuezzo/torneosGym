import React, { createContext } from "react";

type MembersTournamentsContextType = {
  membersTournaments: MembersTournaments[] | null;
  setMembersTournaments: React.Dispatch<React.SetStateAction<MembersTournaments[] | null>>;
  membersNotInTournament: FullMemberInfo[] | null;
  setMembersNotInTournament: React.Dispatch<React.SetStateAction<FullMemberInfo[] | null>>;
};

export const MembersTournamentsContext = createContext<MembersTournamentsContextType | undefined>(undefined);