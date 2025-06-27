interface FullMemberInfo {
  id: number;
  full_name: string;
  birth_date: string;
  age: number;
  category: string ;
  gym: string;
  dni: number;
  level: string;
}
interface CreateMember {
  full_name: string;
  birth_date: string;
  id_category: number;
  id_gym: number;
  dni: number;
  id_level: number;
}
interface GetMembersByGymResponse {
  message: string;
  members: FullMemberInfo[];
}

interface CreateMemberResponse {
  message: string;
  member: FullMemberInfo & { id: number};
}