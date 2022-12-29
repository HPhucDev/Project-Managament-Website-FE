import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Col,
  Row,
  DatePicker,
  InputNumber,
  Space,
  Upload,
} from "antd";
import propTypes from "prop-types";
import { Button } from "../../../../components/buttons/buttons";
import { Modal } from "../../../../components/modals/antd-modals";
import { CheckboxGroup } from "../../../../components/checkbox/checkbox";
import { BasicFormWrapper } from "../../../styled";
import { InboxOutlined } from "@ant-design/icons";

const dateFormat = "MM/DD/YYYY";
const { RangePicker } = DatePicker;

const CreateProject = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [state, setState] = useState({
    visible,
    modalType: "primary",
    checked: [],
  });

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        visible,
      });
    }
    return () => {
      unmounted = true;
    };
  }, [visible]);

  const handleOk = () => {
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };
  console.log(fileList);

  return (
    <Modal
      type={state.modalType}
      title="Tạo đề tài"
      visible={state.visible}
      footer={[
        <div key="1" className="project-modal-footer">
          <Button size="default" type="primary" key="submit" onClick={handleOk}>
            Tạo
          </Button>
          <Button
            size="default"
            type="white"
            key="back"
            outlined
            onClick={handleCancel}
          >
            Hủy
          </Button>
        </div>,
      ]}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form form={form} name="createProject" onFinish={handleOk}>
            <Form.Item name="project" style={{ margin: 0 }}>
              <label>Tên đề tài</label>
              <Input placeholder="Tên đề tài" />
            </Form.Item>{" "}
            <Space size={8}>
              <Row md={12}>
                <Col md={12}>
                  <Form.Item name="start" label="">
                    <label>Khóa học</label>
                    <DatePicker picker="year" placeholder="Chọn khóa học" />
                  </Form.Item>
                </Col>
                <Col md={12}>
                  <Form.Item name="description" label="">
                    <label>Chuyên ngành</label>
                    <Select
                      defaultValue={"1"}
                      style={{ width: "281px" }}
                      placeholder="Chọn chuyên ngành"
                      options={[
                        {
                          value: "1",
                          label: "Công nghệ phần mềm",
                        },
                        {
                          value: "2",
                          label: "Hệ thống thông tin",
                        },
                        {
                          value: "3",
                          label: "Mạng máy tính",
                        },
                        {
                          value: "4",
                          label: "Kỹ thuật sữ liệu",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row md={12}>
                <Col md={12}></Col>
                <Col md={12}></Col>
              </Row>
            </Space>
            <Form.Item name="description" label="" style={{ margin: 0 }}>
              <label>Thông tin đề tài</label>
              <Input.TextArea rows={4} placeholder="Thông tin đề tài" />
            </Form.Item>
            <Form.Item name="dragger" style={{ marginTop: 0 }}>
              <label>File đính kèm</label>
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={fileList}
                noStyle
              >
                <Upload.Dragger
                  name="files"
                  accept=".jpg, .jpeg, .png, .xls, .xlsx, .ppt, .pptx, .pdf, .docx, .doc, .zip, .rar "
                  beforeUpload={(file) => {
                    setFileList([...fileList, file]);
                    return false;
                  }}
                  onRemove={(file) => {
                    console.log(file);
                    const index = fileList.findIndex(
                      (item) => item.uid === file.uid
                    );
                    console.log(index);
                    const newFileList = fileList.splice(index, 1);

                    console.log(newFileList);
                    setFileList(newFileList);
                    return false;
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click hoặc thả file vào đây để đính kèm
                  </p>
                  <p className="ant-upload-hint">
                    Hỗ trợ file có định dạng .zip,.rar,.docx,.xlsx,.csv,.pdf,...
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
};

CreateProject.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
};

export default CreateProject;
