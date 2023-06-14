import { Dayjs } from 'dayjs';

export interface ActivityValues {
  id?: number;
  name: string;
  description: string;
  location: string;
  deadline_date: Dayjs;
  deadline_time: Dayjs;
  times: Array<{
    id?: number;
    name: string;
    date: Dayjs;
    time: Dayjs[];
  }>;
}
