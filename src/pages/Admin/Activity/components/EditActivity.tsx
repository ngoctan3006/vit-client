import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Space,
  TimePicker,
  Typography,
} from 'antd';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import React, { useEffect } from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';
import { DATE_FORMAT, TIME_FORMAT } from 'src/constants';
import { updateActivity } from 'src/redux/actions';
import { Activity } from 'src/redux/slices/activity.slice';
import { useAppDispatch } from 'src/redux/store';
import { ActivityValues } from '../types';

dayjs.extend(weekday);
dayjs.extend(localeData);

interface EditActivityProps {
  activity?: Activity;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditActivity: React.FC<EditActivityProps> = ({ activity, setOpen }) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<ActivityValues>();

  const handleSubmit = async (data: ActivityValues) => {
    if (activity)
      dispatch(
        updateActivity({
          id: activity.id,
          name: data.name,
          description: data.description,
          location: data.location,
          deadline: dayjs(data.deadline_date)
            .hour(data.deadline_time.hour())
            .minute(data.deadline_time.minute())
            .second(0)
            .millisecond(0)
            .toISOString(),
          times: data.times.map((time) => ({
            id: time.id ? time.id : 0,
            name: time.name,
            start_time: dayjs(time.date)
              .hour(time.time[0].hour())
              .minute(time.time[0].minute())
              .second(0)
              .millisecond(0)
              .toISOString(),
            end_time: dayjs(time.date)
              .hour(time.time[1].hour())
              .minute(time.time[1].minute())
              .second(0)
              .millisecond(0)
              .toISOString(),
          })),
        })
      );
    onClose();
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
    <div className="d-center">
      <Form
        className="mt-5"
        form={form}
        name="edit-activity"
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
            {
              required: true,
              message: 'Vui lòng nhập mô tả của hoạt động',
            },
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
                <Space>
                  <Button type="dashed" onClick={() => add()}>
                    Thêm kíp
                  </Button>
                  <Button onClick={handleReset} type="primary">
                    Đặt lại
                  </Button>
                  <Button onClick={() => form.submit()} type="primary">
                    Lưu
                  </Button>
                </Space>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

export default EditActivity;
