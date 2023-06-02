import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  TimePicker,
  Typography,
} from 'antd';
import moment from 'moment';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';
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
  deadline_date: any;
  deadline_time: any;
  times: Array<{
    name: string;
    date: any;
    time: any[];
  }>;
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
        deadline: formatTime(
          moment(data.deadline_date['$d']).format(DATE_FORMAT2),
          moment(data.deadline_time['$d']).format(TIME_FORMAT)
        ),
        times: data.times.map((time) => ({
          name: time.name,
          start_time: formatTime(
            moment(time.date['$d']).format(DATE_FORMAT2),
            moment(time.time[0]['$d']).format(TIME_FORMAT)
          ),
          end_time: formatTime(
            moment(time.date['$d']).format(DATE_FORMAT2),
            moment(time.time[1]['$d']).format(TIME_FORMAT)
          ),
        })),
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
      width={600}
    >
      <Form
        form={form}
        name="create-activity"
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
        className="mt-10"
        initialValues={{
          times: [{}],
        }}
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
                      className="my-auto"
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
    </Modal>
  );
};

export default CreateActivityModal;
