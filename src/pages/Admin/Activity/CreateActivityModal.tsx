import { Col, DatePicker, Form, Input, Modal, Row, TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createActivity } from 'redux/actions';
import { AppDispatch } from 'redux/store';
import { DATE_FORMAT, DATE_FORMAT2, TIME_FORMAT } from 'src/constants';
import { formatTime } from 'utils';

interface CreateActivityModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormValues {
  name: string;
  description: string;
  location: string;
  deadline: string;
  start_date: any;
  start_time: any;
  end_date: any;
  end_time: any;
}

const CreateActivityModal: React.FC<CreateActivityModalProps> = ({
  show,
  setShow,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm<FormValues>();

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setShow(false);
  };

  const handleSubmit = async (data: FormValues) => {
    dispatch(
      createActivity({
        name: data.name,
        description: data.description,
        location: data.location,
        start_date: formatTime(
          moment(data.start_date['$d']).format(DATE_FORMAT2),
          moment(data.start_time['$d']).format(TIME_FORMAT)
        ),
        end_date: formatTime(
          moment(data.end_date['$d']).format(DATE_FORMAT2),
          moment(data.end_time['$d']).format(TIME_FORMAT)
        ),
      })
    );
    setShow(false);
  };

  return (
    <Modal
      title="Tạo hoạt động mới"
      open={show}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Tạo hoạt động"
      cancelText="Huỷ"
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
              <DatePicker className="w-full" format={DATE_FORMAT} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Thời gian bắt đầu"
              name="start_time"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn thời gian bắt đầu diễn ra hoạt động',
                },
              ]}
            >
              <TimePicker className="w-full" format={TIME_FORMAT} />
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
              <DatePicker className="w-full" format={DATE_FORMAT} />
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
              <TimePicker className="w-full" format={TIME_FORMAT} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateActivityModal;
