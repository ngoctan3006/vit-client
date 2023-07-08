export const getStatus = (status?: string | null) => {
  if (status === 'REGISTERED') return ['blue', 'Đăng ký'];
  if (status === 'ACCEPTED') return ['green', 'Đã chấp nhận'];
  if (status === 'WITHDRAWN') return ['yellow', 'Xin nghỉ'];
  if (status === 'REJECTED') return ['red', 'Từ chối'];
  return [undefined, undefined];
};
