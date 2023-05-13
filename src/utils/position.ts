const Position = {
  ADMIN: 'Quản trị viên',
  MEMBER: 'Thành viên',
};

export const getPosition = (key: string) =>
  Position[key as keyof typeof Position] || 'Không xác định';
