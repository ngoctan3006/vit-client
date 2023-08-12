import { Dayjs } from 'dayjs';

export interface MemberDataType {
  id: number;
  key: string;
  username: string;
  fullname: string;
  email: string;
  phone: string;
  date_join?: string | null;
  date_out?: string | null;
  gender: string;
  status: string;
  position: string;
}

export interface CreateMemberValues {
  fullname: string;
  email: string;
  phone: string;
  birthday: Dayjs;
  school: string;
  class: string;
  student_id: string;
  date_join: Dayjs;
  gender: string;
  position: string;
}

export interface CreateUserDto
  extends Omit<CreateMemberValues, 'birthday' | 'date_join'> {
  birthday: string;
  date_join: string;
}
