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
    number_require: number;
    date: Dayjs;
    time: Dayjs[];
  }>;
}
