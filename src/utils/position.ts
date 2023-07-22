const Position = {
  ADMIN: 'Quản trị viên',
  DOI_TRUONG: 'Đội trưởng',
  DOI_PHO: 'Đội phó',
  TRUONG_PHONG_TRAO: 'Trưởng mảng Phong trào',
  PHO_PHONG_TRAO: 'Phó mảng Phong trào',
  TRUONG_HANH_CHINH: 'Trưởng mảng Hành chính',
  PHO_HANH_CHINH: 'Phó mảng Hành chính',
  TRUONG_HAU_CAN: 'Trưởng mảng Hậu cần',
  PHO_HAU_CAN: 'Phó mảng hậu cần',
  TRUONG_TRUYEN_THONG: 'Trưởng mảng Truyền thông',
  PHO_TRUYEN_THONG: 'Phó mảng Truyền thông',
  CN_MEDIA: 'Chủ nhiệm CLB VIT Media',
  CN_GUITAR: 'Chủ nhiệm CLB VIT Guitar',
  CN_DANCER: 'Chủ nhiệm CLB VIT Dancer',
  NHOM_TRUONG: 'Nhóm trưởng',
  NHOM_PHO: 'Nhóm phó',
  MEMBER: 'Thành viên',
};

export const getPosition = (key: string) =>
  Position[key as keyof typeof Position] || 'Không xác định';
