import { Dayjs } from 'dayjs';

export interface ActivityValues {
  name: string;
  description: string;
  location: string;
  deadline_date: Dayjs;
  deadline_time: Dayjs;
  times: Array<{
    name: string;
    date: Dayjs;
    time: Dayjs[];
  }>;
}
