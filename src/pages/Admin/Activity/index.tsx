import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  TimePicker,
  Tooltip,
  Typography,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi2';
import { MdModeEditOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { defaultQueryParam } from '../../../constants/type';
import { createActivity, getAllActivity } from '../../../redux/actions';
import {
  Activity as ActivityType,
  activitySelector,
} from '../../../redux/slices/activity.slice';
import { AppDispatch } from '../../../redux/store';
import { formatTime, getColorOfDate } from '../../../utils';
import './index.scss';

interface DataType extends ActivityType {
  key: string;
}

interface FormValues {
  name: string;
  description: string;
  location: string;
  start_date: any;
  start_time: any;
  end_date: any;
  end_time: any;
}

const dateFormat = 'DD/MM/YYYY';
const dateFormat2 = 'YYYY-MM-DD';
const timeFormat = 'HH:mm';

const Activity: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activities, deletedActivities, loading } =
    useSelector(activitySelector);
  const [form] = Form.useForm<FormValues>();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: '#',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'Tên hoạt động',
      dataIndex: 'name',
    },
    {
      key: 'description',
      title: 'Mô tả',
      dataIndex: 'description',
    },
    {
      key: 'start_date',
      title: 'Thời gian bắt đầu',
      dataIndex: 'start_date',
      render: (_, item) => (
        <Typography.Text type={getColorOfDate(item.start_date, item.end_date)}>
          {item.start_date
            ? moment(item.start_date).format(`${timeFormat} ${dateFormat}`)
            : ''}
        </Typography.Text>
      ),
    },
    {
      key: 'end_date',
      title: 'Thời gian kết thúc',
      dataIndex: 'end_date',
      render: (_, item) => (
        <Typography.Text type={getColorOfDate(item.start_date, item.end_date)}>
          {item.end_date
            ? moment(item.end_date).format(`${timeFormat} ${dateFormat}`)
            : ''}
        </Typography.Text>
      ),
    },
    {
      key: 'location',
      title: 'Địa điểm',
      dataIndex: 'location',
    },
    {
      key: 'event_id',
      title: 'Sự kiện',
      dataIndex: 'event_id',
    },
    {
      key: 'action',
      title: 'Thao tác',
      render: (_, item) => (
        <Space>
          <Tooltip title="Sửa">
            <Button
              type="primary"
              shape="circle"
              icon={<MdModeEditOutline />}
              onClick={() => {
                console.log('edit ', item.id);
              }}
            />
          </Tooltip>
          <Tooltip title="Xoá">
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<HiOutlineTrash />}
              onClick={() => {
                console.log('delete ', item.id);
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const dataSource: DataType[] = activities.map((item) => ({
    key: `${item.id}`,
    ...item,
  }));

  const getActivities = async () => {
    dispatch(getAllActivity(defaultQueryParam));
  };

  useEffect(() => {
    document.title = 'VIT | Quản lý hoạt động';
    getActivities();
  }, []);

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsCreateModalOpen(false);
  };

  const handleSubmit = async (data: FormValues) => {
    dispatch(
      createActivity({
        name: data.name,
        description: data.description,
        location: data.location,
        start_date: formatTime(
          moment(data.start_date['$d']).format(dateFormat2),
          moment(data.start_time['$d']).format(timeFormat)
        ),
        end_date: formatTime(
          moment(data.end_date['$d']).format(dateFormat2),
          moment(data.end_time['$d']).format(timeFormat)
        ),
      })
    );
    setIsCreateModalOpen(false);
  };

  return (
    <div className="content activity">
      <h2 className="title mb-3">Quản lý hoạt động</h2>
      <div className="mb-6">
        <Button
          className="d-center ml-auto gap-2"
          type="primary"
          icon={<AiOutlinePlus />}
          onClick={() => setIsCreateModalOpen(true)}
        >
          Tạo hoạt động
        </Button>
      </div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        size="small"
        bordered
      />

      <Modal
        title="Tạo hoạt động mới"
        open={isCreateModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
          className="mt-10"
        >
          <Form.Item
            label="Tên hoạt động"
            name="name"
            rules={[{ required: true, message: 'Vui lòng nhập tên hoạt động' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[
              { required: true, message: 'Vui lòng nhập mô tả của hoạt động' },
            ]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item
            label="Địa điểm"
            name="location"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập địa điểm diễn ra hoạt động',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Ngày bắt đầu"
                name="start_date"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn ngày bắt đầu diễn ra hoạt động',
                  },
                ]}
              >
                <DatePicker className="w-full" format={dateFormat} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Thời gian bắt đầu"
                name="start_time"
                rules={[
                  {
                    required: true,
                    message:
                      'Vui lòng chọn thời gian bắt đầu diễn ra hoạt động',
                  },
                ]}
              >
                <TimePicker className="w-full" format={timeFormat} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Ngày kết thúc"
                name="end_date"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn ngày kết thúc hoạt động',
                  },
                ]}
              >
                <DatePicker className="w-full" format={dateFormat} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Thời gian kết thúc"
                name="end_time"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn thời gian kết thúc hoạt động',
                  },
                ]}
              >
                <TimePicker className="w-full" format={timeFormat} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default Activity;
