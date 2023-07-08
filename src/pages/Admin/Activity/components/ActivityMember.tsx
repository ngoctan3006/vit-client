import { Avatar, Badge, Table, Tooltip, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useMemo, useState } from 'react';
import { getActivityMember } from 'services/activity';
import { GetActivityMember } from 'src/redux/actions';
import { convertData } from '../utils';

interface ActivityMemberProps {
  id?: number;
  name?: string;
}

const getStatus = (status?: string | null) => {
  if (status === 'REGISTERED') return ['blue', 'Đăng ký'];
  if (status === 'ACCEPTED') return ['green', 'Đã chấp nhận'];
  if (status === 'WITHDRAWN') return ['yellow', 'Xin nghỉ'];
  if (status === 'REJECTED') return ['red', 'Từ chối'];
  return [undefined, undefined];
};

export interface ActivityMemberState {
  id: string;
  username: string;
  fullname: string;
  avatar: string | null;
  [key: string]: string | null;
}

const ActivityMember: React.FC<ActivityMemberProps> = ({ id, name }) => {
  const [loading, setLoading] = useState(false);
  const [activityMember, setActivityMember] = useState<GetActivityMember[]>([]);

  const getMember = async () => {
    if (id) {
      try {
        setLoading(true);
        const { data } = await getActivityMember(id);
        setActivityMember(data.data);
        data.data.map((item) => ({
          fullname: '',
        }));
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const columns: ColumnsType<ActivityMemberState> = useMemo(() => {
    return [
      {
        key: 'fullname',
        title: 'Họ Tên',
        render: (
          _: string,
          { fullname, avatar, username }: ActivityMemberState
        ) => (
          <div className="d-flex gap-2 justify-start align-center">
            <Avatar src={avatar}>{username.charAt(0).toUpperCase()}</Avatar>
            <Tooltip title={username}>
              <p className="d-center mb-0">{fullname}</p>
            </Tooltip>
          </div>
        ),
      },
      ...activityMember.map((item) => ({
        key: `${item.id}`,
        title: item.name,
        render: (_: string, row: ActivityMemberState) => {
          const [color, text] = getStatus(row[`${item.id}`]);
          return (
            <div className="d-flex justify-between">
              <Badge color={color} text={text} />
            </div>
          );
        },
      })),
    ];
  }, [activityMember]);

  const dataSource: ActivityMemberState[] = useMemo(
    () => convertData(activityMember),
    [activityMember]
  );

  console.log({ dataSource });

  useEffect(() => {
    getMember();
  }, [id]);

  return (
    <div>
      <p className="subtitle">{name}</p>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        size="small"
        bordered
      />
    </div>
  );
};

export default ActivityMember;
