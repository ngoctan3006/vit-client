import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Select,
  Table,
  Tabs,
  TabsProps,
  Tag,
  Typography,
  message,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { getAllMember } from 'redux/actions';
import { memberSelector } from 'redux/slices/member.slice';
import { useAppDispatch } from 'redux/store';
import { DATE_FORMAT } from 'src/constants';
import { Position } from 'src/constants/position';
import { defaultQueryParam } from 'src/constants/type';
import { importMany, signupUser } from 'src/services/auth';
import { getPosition } from 'utils';
import './index.scss';
import { CreateMemberValues, MemberDataType } from './types';
import { updateMemberPosition } from 'src/services/admin';

export interface UpdateUserInfo {
  id: number;
  fullname: string;
  username: string;
  email: string;
  phone: string;
  position: string;
}

const Member: React.FC = () => {
  const dispatch = useAppDispatch();
  const { members, loading } = useSelector(memberSelector);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('manual');
  const [form1] = Form.useForm<CreateMemberValues>();
  const [form2] = Form.useForm<MemberDataType>();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File>();
  const [value, setValue] = useState();
  const [isFileEmpty, setIsFileEmpty] = useState(false);
  const [isSendMail, setIsSendMail] = useState(true);
  const [filter, setFilter] = useState('');
  const [filterText, setFilterText] = useState('');
  const [editModal, setEditModal] = useState(false);
  const [currMember, setCurrMember] = useState<UpdateUserInfo>();

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      setFilterText(filter);
    }
  };

  const onFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

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
    {
      key: 'action',
      title: 'Chỉnh sửa',
      render: (_: string, member: MemberDataType) => (
        <Button
          icon={<MdModeEditOutline />}
          shape="circle"
          type="primary"
          onClick={() => {
            setCurrMember(member);
            setEditModal(true);
            form2.setFieldsValue(member);
          }}
        />
      ),
    },
  ];

  const dataSource: MemberDataType[] = useMemo(() => {
    if (filterText)
      return members
        .filter((mem) => mem.username.includes(filterText))
        .map<MemberDataType>(
          ({
            id,
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
            id,
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
    else
      return members.map<MemberDataType>(
        ({
          id,
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
          id,
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
  }, [filterText, members]);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOK = () => {
    if (tab === 'manual') form1.submit();
    else handleUpload();
  };

  const handleSubmit = async (createMemberValues: CreateMemberValues) => {
    const { birthday, date_join, ...rest } = createMemberValues;
    try {
      setIsLoading(true);
      setOpen(false);
      const { data } = await signupUser({
        ...rest,
        birthday: birthday && dayjs(birthday).toISOString(),
        date_join: date_join && dayjs(date_join).toISOString(),
      });
      await getMembers();
      message.success(data.data.message);
      form1.resetFields();
    } catch (error: any) {
      message.error(error.response.data.message);
      setOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setIsFileEmpty(true);
      return;
    }
    const fileData = new FormData();
    fileData.append('file', file);
    try {
      setIsLoading(true);
      setOpen(false);
      const { data } = await importMany(fileData, isSendMail);
      message.success(data.data.message);
      setValue(undefined);
      await getMembers();
    } catch (error: any) {
      console.log(error);
      message.error(error.response.data.message);
      setOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (file) setIsFileEmpty(false);
  }, [file]);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const getMembers = async () => {
    dispatch(getAllMember(defaultQueryParam));
  };

  const handleDownload = () => {
    const fileUrl = '/src/assets/excel/template-data.xlsx';
    window.open(fileUrl, '_blank');
  };

  const handleEditInfoOk = () => {
    form2.submit();
    setEditModal(false);
  };

  const handleEditModalCancel = () => {
    form2.resetFields();
    setEditModal(false);
  };

  const handleEditFormSubmit = async (formData: UpdateUserInfo) => {
    if (!currMember) return;
    try {
      setIsLoading(true);
      const { data } = await updateMemberPosition(currMember.id, formData);
      await getMembers();
      message.success('Cập nhật vị trí thành viên thành công');
      console.log(data);
    } catch (error: any) {
      message.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
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
          form={form1}
          className="mt-6"
          labelCol={{ span: 6 }}
          labelAlign="left"
          onFinish={handleSubmit}
          initialValues={{
            gender: 'OTHER',
            position: 'MEMBER',
            isSendMail: true,
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
              picker="month"
              format="MM/YYYY"
            />
          </Form.Item>
          <Form.Item id="position-select" label="Vị trí" name="position">
            <Select options={Position} />
          </Form.Item>
          <Form.Item
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 18 }}
            name="isSendMail"
          >
            <Checkbox>Gửi email?</Checkbox>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: 'file',
      label: <Typography.Text>Thêm tệp</Typography.Text>,
      children: (
        <>
          <div className="d-flex mt-6">
            <Button
              className="d-center ml-auto gap-2"
              type="primary"
              icon={<BsDownload />}
              onClick={handleDownload}
            >
              Tải file mẫu
            </Button>
          </div>
          <Row className="mt-6">
            <Col span={6}>
              <label htmlFor="upload-file">
                <span style={{ color: 'red' }}>* </span>
                File excel :
              </label>
            </Col>
            <Col span={18}>
              <input
                value={value}
                onChange={handleChangeFile}
                id="upload-file"
                type="file"
                name="file"
                accept=".xlsx,.xls"
              />
              {isFileEmpty && (
                <p className="mb-0" style={{ color: 'red' }}>
                  Bạn chưa chọn file nào
                </p>
              )}
            </Col>
          </Row>
          <Row className="my-4">
            <Col span={6}></Col>
            <Col span={18}>
              <Checkbox
                checked={isSendMail}
                onChange={(e) => {
                  setIsSendMail(e.target.checked);
                }}
              >
                Gửi email?
              </Checkbox>
            </Col>
          </Row>
          {/* <Form
            name="upload-file"
            form={form2}
            className="mt-6"
            onFinish={handleUpload}
            labelCol={{ span: 6 }}
            labelAlign="left"
            initialValues={{
              isSendMail: true,
            }}
          >
            <Form.Item
              label="File excel"
              name="file"
              rules={[
                { required: true, message: 'Vui lòng tải lên file của bạn' },
              ]}
            >
              <input type="file" />
            </Form.Item>
            <Form.Item
              valuePropName="checked"
              wrapperCol={{ offset: 6, span: 18 }}
              name="isSendMail"
            >
              <Checkbox>Gửi email?</Checkbox>
            </Form.Item>
          </Form> */}
        </>
      ),
    },
  ];

  return (
    <div className="content member">
      <h2 className="title mb-15">Quản lý nhân sự</h2>
      <div className="d-flex mb-6 gap-2">
        <Input
          placeholder="tìm theo username"
          style={{ width: 250 }}
          className="ml-auto"
          value={filter}
          onChange={onFilterChange}
          onKeyDown={onKeyPress}
        />
        <Button
          className="d-center gap-2"
          type="primary"
          icon={<AiOutlinePlus />}
          onClick={() => setOpen(true)}
        >
          Thêm thành viên
        </Button>
      </div>
      <Table
        loading={loading || isLoading}
        columns={columns}
        dataSource={dataSource}
        size="small"
        bordered
      />

      <Modal
        open={open}
        title="Thêm thành viên"
        onCancel={handleCancel}
        onOk={handleOK}
        cancelText="Huỷ"
        width={600}
      >
        <Tabs items={items} onChange={onChange} />
      </Modal>

      <Modal
        title="Chỉnh sửa thông tin TNV"
        open={editModal}
        onOk={handleEditInfoOk}
        onCancel={handleEditModalCancel}
        okText="Lưu"
        cancelText="Huỷ"
      >
        <Form
          form={form2}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={currMember}
          onFinish={handleEditFormSubmit}
        >
          <Form.Item label="Username" name="username">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phone">
            <Input disabled />
          </Form.Item>
          <Form.Item id="position-select" label="Vị trí" name="position">
            <Select options={Position} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Member;
