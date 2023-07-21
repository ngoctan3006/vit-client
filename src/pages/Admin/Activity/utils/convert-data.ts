import { GetActivityMember } from 'src/redux/actions';
import { ActivityTime } from 'src/redux/slices/activity.slice';
import {
  ActivityAnalytic,
  ActivityMemberState,
} from '../components/ActivityMember';

export const convertData = (data: GetActivityMember[]) => {
  const result: ActivityMemberState[] = [];
  data.forEach((item) => {
    item.member.forEach((member) => {
      let memberObj = result.find((obj) => obj.id === `${member.id}`);
      if (!memberObj) {
        memberObj = {
          id: `${member.id}`,
          username: member.username,
          fullname: member.fullname,
          avatar: member.avatar,
        };
        result.push(memberObj);
      }
      memberObj[item.id] = member.status;
    });
  });
  return result;
};

export const convertAnalyticData = (
  memberData: GetActivityMember[],
  activityTimes: ActivityTime[] = []
) => {
  const statusCounts: { [key: string]: { [key: number]: number } } = {};
  for (const day of memberData) {
    for (const member of day.member) {
      const { status } = member;
      if (!statusCounts[status]) {
        statusCounts[status] = {};
      }
      statusCounts[status][day.id] = (statusCounts[status][day.id] || 0) + 1;
    }
  }
  const fixedNames = ['ACCEPTED', 'REGISTERED', 'REJECTED', 'WITHDRAWN'];
  const resultArray: ActivityAnalytic[] = fixedNames.map((name) => {
    const statusObject: { name: string; [key: number]: number } = { name };
    for (const day of memberData) {
      statusObject[day.id] = statusCounts[name]?.[day.id] || 0;
    }
    return statusObject;
  });
  const totalObject: { name: string; [key: number]: number } = {
    name: 'TOTAL',
  };
  for (const day of memberData) {
    let total = 0;
    for (const name of fixedNames) {
      total += statusCounts[name]?.[day.id] || 0;
    }
    totalObject[day.id] = total;
  }
  const numberObject: { name: string; [key: number]: number } = {
    name: 'NUMBER',
  };
  for (const time of activityTimes) {
    numberObject[time.id] = time.number_require;
  }
  resultArray.unshift(numberObject);
  resultArray.unshift(totalObject);
  return resultArray;
};
