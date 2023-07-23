import dayjs from 'dayjs';

export const getColorOfDate = (
  startDate: string,
  endDate: string
): 'danger' | 'success' | 'warning' => {
  if (dayjs().isBefore(dayjs(startDate))) return 'warning';
  if (dayjs().isAfter(dayjs(endDate))) return 'danger';
  return 'success';
};
