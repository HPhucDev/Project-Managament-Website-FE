import React, { useState, useEffect } from "react";
import { Form, Input, Select, Col, Row, DatePicker } from "antd";
import propTypes from "prop-types";
import { Button } from "../../../../components/buttons/buttons";
import { Modal } from "../../../../components/modals/antd-modals";
import { CheckboxGroup } from "../../../../components/checkbox/checkbox";
import { BasicFormWrapper } from "../../../styled";

const { Option } = Select;
const dateFormat = "MM/DD/YYYY";

const CreateProject = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

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

  const options = [
    {
      label: "Privet",
      value: "privet",
    },
    {
      label: "Team",
      value: "team",
    },
    {
      label: "Public",
      value: "public",
    },
  ];

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
            <Form.Item name="project" label="">
              <Input placeholder="Tên đề tài" />
            </Form.Item>

            <Form.Item name="description" label="">
              <Input.TextArea rows={4} placeholder="Thông tin đề tài" />
            </Form.Item>
            <Col md={12}>
              <Form.Item name="start" label="Ngày bắt đầu">
                <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item name="end" label="Ngày kết thúc">
                <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
              </Form.Item>
            </Col>
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
