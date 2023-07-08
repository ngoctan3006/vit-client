import { Avatar, Badge, Button, Table, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useMemo, useState } from 'react';
import { BsCheck, BsX } from 'react-icons/bs';
import { getActivityMember } from 'services/activity';
import { GetActivityMember } from 'src/redux/actions';
import { convertData, getStatus } from '../utils';

interface ActivityMemberProps {
  id?: number;
  name?: string;
}

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
            row[`${item.id}`] && (
              <div className="d-flex justify-between">
                <Badge color={color} text={text} />
                <div className="d-center gap-2">
                  {(row[`${item.id}`] === 'REGISTERED' ||
                    row[`${item.id}`] === 'REJECTED') && (
                    <Tooltip title="Chấp nhận">
                      <Button
                        className="d-center"
                        type="primary"
                        shape="circle"
                        size="small"
                        icon={<BsCheck />}
                      />
                    </Tooltip>
                  )}
                  {(row[`${item.id}`] === 'REGISTERED' ||
                    row[`${item.id}`] === 'ACCEPTED') && (
                    <Tooltip title="Từ chối">
                      <Button
                        className="d-center"
                        type="primary"
                        danger
                        shape="circle"
                        size="small"
                        icon={<BsX />}
                      />
                    </Tooltip>
                  )}
                </div>
              </div>
            )
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
