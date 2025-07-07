import { type ReactNode } from "react";
import MembersProvider from "../context/members/MembersProvider";
import TournamentsProvider from "../context/tournaments/TournamentsProvider";
import MembersTournamentsProvider from "../context/members_tournaments/MembersTournamentsProvider";
import ScoresProvider from "../context/scores/ScoresProvider";
import { UserProvider } from "../context/user/UserProvider";

interface Props {
  children: ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <UserProvider>
      <MembersProvider>
        <TournamentsProvider>
          <MembersTournamentsProvider>
            <ScoresProvider>{children}</ScoresProvider>
          </MembersTournamentsProvider>
        </TournamentsProvider>
      </MembersProvider>
    </UserProvider>
  );
};

export default Providers;
