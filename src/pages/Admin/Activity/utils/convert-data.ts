import { GetActivityMember } from 'src/redux/actions';
import { ActivityMemberState } from '../components/ActivityMember';

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
