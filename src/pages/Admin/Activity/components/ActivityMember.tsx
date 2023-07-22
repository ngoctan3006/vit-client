import {
  Avatar,
  Badge,
  Button,
  Table,
  Tooltip,
  Typography,
  message,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useMemo, useState } from 'react';
import { BsCheck, BsX } from 'react-icons/bs';
import {
  ConfirmationDto,
  approveActivity,
  getActivityMember,
  rejectActivity,
} from 'services/activity';
import { GetActivityMember } from 'src/redux/actions';
import { Activity } from 'src/redux/slices/activity.slice';
import { ActivityStatus } from '../constants';
import { convertAnalyticData, convertData, getStatus } from '../utils';

interface ActivityMemberProps {
  activity?: Activity;
}

export interface ActivityMemberState {
  id: string;
  username: string;
  fullname: string;
  avatar: string | null;
  [key: string]: string | null;
}

export interface ActivityAnalytic {
  [key: number]: number;
  name: string;
}

const ActivityMember: React.FC<ActivityMemberProps> = ({ activity }) => {
  const [loading, setLoading] = useState(false);
  const [activityMember, setActivityMember] = useState<GetActivityMember[]>([]);

  const getMember = async () => {
    if (activity) {
      try {
        setLoading(true);
        const { data } = await getActivityMember(activity.id);
        setActivityMember(data.data);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const approve = async (approveData: ConfirmationDto) => {
    try {
      setLoading(true);
      const { data } = await approveActivity(approveData);
      console.log(data);
      await getMember();
      message.success(data.data.message);
    } catch (error: any) {
      message.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const reject = async (rejectData: ConfirmationDto) => {
    try {
      setLoading(true);
      const { data } = await rejectActivity(rejectData);
      console.log(data);
      await getMember();
      message.success(data.data.message);
    } catch (error: any) {
      message.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
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
                        onClick={() =>
                          approve({ userId: Number(row.id), timeId: item.id })
                        }
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
                        onClick={() =>
                          reject({ userId: Number(row.id), timeId: item.id })
                        }
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

  const analyticColumns: ColumnsType<ActivityAnalytic> = useMemo(() => {
    return [
      {
        dataIndex: 'name',
        title: '',
        render: (text: string) => (
          <Typography.Text>{ActivityStatus[text]}</Typography.Text>
        ),
      },
      ...activityMember.map((item) => ({
        dataIndex: `${item.id}`,
        title: item.name,
      })),
    ];
  }, [[activityMember]]);

  const dataSource: ActivityMemberState[] = useMemo(
    () => convertData(activityMember),
    [activityMember]
  );

  const analyticData: ActivityAnalytic[] = useMemo(
    () => convertAnalyticData(activityMember, activity?.times),
    [activityMember]
  );

  useEffect(() => {
    getMember();
  }, [activity?.id]);

  return (
    <div>
      <p className="subtitle">{activity?.name}</p>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        size="small"
        bordered
      />

      <Table
        loading={loading}
        columns={analyticColumns}
        dataSource={analyticData}
        size="small"
        pagination={false}
      />
    </div>
  );
};

export default ActivityMember;
