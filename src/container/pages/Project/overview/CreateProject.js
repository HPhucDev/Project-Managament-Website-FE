import React, { useState, useEffect } from "react";
import { Form, Input, Select, Col, Row, DatePicker, InputNumber } from "antd";
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
            <Form.Item name="project">
              <label>Tên đề tài</label>
              <Input placeholder="Tên đề tài" />
            </Form.Item>
            <Form.Item name="description" label="">
              <label>Thông tin đề tài</label>
              <Input.TextArea rows={4} placeholder="Thông tin đề tài" />
            </Form.Item>
            <Col md={11}>
              <Form.Item name="description" label="">
                <label>Số lượng thành viên</label>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={3}
                  rows={1}
                  placeholder="Số lượng thành viên"
                />
              </Form.Item>
            </Col>
            <Row md={12}>
              <Col md={12}>
                <Form.Item name="start" label="">
                  <label>Ngày bắt đầu</label>
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>

              <Col md={12}>
                <Form.Item name="start" label="">
                  <label>Ngày kết thúc</label>
                  <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                </Form.Item>
              </Col>
            </Row>
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
