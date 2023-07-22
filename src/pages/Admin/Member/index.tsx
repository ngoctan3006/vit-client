import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Table,
  Tabs,
  TabsProps,
  Tag,
  Typography,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { getAllMember } from 'redux/actions';
import { memberSelector } from 'redux/slices/member.slice';
import { useAppDispatch } from 'redux/store';
import { DATE_FORMAT } from 'src/constants';
import { defaultQueryParam } from 'src/constants/type';
import { getPosition } from 'utils';
import './index.scss';
import { CreateMemberValues, MemberDataType } from './types';
import { Position } from 'src/constants/position';

const Member: React.FC = () => {
  const dispatch = useAppDispatch();
  const { members, loading } = useSelector(memberSelector);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('manual');
  const [form] = Form.useForm<CreateMemberValues>();

  const onChange = (key: string) => {
    setTab(key);
  };

  const columns: ColumnsType<MemberDataType> = [
    {
      key: 'username',
      title: 'Tên đăng nhập',
      dataIndex: 'username',
    },
    {
      key: 'fullname',
      title: 'Họ và tên',
      dataIndex: 'fullname',
    },
    {
      key: 'email',
      title: 'Địa chỉ email',
      dataIndex: 'email',
    },
    {
      key: 'phone',
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      key: 'date_join',
      title: 'Ngày vào Đội',
      dataIndex: 'date_join',
      render: (text) => (text ? dayjs(new Date(text)).format('MM/YYYY') : ''),
    },
    {
      key: 'date_out',
      title: 'Ngày rời Đội',
      dataIndex: 'date_out',
      render: (text) => (text ? dayjs(new Date(text)).format('MM/YYYY') : ''),
    },
    {
      key: 'gender',
      title: 'Giới tính',
      dataIndex: 'gender',
      render: (text) =>
        text === 'MALE' ? 'Nam' : text === 'FEMALE' ? 'Nữ' : 'Khác',
    },
    {
      key: 'status',
      title: 'Trạng thái',
      dataIndex: 'status',
      align: 'center',
      render: (text) =>
        text === 'ACTIVE' ? (
          <Tag color="success">Hoạt động</Tag>
        ) : text === 'INACTIVE' ? (
          <Tag color="warning">Không hoạt động</Tag>
        ) : (
          <Tag color="error">Blocked</Tag>
        ),
    },
    {
      key: 'position',
      title: 'Vị trí',
      dataIndex: 'position',
      render: (text) => getPosition(text),
    },
  ];

  const dataSource: MemberDataType[] = members.map<MemberDataType>(
    ({
      username,
      fullname,
      email,
      phone,
      date_join,
      date_out,
      gender,
      status,
      position,
    }) => ({
      key: username,
      username,
      fullname,
      email,
      phone,
      date_join,
      date_out,
      gender,
      status,
      position,
    })
  );

  const handleCancel = () => {
    setOpen(false);
  };

  const getMembers = async () => {
    dispatch(getAllMember(defaultQueryParam));
  };

  useEffect(() => {
    document.title = 'VIT | Quản lý nhân sự';
    getMembers();
  }, []);

  const items: TabsProps['items'] = [
    {
      key: 'manual',
      label: <Typography.Text>Nhập tay</Typography.Text>,
      children: (
        <Form
          name="create-member"
          form={form}
          className="mt-6"
          labelCol={{ span: 6 }}
          labelAlign="left"
          initialValues={{
            gender: 'OTHER',
            position: 'MEMBER',
          }}
        >
          <Form.Item
            label="Họ tên"
            name="fullname"
            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập Email' }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Giới tính" name="gender">
            <Radio.Group>
              <Radio value="MALE">Nam</Radio>
              <Radio value="FEMALE">Nữ</Radio>
              <Radio value="OTHER">Khác</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Ngày sinh" name="birthday">
            <DatePicker
              placeholder=""
              className="w-full"
              format={DATE_FORMAT}
            />
          </Form.Item>
          <Form.Item label="Trường (Khoa/Viện)" name="school">
            <Input />
          </Form.Item>
          <Form.Item label="Lớp" name="class">
            <Input />
          </Form.Item>
          <Form.Item label="MSSV" name="student_id">
            <Input />
          </Form.Item>
          <Form.Item label="Ngày vào Đội" name="date_join">
            <DatePicker
              placeholder=""
              className="w-full"
              format={DATE_FORMAT}
            />
          </Form.Item>
          <Form.Item id="position-select" label="Vị trí" name="position">
            <Select options={Position} />
          </Form.Item>
        </Form>
      ),
    },
    {
      key: 'file',
      label: <Typography.Text>Thêm tệp</Typography.Text>,
      children: <div>thêm tệp</div>,
    },
  ];

  return (
    <div className="content member">
      <h2 className="title mb-15">Quản lý nhân sự</h2>
      <div className="d-flex mb-6">
        <Button
          className="d-center ml-auto gap-2"
          type="primary"
          icon={<AiOutlinePlus />}
          onClick={() => setOpen(true)}
        >
          Thêm thành viên
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
        open={open}
        title="Thêm thành viên"
        onCancel={handleCancel}
        onOk={handleCancel}
        cancelText="Huỷ"
        width={600}
      >
        <Tabs items={items} onChange={onChange} />
      </Modal>
    </div>
  );
};

export default Member;
