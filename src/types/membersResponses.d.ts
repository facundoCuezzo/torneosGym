interface FullMemberInfo {
  id: number;
  full_name: string;
  birth_date: string;
  age: number;
  category: string;
  gym: string;
  dni: number;
  level: string;
}
interface CreateMember {
  full_name: string;
  birth_date: string;
  id_gym: number;
  dni: number;
  id_level: number;
}
interface GetMembersByGymResponse {
  message: string;
  members: FullMemberInfo[];
}

type MemberInfoWithIDs = Omit<FullMemberInfo, "category" | "gym" | "level"> & {
  id_category: number;
  id_level: number;
  id_gym: number;
};

interface CreateMemberResponse {
  message: string;
  member: MemberInfoWithIDs;
}
