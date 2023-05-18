import moment from 'moment';

export const getColorOfDate = (
  startDate: string,
  endDate: string
): 'danger' | 'success' | 'warning' => {
  if (moment().isBefore(moment(startDate))) return 'warning';
  if (moment().isAfter(moment(endDate))) return 'danger';
  return 'success';
};
