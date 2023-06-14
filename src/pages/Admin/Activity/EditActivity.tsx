import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Space,
  TimePicker,
  Typography,
} from 'antd';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';
import { DATE_FORMAT, TIME_FORMAT } from 'src/constants';
import { Activity } from 'src/redux/slices/activity.slice';
import { ActivityValues } from './types';

interface EditActivityProps {
  activity?: Activity;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditActivity: React.FC<EditActivityProps> = ({
  activity,
  open,
  setOpen,
}) => {
  const [form] = Form.useForm<ActivityValues>();

  const handleSubmit = async (data: ActivityValues) => {
    console.log(data);
  };

  const initialValues = activity && {
    id: activity.id,
    name: activity.name,
    description: activity.description,
    location: activity.location,
    deadline_date: dayjs(activity.deadline),
    deadline_time: dayjs(activity.deadline),
    times: activity.times.map((time) => ({
      id: time.id,
      name: time.name,
      date: dayjs(time.start_time),
      time: [dayjs(time.start_time), dayjs(time.end_time)],
    })),
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    if (initialValues) form.setFieldsValue(initialValues);
  };

  useEffect(() => {
    handleReset();
  }, [activity]);

  return (
    <Drawer
      title="Chỉnh sửa hoạt động"
      width={600}
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button onClick={onClose}>Huỷ</Button>
          <Button onClick={handleReset} type="primary">
            Đặt lại
          </Button>
          <Button onClick={onClose} type="primary">
            Xác nhận
          </Button>
        </Space>
      }
    >
      <Form
        form={form}
        name="create-activity"
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
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
          <Input />
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
        <Typography>Deadline đăng ký</Typography>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Ngày"
              name="deadline_date"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn deadline đăng ký hoạt động',
                },
              ]}
            >
              <DatePicker
                placeholder=""
                className="w-full"
                format={DATE_FORMAT}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Giờ"
              name="deadline_time"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn deadline đăng ký hoạt động',
                },
              ]}
            >
              <TimePicker
                placeholder=""
                className="w-full"
                format={TIME_FORMAT}
              />
            </Form.Item>
          </Col>
        </Row>
        <Typography>Thời gian diễn ra</Typography>
        <Form.List name="times">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <Row gutter={16} key={key}>
                  <Col span={6}>
                    <Form.Item
                      {...restField}
                      label="Tên"
                      name={[name, 'name']}
                      initialValue={`Kíp ${index + 1}`}
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập tên kíp hoạt động này',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Ngày"
                      name={[name, 'date']}
                      rules={[
                        {
                          required: true,
                          message:
                            'Vui lòng chọn ngày diễn ra kíp hoạt động này',
                        },
                      ]}
                    >
                      <DatePicker
                        placeholder=""
                        className="w-full"
                        format={DATE_FORMAT}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Giờ"
                      name={[name, 'time']}
                      rules={[
                        {
                          required: true,
                          message:
                            'Vui lòng chọn giờ diễn ra kíp hoạt động này',
                        },
                      ]}
                    >
                      <TimePicker.RangePicker
                        className="w-full"
                        placeholder={['Bắt đầu', 'Kết thúc']}
                        format={[TIME_FORMAT, TIME_FORMAT]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2} className="d-flex">
                    <Button
                      className="d-center my-auto"
                      type="primary"
                      danger
                      shape="circle"
                      icon={<HiOutlineTrash />}
                      disabled={fields.length <= 1}
                      onClick={() => remove(name)}
                    />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block>
                  Thêm kíp
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Drawer>
  );
};

export default EditActivity;
